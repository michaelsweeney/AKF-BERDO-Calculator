import { conn } from "../../store/connect";

import { ModalComponent } from "../modalcomponent";
import { building_types } from "../../calculations/buildingtypes";

const LoadedSummaryModal = (props) => {
  const isLoadModalOpen = props.ui.isLoadedSummaryModalOpen;
  const exitCallback = props.actions.setIsLoadedSummaryModalOpen;

  let { berdoapi } = props.building;
  let { loadedBuildingInfo } = berdoapi;

  let converted_property_type = building_types[props.building.areas[0].type];

  let dataset_year_name = {
    "2021_cal_2020": "2021 (calendar year 2020)",
    "2020_cal_2019": "2020 (calendar year 2019)",
    "2019_cal_2018": "2019 (calendar year 2018",
  }[berdoapi.berdo_dataset_year];

  const convertBlank = (d) => (d === "" ? 0 : d);

  let loaded_summary_list = [
    `Property Name: ${loadedBuildingInfo["Property Name"]}`,
    `Address: ${loadedBuildingInfo["Address"]}`,
    `Tax Parcel: ${loadedBuildingInfo["Tax Parcel"]}`,
    `Gross Area (sq ft): ${loadedBuildingInfo["Gross Area (sq ft)"]}`,
    `Energy Star Score: ${loadedBuildingInfo["ENERGY STAR Score"]}`,
    `Onsite Renewable (kWh): ${convertBlank(
      loadedBuildingInfo["Onsite Renewable (kWh)"]
    )}`,
    `Property Type: ${loadedBuildingInfo["Property Type"]}`,
    `Property Uses: ${loadedBuildingInfo["Property Uses"]}`,
    `Total Site Energy (kBtu): ${loadedBuildingInfo["Total Site Energy (kBTU)"]}`,
    `% Electricity: ${convertBlank(loadedBuildingInfo["% Electricity"])}`,
    `% Gas: ${convertBlank(loadedBuildingInfo["% Gas"])}`,
    `% Other (Diesel #2, Kerosene, Propane, or Other Fuel): ${convertBlank(
      loadedBuildingInfo["% Other (Diesel #2, Kerosene, Propane or Other Fuel)"]
    )}`,
    `% Fuel Oil: ${convertBlank(loadedBuildingInfo["% Fuel Oil"])}`,
    `% District Hot Water: ${convertBlank(
      loadedBuildingInfo["% District Hot Water"]
    )}`,
    `% District Chilled Water: ${convertBlank(
      loadedBuildingInfo["% District Chilled Water"]
    )}`,
  ];

  return (
    <ModalComponent isOpen={isLoadModalOpen} exitCallback={exitCallback}>
      <h3>LOADED BUILDING SUMMARY</h3>
      The below information has been loaded for the selected building:
      <ul>
        {loaded_summary_list.map((d) => (
          <li>{d}</li>
        ))}
      </ul>
      <h3>DATASET INFORMATION AND CAVEATS</h3>
      <div>
        The above information was loaded from the {dataset_year_name} BERDO
        dataset. The "Property Use" category has been converted from "
        {loadedBuildingInfo["Property Type"]}" to "{converted_property_type}".
        All utility and emission information was calculated using the "Total
        Site Energy (kBTU)" field and each fuel type's percentage fraction
        field. Check property type and all other calculator inputs for accuracy.
        Note that onsite renewable is not currently implemented in this
        calculator.
      </div>
      <a
        href="https://data.boston.gov/dataset/building-energy-reporting-and-disclosure-ordinance"
        target="_blank"
        rel="noreferrer"
      >
        Data Source (data.boston.gov)
      </a>
    </ModalComponent>
  );
};

const mapStateToProps = (store) => {
  return {
    actions: { ...store.actions },
    ui: { ...store.ui },
    building: { ...store.building },
  };
};

export default conn(mapStateToProps)(LoadedSummaryModal);
