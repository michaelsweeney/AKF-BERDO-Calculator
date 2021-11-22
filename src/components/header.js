import { Button } from "@mui/material";

import { conn } from "../store/connect";
import { makeStyles } from "@material-ui/styles";
import { Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";
const useStyles = makeStyles({
  header: {
    height: 100,
    width: "100%",
    // padding: 20,
    borderBottom: "1px gray solid",
    overflow: "hidden",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    padding: "20px",
  },
  left: {
    display: "inline-block",
    width: "200px",
    verticalAlign: "middle",
  },
  center: {
    minWidth: "calc(100% - 350px)",
    display: "inline-block",
    textAlign: "center",
    verticalAlign: "middle",
    // padding: 15,
  },
  centerInner: {},
  right: {
    display: "inline-block",
    width: "150px",
    textAlign: "right",

    // float: "right",
    // padding: 20,
  },
  rightInner: {
    display: "inline-block",
  },
  h1: {
    fontSize: "1.25em",
    fontWeight: 600,
    letterSpacing: 1.5,
    marginBottom: 5,
  },
  h2: {
    fontSize: "1.0em",
    letterSpacing: 1.25,
  },
  h2link: {
    fontSize: "1.0em",
    letterSpacing: 1.25,
    transition: "color 250ms",
    cursor: "pointer",
    "&:hover": {
      color: "rgba(0,0,0,0.5)",
    },
  },
  akfLogoContainer: {
    padding: 10,
  },
  findButton: {
    paddingRight: 15,
    display: "inline-block",
  },
  aboutButton: {
    paddingRight: 15,
    display: "inline-block",
  },
});

const Header = (props) => {
  const classes = useStyles();

  const is_building_loaded = props.building_name ? true : false;

  const date_labels = {
    "2021_cal_2020": "2020 dataset",
    "2020_cal_2019": "2019 dataset",
    "2019_cal_2018": "2018 dataset",
  };

  const handleOpenAbout = () => {
    props.actions.setIsLoadedSummaryModalOpen(true);
  };

  return (
    <Paper elevation={2}>
      <div className={classes.header}>
        <div className={classes.left}>
          <div className={classes.akfLogoContainer}>
            <img alt="" width="95" src="akf-logo.png"></img>
          </div>
        </div>
        <div className={classes.center}>
          <div className={classes.centerInner}>
            <div className={classes.h1}>BERDO 2.0 CALCULATOR</div>
            <div className={classes.h2link} onClick={handleOpenAbout}>
              {is_building_loaded
                ? props.building_name +
                  " (" +
                  date_labels[props.berdoapi.berdo_dataset_year] +
                  ")"
                : ""}
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.rightInner}>
            <div className={classes.findButton}>
              <Button
                // size="small"
                color="primary"
                variant="contained"
                onClick={() => props.actions.setIsLoadModalOpen(true)}
              >
                <SearchIcon />
                {/* FIND YOUR BUILDING */}
              </Button>
            </div>
            <div className={classes.aboutButton}>
              <Button
                // size="small"
                color="primary"
                variant="contained"
                onClick={() => props.actions.setIsAboutModalOpen(true)}
              >
                {/* ABOUT */}
                <InfoIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

const mapStateToProps = (store) => {
  return {
    building_name: store.building.building_name,
    berdoapi: store.building.berdoapi,
  };
};

export default conn(mapStateToProps)(Header);
