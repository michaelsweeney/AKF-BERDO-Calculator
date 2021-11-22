import { compileBuildingProfile } from "../../calculations/compilebuilding";

import { convertQueryResults } from "../../components/berdoapi/convertqueryresults";

const initialState = {
  berdoapi: {
    inputQuery: "",
    inputQueryResults: [],
    loadedBuildingInfo: [],
    berdo_dataset_year: "2021_cal_2020",
  },
  building_validation: {
    is_above_35000_sf: false,
    is_above_20000_sf: false,
    /* 
    Buildings equal to or greater than twenty thousand (20,000) 
    square or fifteen (15) units but less than thirty-five thousand 
    (35,000) square feet or thirty-five (35) units shall not be subject 
    to the Emissions standards until 2031,
    */
  },

  alternate_compliance_payments: {
    "2025-2029": 0, // to be implemented
    "2030-2034": 0, // to be implemented
    "2035-2039": 0, // to be implemented
    "2040-2044": 0, // to be implemented
    "2045-2049": 0, // to be implemented
    "2050-": 0, // to be implemented
    /* 
      d. Alternative Compliance Payments: Buildings 
      may mitigate CO2e Emissions from Energy use 
      by making Alternative Compliance Payments. 
      The price of an Alternative Compliance Payment 
      shall be based on the average cost per metric 
      ton of CO2e to decarbonize Buildings subject 
      to this Subsection. The initial cost of an 
      Alternative Compliance Payment shall be $234 
      per metric ton of CO2e. The cost of an Alternative 
      Compliance Payment shall be reviewed at least 
      every five (5) years by the Review Board, with 
      input from the Environment Department, and may 
      be adjusted by the Regulations.
  */
  },
  onsite_generation_native: {
    elec_pv: 0,
  },
  areas: [
    {
      type: "office",
      area: "",
      index: 0,
    },
  ],
  consumption_native: {
    elec_grid: 0,
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
        onsite_generation_native: action.payload.onsite_generation_native,
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

    case "SET_NATIVE_ONSITE_GENERATION": {
      return {
        ...state,
        onsite_generation_native: {
          ...state.onsite_generation_native,
          [action.payload.fuel]: action.payload.val,
        },
      };
    }

    case "COMPILE_BUILDING_OUTPUTS": {
      let { annual_emissions, emissions_thresholds, building_validation } =
        compileBuildingProfile({
          areas: state.areas,
          consumption_native: state.consumption_native,
          onsite_generation_native: state.onsite_generation_native,
        });
      return {
        ...state,
        annual_emissions: annual_emissions,
        emissions_thresholds: emissions_thresholds,
        building_validation: building_validation,
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
      let { areas, consumption, name, onsite_generation_native } =
        convertQueryResults(action.payload);

      return {
        ...state,
        berdoapi: {
          ...state.berdoapi,
          loadedBuildingInfo: action.payload,
        },
        areas: areas,
        consumption_native: consumption,
        building_name: name,
        onsite_generation_native: onsite_generation_native,
      };
    }

    default:
      return state;
  }
}
