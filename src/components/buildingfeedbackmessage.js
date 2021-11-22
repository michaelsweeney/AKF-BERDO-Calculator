import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: { padding: 40 },
  copy: {
    verticalAlign: "middle",
    textAlign: "center",
    fontSize: "1.5em",
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
