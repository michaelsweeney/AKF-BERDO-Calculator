import { conn } from "../store/connect";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import LinePlot from "./charts/thresholdplot";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TableViewIcon from "@mui/icons-material/TableView";
import { BuildingFeedbackMessage } from "./buildingfeedbackmessage";

const useStyles = makeStyles({
  root: {
    height: "calc(100vh - 175px)",
    boxSizing: "border-box",
    overflow: "hidden",
  },
  main: {
    width: "100%",
    minHeight: 300,
    height: "calc(100% - 45px)",
    display: "inline-block",
    boxSizing: "border-box",
  },
  viewSelectorBtn: {
    marginLeft: 5,
    display: "inline-block",
  },
  viewSelectorContainer: {
    marginBottom: 10,
    boxSizing: "border-box",
    height: "40px",
  },
});

const ViewContainer = (props) => {
  const classes = useStyles();

  const handleViewChange = (label) => {
    props.actions.setActiveView(label);
  };
  const is_regulated = props.building_validation.is_above_20000_sf;

  const unregulated_message =
    "Buildings under 20,000 SF are unregulated under BERDO 2.0";
  let ActiveViewComponent;

  const selectorButtons = [
    { key: "thresholds", label: <OfflineBoltIcon /> },
    { key: "payments", label: <AttachMoneyIcon /> },
    { key: "tabular", label: <TableViewIcon /> },
  ];

  const viewComponents = {
    thresholds: <LinePlot />,
    payments: <div>some payment stuff</div>,
    tabular: <div>some table stuff</div>,
  };
  if (!is_regulated) {
    ActiveViewComponent = (
      <BuildingFeedbackMessage message={unregulated_message} />
    );
  } else {
    ActiveViewComponent = viewComponents[props.activeView];
  }

  return (
    <div className={classes.root}>
      <div className={classes.viewSelectorContainer}>
        {selectorButtons.map((d, i) => {
          return (
            <div key={i} className={classes.viewSelectorBtn}>
              <Button
                size="small"
                onClick={() => handleViewChange(d.key)}
                variant={props.activeView == d.key ? "contained" : "outlined"}
                color="primary"
              >
                {d.label}
              </Button>
            </div>
          );
        })}
      </div>
      <div className={classes.main}>{ActiveViewComponent}</div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    building_validation: store.building.building_validation,
    activeView: store.ui.activeView,
  };
};

export default conn(mapStateToProps)(ViewContainer);
