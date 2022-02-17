import { conn } from "../store/connect";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";

import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TableChartIcon from "@mui/icons-material/TableChart";

import LinePlot from "./charts/lineplot";
import TabularPlot from "./charts/tabularplot";
import { BuildingFeedbackMessage } from "./buildingfeedbackmessage";

import { HoverButton } from "./hoverbutton";

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
    marginBottom: 0,
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

  const has_input = props.building_validation.has_input;

  const no_input_message = `Building area and/or utilities have not been entered. 
  Either complete the sidebar to the left or search the BERDO Dataset 
  for your building.`;

  const views = [
    {
      key: "lineplot_thresholds",
      label: <OfflineBoltIcon />,
      component: <LinePlot view="thresholds" />,
      hovercontent: "Threshold Summary",
    },
    {
      key: "lineplot_payments",
      label: <AttachMoneyIcon />,
      component: <LinePlot view="payments" />,
      hovercontent: "Cost Summary",
    },
    {
      key: "tabular",
      label: <TableChartIcon />,
      component: <TabularPlot />,
      hovercontent: "Tabular Data",
    },
  ];
  let ActiveViewComponent;
  if (!has_input) {
    ActiveViewComponent = (
      <BuildingFeedbackMessage message={no_input_message} />
    );
  } else {
    if (!is_regulated) {
      ActiveViewComponent = (
        <BuildingFeedbackMessage message={unregulated_message} />
      );
    } else {
      ActiveViewComponent = views.filter((f) => f.key == [props.activeView])[0]
        .component;
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.viewSelectorContainer}>
        {views.map((d, i) => {
          return (
            <div key={i} className={classes.viewSelectorBtn}>
              <HoverButton
                clickCallback={() => handleViewChange(d.key)}
                variant={props.activeView == d.key ? "contained" : "outlined"}
                color="primary"
                hovercontent={d.hovercontent}
                size="small"
              >
                {d.label}
              </HoverButton>
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
