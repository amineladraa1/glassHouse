import { makeStyles } from "@material-ui/core/styles";
import city from "../../../assets/city.jpg";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
    width: "100%",
    marginTop: "74px",
    marginLeft: 0,
    backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.50), rgba(0,0,0, 0.73)), url(${city})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    objectFit: "contain",
    backgroundPosition: "center",
    position: "relative",
  },
  title: {
    color: "white",
    margin: 0,
    padding: "0",
    position: "absolute",
    top: "5%",
    left: "40%",
    color: "#000",
    fontSize: "40px",
  },
}));
