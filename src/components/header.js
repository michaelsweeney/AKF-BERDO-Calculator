import { Button } from "@mui/material";

import { conn } from "../store/connect";
import { makeStyles } from "@material-ui/styles";
import { Paper } from "@mui/material";


const useStyles = makeStyles({
  header: {
    height: 100,
    width: "100vw",
    // padding: 20,
    borderBottom: "1px gray solid",
    overflow: "hidden",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    padding: "20px",
  },
  left: {
    display: "inline-block",
    width: "100px",
    verticalAlign: "middle",
  },
  center: {
    minWidth: "calc(100% - 300px)",
    display: "inline-block",
    textAlign: "center",
    verticalAlign: "middle",
    // padding: 15,
  },
  right: {
    display: "inline-block",
    width: "200px",
    textAlign: "right",

    // float: "right",
    // padding: 20,
  },
  h1: {
    fontSize: "1.5em",
    fontWeight: 600,
    letterSpacing: 1.5,
    marginBottom: 5,
  },
  h2: {
    fontSize: "1.0em",
    letterSpacing: 1.25,
  },
  akfLogoContainer: {
    padding: 10,
  },
  findButton: {
    paddingRight: 15,
  },
});
const Header = (props) => {
  const classes = useStyles();
  return (
    <Paper elevation={2}>
      <div className={classes.header}>
        <div className={classes.left}>
          <div className={classes.akfLogoContainer}>
            <img width="95" src="akf-logo.png"></img>
          </div>
        </div>
        <div className={classes.center}>
          <div className={classes.h1}>BERDO ARTICLE 37 CALCULATOR</div>
          <div className={classes.h2}>{props.building_name}</div>
        </div>
        <div className={classes.right}>
          <div className={classes.findButton}>
            <Button
              // size="small"
              color="primary"
              variant="contained"
              onClick={() => props.actions.setIsLoadModalOpen(true)}
            >
              FIND YOUR BUILDING
            </Button>
          </div>
        </div>
      </div>
    </Paper>



  );
};

const mapStateToProps = (store) => {
  return {
    building_name: store.building.building_name,
  };
};

export default conn(mapStateToProps)(Header);
