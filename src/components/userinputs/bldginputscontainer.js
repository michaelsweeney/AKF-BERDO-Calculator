import BldgTypeInfoBox from "./bldgtypeinfobox";

import { NumberInput } from "./numberinput";
import { conn } from "../../store/connect";
import { max } from "d3";
import { Button } from "@mui/material";
const BldgInputsContainer = (props) => {
  const handleUtilityChange = (val, fuel) => {
    props.actions.setUtilityConsumption(val, fuel);
    props.actions.compileBuildingOutputs();
  };

  const handleAddBuildingType = (e) => {
    const new_idx = max(props.building.areas.map((d) => d.index)) + 1;
    props.actions.addBuildingType(new_idx);
    props.actions.compileBuildingOutputs();
  };

  const fueltypes = {
    grid_elec: "Grid Electricity (kWh)",
    gas: "Natural Gas (therms)",
    fuel_1: "Fuel Type One (gal)",
    fuel_2: "Fuel Type Two (gal)",
    fuel_4: "Fuel Type Four (gal)",
    diesel: "Diesel (gal)",
    district_steam: "District Steam (MMBtu)",
    district_hot_water: "District Hot Water (MMBtu)",
    elec_driven_chiller: "Elec-Driven Chiller (MMBtu)",
    absorption_chiller_gas: "Absorption Chiller (Gas) (MMBtu)",
    engine_driven_chiller_gas: "Engine-Driven Chiller (Gas) (MMBtu)",
  };

  return (
    <div>
      <div>
        {props.building.areas.map((e, i) => (
          <BldgTypeInfoBox
            key={i}
            index={e.index}
            type={e.type}
            area={e.area}
          />
        ))}
        <Button size="small" onClick={handleAddBuildingType}>
          +
        </Button>
      </div>

      <div>
        {Object.keys(fueltypes).map((e, i) => {
          return (
            <div key={i}>
              <NumberInput
                changeCallback={(v) => handleUtilityChange(v.target.value, e)}
                label={fueltypes[e]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default conn(mapStateToProps)(BldgInputsContainer);
