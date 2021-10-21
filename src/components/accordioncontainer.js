import { conn } from "../store/connect";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  accordionSummary: {
    fontWeight: 600,
  },
  addBuildingType: {
    textAlign: "center",
  },
});

const AccordionContainer = (props) => {
  const { label, tag } = props;
  const handleAccordionChange = (val) => {
    props.actions.toggleAccordion(val);
  };

  const classes = useStyles();
  return (
    <Accordion
      expanded={props.ui.accordion.utility_consumption}
      onChange={() => handleAccordionChange(tag)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div className={classes.accordionSummary}>{label}</div>
      </AccordionSummary>
      <AccordionDetails style={{ maxHeight: "500px", overflow: "auto" }}>
        {props.children}
      </AccordionDetails>
    </Accordion>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default conn(mapStateToProps)(AccordionContainer);
