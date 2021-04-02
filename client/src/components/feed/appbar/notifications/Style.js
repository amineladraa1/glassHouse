import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  grid: {
    width: "400px",
    flexDirection: "row",
  },
  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
