import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "#00A9FE",
    padding: "1px 14%",
  },
  title: {
    flexGrow: 1,
    fontFamily: "Dancing Script",
    color: "white",
  },
  Paragraph: {
    fontFamily: "Dancing Script",
    marginTop: "0",
    paddingTop: "20px",
  },
}));
