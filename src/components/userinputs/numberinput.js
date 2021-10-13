import TextField from "@mui/material/TextField";
import { InputLabel } from "@mui/material";

const NumberInput = (props) => {
  const { label, changeCallback, value } = props;

  return (
    <div>
      <InputLabel value={label} />
      <TextField
        onChange={changeCallback}
        type="number"
        label={label}
        value={value}
        variant="standard"
      />
    </div>
  );
};

export { NumberInput };
