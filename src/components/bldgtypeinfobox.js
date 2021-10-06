

import { BldgTypeSelect } from "./bldgtypeselect";
import { NumberInput } from "./numberinput";

import Button from '@mui/material/Button'
import { conn } from "../store/connect"



const BldgTypeInfoBox = (props) => {
    const { type, area, index } = props;

    const handleRemoveSelf = () => {
        props.actions.removeBuildingType(index)
        props.actions.compileBuildingOutputs()
    }

    const handleAreaChange = (e) => {
        props.actions.setBuildingTypeArea(e.target.value, index)
        props.actions.compileBuildingOutputs()
    }

    const handleTypeChange = (e) => {
        props.actions.setBuildingType(e.target.value, index)
        props.actions.compileBuildingOutputs()
    }

    return (
        <div>
            <Button onClick={handleRemoveSelf}>x</Button>
            <NumberInput changeCallback={handleAreaChange} label='AREA' value={area} />
            <BldgTypeSelect changeCallback={handleTypeChange} type={type} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    };
};


export default conn(mapStateToProps)(BldgTypeInfoBox)