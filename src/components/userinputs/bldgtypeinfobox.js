import { BldgTypeSelect } from "./bldgtypeselect";
import { NumberInput } from "./numberinput";

import { conn } from "../../store/connect";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  rmButton: {
    display: "inline-block",
  },
  select: {
    display: "inline-block",
  },
  input: {
    display: "inline-block",
  },
});

const BldgTypeInfoBox = (props) => {
  const classes = useStyles();

  const { type, area, index } = props;

  const handleRemoveSelf = () => {
    props.actions.removeBuildingType(index);
    props.actions.compileBuildingOutputs();
  };

  const handleAreaChange = (e) => {
    props.actions.setBuildingTypeArea(e.target.value, index);
    props.actions.compileBuildingOutputs();
  };

  const handleTypeChange = (e) => {
    props.actions.setBuildingType(e.target.value, index);
    props.actions.compileBuildingOutputs();
  };

  return (
    <div>
      <Button className={classes.rmButton} onClick={handleRemoveSelf}>
        x
      </Button>
      <NumberInput
        className={classes.input}
        changeCallback={handleAreaChange}
        label="AREA"
        value={area}
      />
      <BldgTypeSelect
        className={classes.select}
        changeCallback={handleTypeChange}
        type={type}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default conn(mapStateToProps)(BldgTypeInfoBox);
