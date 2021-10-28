import TextField from "@mui/material/TextField";
import { InputLabel } from "@mui/material";
import { useRef, useEffect } from "react";
const TextInput = (props) => {
  const { label, changeCallback, value, autoFocus } = props;
  return (
    <div>
      <InputLabel value={label} />
      <TextField
        inputRef={(input) => (autoFocus ? input && input.focus() : input)}
        size="small"
        onChange={changeCallback}
        value={value}
        label={label}
        variant="standard"
        fullWidth
      />
    </div>
  );
};

export { TextInput };
