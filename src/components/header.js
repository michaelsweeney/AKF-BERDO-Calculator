import { Button } from "@mui/material";

import { conn } from "../store/connect";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  header: {
    height: 50,
    padding: 20,
    borderBottom: "2px black solid",
  },
  left: { display: "inline-block" },
  center: { width: "calc(80%)", display: "inline-block", textAlign: "center" },
  right: { display: "inline-block" },
});
const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.center}>
        <h3>BERDO ARTICLE 37 CALCULATOR</h3>
        <h4>{props.state.building.building_name}</h4>
      </div>
      <div className={classes.right}>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => props.actions.setIsLoadModalOpen(true)}
        >
          FIND YOUR BUILDING
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    state: { ...store },
  };
};

export default conn(mapStateToProps)(Header);
