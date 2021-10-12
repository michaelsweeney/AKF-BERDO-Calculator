import TextField from "@mui/material/TextField";
import { InputLabel } from "@mui/material";

const TextInput = (props) => {
  const { label, changeCallback, value } = props;

  return (
    <div>
      <InputLabel value={label} />
      <TextField
        size="small"
        onChange={changeCallback}
        value={value}
        variant="standard"
      />
    </div>
  );
};

export { TextInput };
