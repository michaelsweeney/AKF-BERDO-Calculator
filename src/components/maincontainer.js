import { conn } from "../store/connect";
import { makeStyles } from "@material-ui/styles";
import BldgInputsContainer from "./userinputs/bldginputscontainer";
import LinePlot from "./charts/lineplot";

const useStyles = makeStyles({
  root: {
    height: "calc(100vh - 200px)",
    overflow: "hidden",
  },
  main: {
    padding: 20,
    width: "calc(100% - 350px)",
    display: "inline-block",
  },
  side: {
    padding: 20,
    width: "250px",
    display: "inline-block",
    verticalAlign: "top",
    borderRight: "1px solid black",
  },
});

const MainContainer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.side}>
        <BldgInputsContainer />
      </div>
      <div className={classes.main}>
        <LinePlot />
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    state: { ...store },
  };
};

export default conn(mapStateToProps)(MainContainer);
