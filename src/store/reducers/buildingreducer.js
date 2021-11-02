import { compileBuildingProfile } from "../../calculations/compilebuilding";

import { convertQueryResults } from "../../components/berdoapi/convertqueryresults";

const initialState = {
  berdoapi: {
    inputQuery: "",
    inputQueryResults: [],
    loadedBuildingInfo: [],
    berdo_dataset_year: "2021_cal_2020",
  },
  areas: [
    {
      type: "office",
      area: "",
      index: 0,
    },
  ],
  consumption_native: {
    grid_elec: 0,
    gas: 0,
    fuel_1: 0,
    fuel_2: 0,
    fuel_4: 0,
    diesel: 0,
    district_steam: 0,
    district_hot_water: 0,
    elec_driven_chiller: 0,
    absorption_chiller_gas: 0,
    engine_driven_chiller_gas: 0,
  },
  consumption_mmbtu: {
    grid_elec: 0,
    gas: 0,
    fuel_1: 0,
    fuel_2: 0,
    fuel_4: 0,
    diesel: 0,
    district_steam: 0,
    district_hot_water: 0,
    elec_driven_chiller: 0,
    absorption_chiller_gas: 0,
    engine_driven_chiller_gas: 0,
  },
  annual_emissions: [],
  emissions_thresholds: {
    absolute: {
      "2025-2029": 0,
      "2030-2034": 0,
      "2035-2039": 0,
      "2040-2044": 0,
      "2045-2049": 0,
      "2050-": 0,
    },
    normalized: {
      "2025-2029": 0,
      "2030-2034": 0,
      "2035-2039": 0,
      "2040-2044": 0,
      "2045-2049": 0,
      "2050-": 0,
    },
  },
  building_name: "",
};

export default function buildingReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ALL_BUILDING_INPUTS": {
      return {
        ...state,
        areas: action.payload.areas,
        consumption_native: action.payload.consumption_native,
      };
    }

    case "ADD_BUILDING_TYPE": {
      return {
        ...state,
        areas: [
          ...state.areas,
          {
            type: "office",
            area: "",
            index: action.payload,
          },
        ],
      };
    }
    case "REMOVE_BUILDING_TYPE": {
      return {
        ...state,
        areas: [...state.areas].filter((e) => e.index !== action.payload),
      };
    }
    case "SET_BUILDING_TYPE_AREA": {
      return {
        ...state,
        areas: state.areas.map((e) =>
          e.index == action.payload.idx
            ? { type: e.type, area: action.payload.val, index: e.index }
            : e
        ),
      };
    }
    case "SET_BUILDING_TYPE": {
      return {
        ...state,
        areas: state.areas.map((e) =>
          e.index == action.payload.idx
            ? { type: action.payload.val, area: e.area, index: e.index }
            : e
        ),
      };
    }
    case "SET_NATIVE_UTILITY_CONSUMPTION": {
      return {
        ...state,
        consumption_native: {
          ...state.consumption_native,
          [action.payload.fuel]: action.payload.val,
        },
      };
    }

    case "COMPILE_BUILDING_OUTPUTS": {
      return {
        ...state,
        annual_emissions: compileBuildingProfile({
          areas: state.areas,
          consumption_native: state.consumption_native,
        }).annual_emissions,
        emissions_thresholds: compileBuildingProfile({
          areas: state.areas,
          consumption_native: state.consumption_native,
        }).emissions_thresholds,
      };
    }

    case "SET_BERDO_API_INPUT_QUERY": {
      return {
        ...state,
        berdoapi: {
          ...state.berdoapi,
          inputQuery: action.payload,
        },
      };
    }
    case "SET_BERDO_API_QUERY_RESULTS": {
      return {
        ...state,
        berdoapi: {
          ...state.berdoapi,
          inputQueryResults: action.payload,
        },
      };
    }

    case "SET_BERDO_DATASET_YEAR": {
      return {
        ...state,
        berdoapi: {
          ...state.berdoapi,
          berdo_dataset_year: action.payload,
        },
      };
    }

    case "SET_LOADED_BUILDING_QUERY_INFO": {
      // get areas, consumption from action.payload
      // get compiled building info w/ compileBuildingProfile()
      // combine everything.
      let { areas, consumption, name } = convertQueryResults(action.payload);

      return {
        ...state,
        berdoapi: {
          ...state.berdoapi,
          loadedBuildingInfo: action.payload,
        },
        areas: areas,
        consumption_native: consumption,
        annual_emissions: compileBuildingProfile({
          areas: areas,
          consumption_native: consumption,
        }).annual_emissions,
        emissions_thresholds: compileBuildingProfile({
          areas: areas,
          consumption_native: consumption,
        }).emissions_thresholds,
        building_name: name,
      };
    }

    default:
      return state;
  }
}
