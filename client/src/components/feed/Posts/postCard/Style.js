import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: "red[500]",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    width: "100%",
  },
}));
