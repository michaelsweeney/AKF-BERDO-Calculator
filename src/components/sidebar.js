import BldgTypeInfoBox from "./userinputs/bldgtypeinfobox";

import { NumberInput } from "./userinputs/numberinput";
import { conn } from "../store/connect";
import { max } from "d3";
import { Button, Paper } from "@mui/material";

import { makeStyles } from "@material-ui/styles";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  accordionSummary: {
    fontWeight: 600
  },
  addBuildingType: {
    textAlign: 'center'
  }
});

const Sidebar = (props) => {
  const classes = useStyles();
  const handleUtilityChange = (val, fuel) => {
    props.actions.setNativeUtilityConsumption(val, fuel);
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
    absorption_chiller_gas: "Gas Absorption Chiller (MMBtu)",
    engine_driven_chiller_gas: "Gas-Driven Chiller (MMBtu)",
  };

  const handleAccordionChange = (val) => {
    props.actions.toggleAccordion(val)
  }

  return (
    <Paper elevation={0}>
      <div className={classes.root}>
        <Accordion expanded={props.ui.accordion.property_types} onChange={() => handleAccordionChange('property_types')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <div className={classes.accordionSummary}>Property Types</div>
          </AccordionSummary>
          <AccordionDetails style={{
            maxHeight: "500px", overflow: "auto"
          }}>
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
                <Button size="small" onClick={handleAddBuildingType} variant="outlined" >
                  ADD BUILDING TYPE
                </Button>
              </div>

            </div>

          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={props.ui.accordion.utility_consumption}
          onChange={() => handleAccordionChange('utility_consumption')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <div className={classes.accordionSummary}>
              Utility Consumption
            </div>
          </AccordionSummary>
          <AccordionDetails style={{ maxHeight: "500px", overflow: "auto" }}>
            <div>
              {Object.keys(fueltypes).map((e, i) => {
                return (
                  <div key={i}>
                    <NumberInput
                      changeCallback={(v) => handleUtilityChange(v.target.value, e)}
                      label={fueltypes[e]}
                      value={props.building.consumption_native[e]}
                    />
                  </div>
                );
              })}
            </div>
          </AccordionDetails>
        </Accordion>

      </div >
    </Paper>



  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default conn(mapStateToProps)(Sidebar);
