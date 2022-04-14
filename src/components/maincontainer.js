import { conn } from "../store/connect";
import { makeStyles } from "@material-ui/styles";
import Sidebar from "./sidebar";

import ViewContainer from "./viewcontainer";

const useStyles = makeStyles({
  root: {
    height: "calc(100vh - 175px)",
    minHeight: 300,
    boxSizing: "border-box",
    overflow: "hidden",
  },
  main: {
    padding: 20,
    width: "calc(100% - 375px)",
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
  viewSelectorBtn: {
    marginLeft: 5,
    display: "inline-block",
  },
  viewSelectorContainer: {
    marginBottom: 0,
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
        <ViewContainer />
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    building_validation: store.building.building_validation,
    activeView: store.ui.activeView,
  };
};

export default conn(mapStateToProps)(MainContainer);
