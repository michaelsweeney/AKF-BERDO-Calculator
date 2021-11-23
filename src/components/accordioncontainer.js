import { conn } from "../store/connect";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    marginBottom: 10,
  },
  accordionSummary: {
    fontWeight: 600,
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
      className={classes.root}
      expanded={tag === props.ui.activeAccordionKey}
      onChange={() => handleAccordionChange(tag)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div className={classes.accordionSummary}>{label}</div>
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  );
};
const mapStateToProps = (state) => {
  return {
    actions: { ...state.actions },
    ui: { ...state.ui },
  };
};

export default conn(mapStateToProps)(AccordionContainer);
