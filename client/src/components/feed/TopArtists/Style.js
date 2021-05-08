import { makeStyles } from "@material-ui/core/styles";
import city from "../../../assets/city.jpg";
import wave from "../../../assets/wave.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
    width: "100%",
    marginTop: "74px",
    marginLeft: 0,
    backgroundImage: `linear-gradient(to top, rgba(245, 246, 252, 0.50), rgba(0,0,0, 0.73)), url(${city})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    objectFit: "contain",
    backgroundPosition: "center",
    position: "relative",
    // "&::before": {
    //   content: '""',
    //   position: "absolute",
    //   bottom: 0,
    //   left: 0,
    //   width: "100%",
    //   height: "260px",
    //   background: `url(${wave})`,
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    // },
  },
  title: {
    color: "white",
    margin: 0,
    padding: "0",
    position: "absolute",
    top: "5%",
    left: "40%",
    // color: "#000",
    fontSize: "40px",
  },
}));
