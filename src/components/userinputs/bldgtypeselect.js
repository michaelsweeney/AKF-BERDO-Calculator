import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";

import { building_types } from "../../calculations/buildingtypes";

const BldgTypeSelect = (props) => {
  const { type, changeCallback, width } = props;

  return (
    <div>
      <Select
        size="small"
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
