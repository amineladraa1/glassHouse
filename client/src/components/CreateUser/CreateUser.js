import React, { useState } from 'react'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles , ColorlibConnector , useColorlibStepIconStyles} from './Style'
import ArtistForm from './Forms/ArtistForm';
import PersonalForm from './Forms/PersonalForm';
import DisplayInfo from './Forms/DisplayInfo';





  
  
  
  function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;
  
    const icons = {
      1: <AssignmentIcon />,
      2: <PermIdentityIcon />,
      3: <VideoLabelIcon />,
    };
  
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }
  
  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };
  
  

  function getSteps() {
    return ['Enter artist info', 'Personal info', 'Check information'];
  }
  
  function getStepContent(step,handleNext ,handleBack ) {
    switch (step) {
      case 0:
        return <ArtistForm  handleNext={handleNext} handleBack={handleBack} />;
      case 1:
        return  <PersonalForm   handleNext={handleNext} handleBack={handleBack} />;
      case 2:
        return <DisplayInfo  handleBack={handleBack} />;
      default:
        return 'Unknown step';
    }};

  

function CreateUser() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const [formsData, setFormsData] = useState('')
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
      setActiveStep(0);
    };
    return (
        <div className={classes.root}>
             <Stepper className={classes.stepper} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
               {steps.map((label) => (
               <Step key={label}>
               <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
               </Step>
                ))}
             </Stepper>
            <div className = {classes.container}>
            <Typography className={classes.instructions}>{getStepContent(activeStep ,handleNext ,handleBack )}</Typography>
            <div>
              {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button> */}
            </div>
          </div>
        </div>
    )
               }

export default CreateUser
