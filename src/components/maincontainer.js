import { conn } from "../store/connect";
import { makeStyles } from "@material-ui/styles";
import BldgInputsContainer from "./userinputs/bldginputscontainer";
import LinePlot from "./charts/lineplot";

const useStyles = makeStyles({
  root: {},
  main: {
    padding: 20,
    width: "calc(100vw - 400px)",
    display: "inline-block",
  },
  side: {
    padding: 20,
    width: "200px",
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
