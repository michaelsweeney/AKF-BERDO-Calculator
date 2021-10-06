
import TextField from '@mui/material/TextField';

const NumberInput = (props) => {
    const { label, changeCallback, value } = props;
    return <TextField onChange={changeCallback} type='number' label={label} value={value} variant='standard' />
}

export { NumberInput }