import { conn } from "../store/connect";
import { makeStyles } from "@material-ui/styles";
import Sidebar from "./sidebar";
import LinePlot from "./charts/lineplot";
import { Paper } from "@mui/material";

const useStyles = makeStyles({
  root: {
    height: "calc(100vh - 200px)",
    overflow: "hidden",
  },
  main: {
    padding: 20,
    width: "calc(100% - 400px)",
    display: "inline-block",
  },
  side: {
    padding: 20,
    width: "300px",
    display: "inline-block",
    verticalAlign: "top",
    height: "100%",
    borderRight: "1px solid black",
  },
});

const MainContainer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.side}>
        <Sidebar />
      </div>
      <div className={classes.main}>
        <LinePlot />
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {};
};

export default conn(mapStateToProps)(MainContainer);
