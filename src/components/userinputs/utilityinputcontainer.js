import { conn } from "../../store/connect";
import { makeStyles } from "@material-ui/styles";
import { NumberInput } from "./numberinput";

const useStyles = makeStyles({
  root: {
    overflowY: "auto",
    maxHeight: (props) => props.height,
  },
});
const UtilityInputContainer = (props) => {
  let styles = {
    height: props.window.dims.height - 425,
  };
  const classes = useStyles(styles);
  const fueltypes = {
    elec_grid: "Grid Electricity (kWh)",
    gas: "Natural Gas (therms)",
    fuel_1: "Fuel Type One (gal)",
    fuel_2: "Fuel Type Two (gal)",
    fuel_4: "Fuel Type Four (gal)",
    diesel: "Diesel (gal)",
    district_steam: "District Steam (MMBtu)",
    district_hot_water: "District Hot Water (MMBtu)",
    elec_driven_chiller: "Elec-Driven Chiller (MMBtu)",
    absorption_chiller_gas: "Gas Absorption Chiller (MMBtu)",
    engine_driven_chiller_gas: "Gas-Driven Chiller (MMBtu)",
  };
  const handleUtilityChange = (val, fuel) => {
    props.actions.setNativeUtilityConsumption(val, fuel);
    props.actions.compileBuildingOutputs();
  };
  return (
    <div className={classes.root}>
      {Object.keys(fueltypes).map((e, i) => {
        return (
          <div key={i}>
            <NumberInput
              changeCallback={(v) => handleUtilityChange(v, e)}
              label={fueltypes[e]}
              value={props.building.consumption_native[e]}
            />
          </div>
        );
      })}
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

export default conn(mapStateToProps)(UtilityInputContainer);
