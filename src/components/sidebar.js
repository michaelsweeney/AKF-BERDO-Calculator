import { conn } from "../store/connect";
import { Paper } from "@mui/material";

import { makeStyles } from "@material-ui/styles";

import BldgTypeInfoContainer from "./userinputs/bldgtypeinfocontainer";
import UtilityInputContainer from "./userinputs/utilityinputcontainer";
import OnsiteInputContainer from "./userinputs/onsiteinputcontainer";

import AccordionContainer from "./accordioncontainer";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
});

const Sidebar = (props) => {
  const classes = useStyles();

  return (
    <Paper elevation={0}>
      <div className={classes.root}>
        <AccordionContainer label="Property Types" tag="property_types">
          <BldgTypeInfoContainer />
        </AccordionContainer>

        <AccordionContainer
          label="Utility Consumption"
          tag="utility_consumption"
        >
          <UtilityInputContainer />
        </AccordionContainer>
        <AccordionContainer label="Onsite Renewable" tag="onsite_renewable">
          <OnsiteInputContainer />
        </AccordionContainer>
      </div>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    window: state.window,
  };
};

export default conn(mapStateToProps)(Sidebar);
