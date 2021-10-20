import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { building_types } from "../../calculations/buildingtypes";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {},
  select: {}
})


const BldgTypeSelect = (props) => {
  const { type, changeCallback, width } = props;
  const classes = useStyles()
  return (
    <div>

      <Select
        size="small"
        id="someid"
        sx={{ minWidth: width }}
        value={type}
        label={type}
        onChange={changeCallback}
      >
        {Object.keys(building_types).map((e, i) => (
          <MenuItem key={i} value={e}>
            {building_types[e]}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export { BldgTypeSelect };
