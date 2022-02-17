import { Button } from "@mui/material";

import { conn } from "../store/connect";
import { makeStyles } from "@material-ui/styles";
import { Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";

import { HoverButton } from "./hoverbutton";
import { HoverInfoWrapper } from "./hoverinfowrapper";

const hoverColor = "rgba(40,55,90,0.9)";

const useStyles = makeStyles({
  header: {
    height: 85,
    width: "100%",
    // padding: 20,
    borderBottom: "1px gray solid",
    overflow: "hidden",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    padding: "15px",
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
    fontSize: "1.35em",
    fontWeight: 600,
    letterSpacing: 1.5,
    marginBottom: 5,
  },

  h1link: {
    fontSize: "1.35em",
    fontWeight: 600,
    letterSpacing: 1.5,
    marginBottom: 5,
    "&:hover": {
      color: hoverColor,
    },
    transition: "color 250ms",
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
      color: hoverColor,
    },
  },
  akfLogoContainer: {
    padding: 10,
    marginLeft: 10,
    position: "relative",
    bottom: 5,
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
          <HoverInfoWrapper hovercontent="AKF Home">
            <a href="https://akfgroup.com" target="_blank" rel="noreferrer">
              <div className={classes.akfLogoContainer}>
                <img alt="" width="100" src="AKF Registered Logo.png"></img>
              </div>
            </a>
          </HoverInfoWrapper>
        </div>
        <div className={classes.center}>
          <div className={classes.centerInner}>
            <HoverInfoWrapper hovercontent="Visit Boston's BERDO website">
              <a
                href="https://boston.gov/berdo"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className={classes.h1link}>
                  BERDO 2.0 CALCULATOR{" "}
                  <span style={{ color: "red" }}>(beta)</span>
                </div>
              </a>
            </HoverInfoWrapper>

            <div className={classes.h2link} onClick={handleOpenAbout}>
              {is_building_loaded ? (
                <HoverInfoWrapper
                  horizontalanchor="center"
                  hovercontent="Examine Dataset Inputs"
                >
                  {props.building_name +
                    " (" +
                    date_labels[props.berdoapi.berdo_dataset_year] +
                    ")"}
                </HoverInfoWrapper>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.rightInner}>
            <div className={classes.findButton}>
              <HoverButton
                color="primary"
                variant="contained"
                clickCallback={() => props.actions.setIsLoadModalOpen(true)}
                hovercontent="Search BERDO Dataset"
              >
                <SearchIcon />
              </HoverButton>
            </div>

            <div className={classes.aboutButton}>
              <HoverButton
                color="primary"
                variant="contained"
                hovercontent="About"
                clickCallback={() => props.actions.setIsAboutModalOpen(true)}
              >
                <InfoIcon />
              </HoverButton>
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
