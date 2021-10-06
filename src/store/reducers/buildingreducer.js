
import { compileBuildingProfile } from "../../calculations/compilebuilding";


const initialState = {

  areas: [{
    type: 'office',
    area: '',
    index: 0,
  }],
  consumption: {
    gas: 0,
    fuel_1: 0,
    fuel_2: 0,
    fuel_4: 0,
    diesel: 0,
    district_steam: 0,
    district_hot_water: 0,
    elec_driven_chiller: 0,
    absorption_chiller_gas: 0,
    engine_driven_chiller_gas: 0
  },
  annual_emissions: [],
  emissions_thresholds: {
    thresholds_absolute: {
      "2025-2029": 0,
      "2030-2034": 0,
      "2035-2039": 0,
      "2040-2044": 0,
      "2045-2049": 0,
      "2050-": 0
    },
    thresholds_normalized: {
      "2025-2029": 0,
      "2030-2034": 0,
      "2035-2039": 0,
      "2040-2044": 0,
      "2045-2049": 0,
      "2050-": 0
    }
  }
};

export default function buildingReducer(state = initialState, action) {

  switch (action.type) {
    case "ADD_BUILDING_TYPE": {
      return {
        ...state,
        areas: [...state.areas, {
          type: 'office',
          area: '',
          index: action.payload,
        }]
      };
    }
    case "REMOVE_BUILDING_TYPE": {
      return {
        ...state,
        areas: [...state.areas].filter((e) => e.index !== action.payload)
      };
    }
    case "SET_BUILDING_TYPE_AREA": {
      return {
        ...state,
        areas: state.areas.map(e => e.index == action.payload.idx ? { type: e.type, area: action.payload.val, index: e.index } : e)

      };
    }
    case "SET_BUILDING_TYPE": {
      return {
        ...state,
        areas: state.areas.map(e => e.index == action.payload.idx ? { type: action.payload.val, area: e.area, index: e.index } : e)

      };
    }
    case "SET_UTILITY_CONSUMPTION": {
      return {
        ...state,
        consumption: {
          ...state.consumption,
          [action.payload.fuel]: action.payload.val
        }
      };
    }

    case "COMPILE_BUILDING_OUTPUTS": {
      return {
        ...state,
        annual_emissions: compileBuildingProfile({ areas: state.areas, consumption: state.consumption }).annual_emissions,
        emissions_thresholds: compileBuildingProfile({ areas: state.areas, consumption: state.consumption }).emissions_thresholds
      }
    }

    default:
      return state;
  }
}
