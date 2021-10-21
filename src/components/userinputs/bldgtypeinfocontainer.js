import { conn } from "../../store/connect";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { max } from "d3";
import BldgTypeInfoBox from "./bldgtypeinfobox";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  addBuildingType: {
    textAlign: "center",
  },
});

const BldgTypeInfoContainer = (props) => {
  const classes = useStyles();
  const handleAddBuildingType = (e) => {
    const new_idx = max(props.building.areas.map((d) => d.index)) + 1;
    props.actions.addBuildingType(new_idx);
    props.actions.compileBuildingOutputs();
  };

  return (
    <div>
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
  };
};

export default conn(mapStateToProps)(BldgTypeInfoContainer);
