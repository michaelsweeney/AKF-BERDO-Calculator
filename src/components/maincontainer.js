import { conn } from "../store/connect";
import { makeStyles } from "@material-ui/styles";
import Sidebar from "./sidebar";
import LinePlot from "./charts/lineplot";
import { BuildingFeedbackMessage } from "./buildingfeedbackmessage";
const useStyles = makeStyles({
  root: {
    height: "calc(100vh - 175px)",
    minHeight: 300,
    boxSizing: "border-box",
    overflow: "hidden",
  },
  main: {
    padding: 20,
    width: "calc(100% - 350px)",
    height: "100%",
    display: "inline-block",
    boxSizing: "border-box",
  },
  side: {
    padding: 20,
    width: "350px",
    display: "inline-block",
    verticalAlign: "top",
    height: "100%",
    borderRight: "1px solid black",
    boxSizing: "border-box",
  },
});

const MainContainer = (props) => {
  const is_regulated = props.building_validation.is_above_20000_sf;

  const unregulated_message =
    "Buildings under 20,000 SF are unregulated under BERDO 2.0";

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.side}>
        <Sidebar />
      </div>
      <div className={classes.main}>
        {is_regulated ? (
          <LinePlot />
        ) : (
          <BuildingFeedbackMessage message={unregulated_message} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    building_validation: store.building.building_validation,
  };
};

export default conn(mapStateToProps)(MainContainer);
