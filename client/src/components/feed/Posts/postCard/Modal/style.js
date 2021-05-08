import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  header: {
    paddingTop: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  artistName: {
    paddingLeft: '10px',
  },
  commentBody: {
    width: '500px',
    paddingLeft: '50px',
  },
}));
