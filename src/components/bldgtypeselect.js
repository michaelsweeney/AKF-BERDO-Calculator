import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { building_types } from '../calculations/buildingtypes';

const BldgTypeSelect = (props) => {
    const { type, changeCallback } = props;



    return (
        <Select
            id='someid'
            value={type}
            label={type}
            onChange={changeCallback}
        >
            {Object.keys(building_types).map((e, i) => <MenuItem key={i} value={e}>{building_types[e]}</MenuItem>)}
        </Select>
    )


}

export { BldgTypeSelect }