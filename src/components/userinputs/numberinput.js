import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {},
  label: { marginBottom: 5, color: "gray" },
  input: {},
});

const NumberInput = (props) => {
  const { label, changeCallback, value } = props;
  const classes = useStyles();
  const step = 500;
  return (
    <div>
      <div className={classes.label}>{label}</div>
      <TextField
        sx={{ width: "100%" }}
        onChange={changeCallback}
        type="number"
        value={value}
        variant="standard"
        inputProps={{ step: step }}
      />
    </div>
  );
};

export { NumberInput };
