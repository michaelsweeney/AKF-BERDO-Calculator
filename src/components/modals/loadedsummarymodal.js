import { conn } from "../../store/connect";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { ModalComponent } from "../modalcomponent";
import { building_types } from "../../calculations/buildingtypes";
import * as d3 from "d3";

const useStyles = makeStyles({
  root: {},

  closeButtonContainer: {
    textAlign: "center",
    marginTop: 30,
  },
  closeButton: {
    width: 300,
    padding: 75,
  },
});
const LoadedSummaryModal = (props) => {
  const classes = useStyles();
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
  const pctFormat = d3.format(",.1%");
  const numFormat = d3.format(",");

  let loaded_summary_list = [
    `Property Name: ${loadedBuildingInfo["Property Name"]}`,
    `Address: ${loadedBuildingInfo["Address"]}`,
    `Tax Parcel: ${loadedBuildingInfo["Tax Parcel"]}`,
    `Gross Area (sq ft): ${numFormat(
      loadedBuildingInfo["Gross Area (sq ft)"]
    )}`,
    `Energy Star Score: ${loadedBuildingInfo["ENERGY STAR Score"]}`,
    `Onsite Renewable (kWh): ${convertBlank(
      loadedBuildingInfo["Onsite Renewable (kWh)"]
    )}`,
    `Property Type: ${loadedBuildingInfo["Property Type"]}`,
    `Property Uses: ${loadedBuildingInfo["Property Uses"]}`,
    `Total Site Energy (kBtu): ${numFormat(
      loadedBuildingInfo["Total Site Energy (kBTU)"]
    )}`,
    `Portion Electricity: ${pctFormat(
      convertBlank(loadedBuildingInfo["% Electricity"])
    )}`,
    `Portion Gas: ${pctFormat(convertBlank(loadedBuildingInfo["% Gas"]))}`,
    `Portion Other (Diesel #2, Kerosene, Propane, or Other Fuel): ${pctFormat(
      convertBlank(
        loadedBuildingInfo[
          "% Other (Diesel #2, Kerosene, Propane or Other Fuel)"
        ]
      )
    )}`,
    `Portion Fuel Oil: ${pctFormat(
      convertBlank(loadedBuildingInfo["% Fuel Oil"])
    )}`,
    `Portion District Hot Water: ${pctFormat(
      convertBlank(loadedBuildingInfo["% District Hot Water"])
    )}`,
    `Portion Steam: ${pctFormat(convertBlank(loadedBuildingInfo["% Steam"]))}`,
    `Portion District Chilled Water: ${pctFormat(
      convertBlank(loadedBuildingInfo["% District Chilled Water"])
    )}`,
  ];

  return (
    <ModalComponent isOpen={isLoadModalOpen} exitCallback={exitCallback}>
      <h3>LOADED BUILDING SUMMARY</h3>
      The below information has been loaded for the selected building:
      <ul>
        {loaded_summary_list.map((d, i) => (
          <li key={i}>{d}</li>
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
      <div className={classes.closeButtonContainer}>
        <Button
          variant="contained"
          color="primary"
          className={classes.closeButton}
          onClick={() => exitCallback(false)}
        >
          OK
        </Button>
      </div>
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
