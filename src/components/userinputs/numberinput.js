import TextField from "@mui/material/TextField";
import { InputLabel } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {},
  label: { marginBottom: 5, color: 'gray' },
  input: {}
})

const NumberInput = (props) => {
  const { label, changeCallback, value } = props;
  const classes = useStyles()
  return (
    <div>
      <div className={classes.label}>{label}</div>
      <TextField
        onChange={changeCallback}
        type="number"
        value={value}
        variant="standard"
      />
    </div>
  );
};

export { NumberInput };
