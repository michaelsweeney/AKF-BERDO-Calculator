import { conn } from "../store/connect";

import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
const useStyles = makeStyles((d) => {
  console.log(d);
  return {
    outer: {
      display: d.isLoadModalOpen ? "inline-block" : "none",
      position: "absolute",
      boxSizing: "border-box",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.9)",
    },
    inner: {
      width: "100%",
      height: "100%",
      backgroundColor: "red",
      margin: "100px",
      //   margin: "100px",
    },
  };
});

const LoadBldgModal = (props) => {
  console.log(props.state.ui);
  const classes = useStyles(props.state.ui);

  return (
    <div className={classes.outer}>
      <div className={classes.inner}>
        <Button onClick={() => props.actions.setIsLoadModalOpen(false)}>
          x
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

export default conn(mapStateToProps)(LoadBldgModal);
