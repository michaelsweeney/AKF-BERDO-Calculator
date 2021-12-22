import { conn } from "../../store/connect";
import { NumberInput } from "./numberinput";

const OnsiteInputContainer = (props) => {
  const handleUtilityChange = (val, fuel) => {
    props.actions.setNativeOnsiteGeneration(val, fuel);
    props.actions.compileBuildingOutputs();
  };

  return (
    <div>
      <NumberInput
        changeCallback={(v) => handleUtilityChange(v, "elec_pv")}
        label={"Electric Photovoltaic (kWh)"}
        value={props.building.onsite_generation_native.elec_pv}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    building: { ...state.building },
    actions: { ...state.actions },
  };
};

export default conn(mapStateToProps)(OnsiteInputContainer);
