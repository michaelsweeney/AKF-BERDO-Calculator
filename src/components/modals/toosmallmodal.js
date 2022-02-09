import { conn } from "../../store/connect";
import { ModalComponent } from "../modalcomponent";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {},
  ul: {},

  logoContainer: {
    textAlign: "center",
  },
  header: {
    textAlign: "center",
  },
});
const TooSmallModal = (props) => {
  const classes = useStyles();
  const isOpen = props.ui.isScreenTooSmall;

  return (
    <ModalComponent disableClose="true" isOpen={isOpen}>
      <div className={classes.root}>
        <div className={classes.logoContainer}>
          <img alt="" width="100" src="akf-registered-logo.png"></img>
        </div>
        <h3 className={classes.header}>Window too small to view app.</h3>
        <p>
          Make window larger or use a different device. Note that this app is
          not optimized for mobile.
        </p>
      </div>
    </ModalComponent>
  );
};

const mapStateToProps = (store) => {
  return {
    actions: { ...store.actions },
    ui: { ...store.ui },
  };
};

export default conn(mapStateToProps)(TooSmallModal);
