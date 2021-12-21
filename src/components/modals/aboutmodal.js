import { conn } from "../../store/connect";
import { ModalComponent } from "../modalcomponent";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  root: {},
  ul: {},
  li: {
    marginBottom: 10,
  },
});
const AboutModal = (props) => {
  const classes = useStyles();
  const isAboutModalOpen = props.ui.isAboutModalOpen;
  const exitCallback = props.actions.setIsAboutModalOpen;

  return (
    <ModalComponent isOpen={isAboutModalOpen} exitCallback={exitCallback}>
      <h3>About the BERDO 2.0 calculator beta version</h3>
      <ul>
        <li className={classes.li}>
          This is a work-in-progress demo version of AKF's BERDO 2.0 calculator,
          and as such should not be used to predict any actual BERDO thresholds
          or future building performance.
        </li>

        <li className={classes.li}>
          Emissions Factors for 2021 thru 2050 have been taken from the{" "}
          <a
            target="_blank"
            href="https://www.boston.gov/sites/default/files/file/2021/02/Boston_Performance_Standard_Technical_Methods_2021-02-18_20-013.pdf"
          >
            Boston Performance Standard Technical Methods
          </a>{" "}
          report and used to project anticipated carbon emissions for each year.
        </li>
        <li className={classes.li}>
          The tool currently estimates compliance costs using only Alternative
          Compliance Payments (ACPs at $234/metric ton of CO2) and does not
          demonstrate options for power purchase agreements or purchase of BERDO
          2.0-approved renewable energy certificates whose prices fluctuate with
          potential costs and savings highly dependent on the market and
          individual projects circumstances
        </li>

        <li className={classes.li}>
          For the most up-to-date information on BERDO 2.0 policies and
          implementation, please see{" "}
          <a target="_blank" href="https://boston.gov/berdo">
            https://boston.gov/berdo
          </a>
          . However, this calculator is based on "CBC Chapter VII, Section 7-2.2
          Building Energy Reporting and Disclosure Ordinance (BERDO)," as of
          December 2021, and provides only an approximation of the impact of the
          carbon emissions thresholds and Alternative Compliance Payments. As
          actual results will vary, the tool should not be relied on as specific
          legal or risk mitigation guidance.
        </li>

        <li className={classes.li}>
          City agency rulemaking and enforcement practices may significantly
          impact the application of the ordinance to individual buildings. The
          ordinance provides for a number of possible adjustments to the annual
          building emissions limit, including appeal based on special
          circumstances and critical building uses. These are not accounted for
          in the calculator.
        </li>

        <li className={classes.li}>
          AKF provides the information on this website ("site") for the
          convenience of its customers. The calculator may be used for
          informational purposes only. All such information derived herefrom is
          provided "as is" and without warranties as to the suitability,
          accuracy or completeness of the information. Permission to use this
          site is conditioned upon your agreeing to these terms.
        </li>
      </ul>
    </ModalComponent>
  );
};

const mapStateToProps = (store) => {
  return {
    actions: { ...store.actions },
    ui: { ...store.ui },
  };
};

export default conn(mapStateToProps)(AboutModal);
