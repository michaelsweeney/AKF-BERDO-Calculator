import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: { padding: "10%" },
  copy: {
    verticalAlign: "middle",
    textAlign: "center",
    fontSize: "1em",
    color: "rgba(0,0,0,0.6)",
  },
});

const BuildingFeedbackMessage = (props) => {
  const { message } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.copy}>{message}</div>
    </div>
  );
};

export { BuildingFeedbackMessage };
