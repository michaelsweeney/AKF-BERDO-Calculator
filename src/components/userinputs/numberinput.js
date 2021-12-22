import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/styles";
import NumberFormat from "react-number-format";
import * as d3 from "d3";
const useStyles = makeStyles({
  root: {},
  label: { marginBottom: 5, color: "gray" },
  input: {},
});

const NumberInput = (props) => {
  const { label, changeCallback, value } = props;
  const classes = useStyles();
  const step = 500;

  const formatValue = d3.format(",")(value);
  console.log(formatValue);

  return (
    <div>
      <div className={classes.label}>{label}</div>

      <NumberFormat
        value={value}
        customInput={TextField}
        type="text"
        onValueChange={(e) => (e ? changeCallback(e.value) : changeCallback(e))}
        thousandSeparator=","
      />

      {/* <TextField
        sx={{ width: "100%" }}
        onChange={changeCallback}
        type="number"
        value={value}
        variant="standard"
        inputProps={{ step: step }}
      /> */}
    </div>
  );
};

export { NumberInput };
