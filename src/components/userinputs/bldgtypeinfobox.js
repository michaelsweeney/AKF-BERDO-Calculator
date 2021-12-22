import { BldgTypeSelect } from "./bldgtypeselect";
import { NumberInput } from "./numberinput";

import { conn } from "../../store/connect";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    // display: 'inline-block'
    overflow: "hidden",
    marginTop: 0,
    marginBottom: 20,
  },
  inner: {
    display: "inline-block",
  },
  rmButton: {
    display: "inline-block",
    position: "relative",
    top: 0,
    left: 120,
  },
  row1: {
    display: "inline-block",
    marginBottom: 10,
  },
  row2: {
    display: "inline-block",
    marginBottom: 10,
  },
  input: {
    display: "inline-block",
    marginLeft: 5,
  },
  selectLabelRow: {
    display: "inline-block",
    marginBottom: 5,
    color: "gray",
  },
});

const BldgTypeInfoBox = (props) => {
  const classes = useStyles();

  const { type, area, index, labelKey } = props;

  const handleRemoveSelf = () => {
    props.actions.removeBuildingType(index);
    props.actions.compileBuildingOutputs();
  };

  const handleAreaChange = (e) => {
    props.actions.setBuildingTypeArea(e, index);
    props.actions.compileBuildingOutputs();
  };

  const handleTypeChange = (e) => {
    props.actions.setBuildingType(e.target.value, index);
    props.actions.compileBuildingOutputs();
  };

  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.row1}>
          <div className={classes.selectLabelRow}>
            {`Property Type ${labelKey}`}
            <Button
              className={classes.rmButton}
              size="small"
              sx={{ minWidth: "10px" }}
              onClick={handleRemoveSelf}
            >
              {index === 0 ? "" : "x"}
            </Button>
          </div>

          <BldgTypeSelect
            width="250px"
            changeCallback={handleTypeChange}
            type={type}
          />
        </div>
        <div className={classes.row2}>
          <div className={classes.input}>
            <NumberInput
              changeCallback={handleAreaChange}
              label="Area (sf)"
              value={area}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    actions: state.actions,
  };
};

export default conn(mapStateToProps)(BldgTypeInfoBox);
