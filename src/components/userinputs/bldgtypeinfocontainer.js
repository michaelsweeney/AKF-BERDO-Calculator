import { conn } from "../../store/connect";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { max } from "d3";
import BldgTypeInfoBox from "./bldgtypeinfobox";

const useStyles = makeStyles({
  root: {
    overflowY: "auto",
    maxHeight: (props) => props.height,
  },
  addBuildingType: {
    textAlign: "center",
  },
});

const BldgTypeInfoContainer = (props) => {
  const styles = {
    height: props.window.dims.height - 425,
  };
  const classes = useStyles(styles);
  const handleAddBuildingType = (e) => {
    const new_idx = max(props.building.areas.map((d) => d.index)) + 1;
    props.actions.addBuildingType(new_idx);
    props.actions.compileBuildingOutputs();
  };

  return (
    <div className={classes.root}>
      {props.building.areas.map((e, i) => (
        <BldgTypeInfoBox
          key={i}
          labelKey={i + 1}
          index={e.index}
          type={e.type}
          area={e.area}
        />
      ))}
      <div className={classes.addBuildingType}>
        <Button size="small" onClick={handleAddBuildingType} variant="outlined">
          ADD BUILDING TYPE
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    building: { ...state.building },
    actions: { ...state.actions },
    window: { ...state.window },
  };
};

export default conn(mapStateToProps)(BldgTypeInfoContainer);
