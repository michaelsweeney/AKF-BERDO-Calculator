import { conn } from "../../store/connect";
import { ModalComponent } from "../modalcomponent";

const AboutModal = (props) => {
  const isAboutModalOpen = props.ui.isAboutModalOpen;
  const exitCallback = props.actions.setIsAboutModalOpen;

  return (
    <ModalComponent isOpen={isAboutModalOpen} exitCallback={exitCallback}>
      <h3>About the BERDO 2.0 calculator</h3>

      <p>
        This is a work-in-progress demo version of AKF's BERDO 2.0 calculator,
        and as such should not be used to predict any actual BERDO thresholds or
        future building performance.
      </p>

      <p>
        This calculator is based on AKF's interpretation of "CBC Chapter VII,
        Section 7-2.2 Building Energy Reporting and Disclosure Ordinance
        (BERDO)" and provides only an approximation of the impact of the carbon
        emissions thresholds and Alternative Compliance Payments. As actual
        results will vary, the tool should not be relied on as specific legal or
        risk mitigation guidance.
      </p>

      <p>
        City agency rulemaking and enforcement practices may significantly
        impact the application of the ordinance to individual buildings. The
        ordinance provides for a number of possible adjustments to the annual
        building emissions limit, including appeal based on special
        circumstances and critical building uses. These are not accounted for in
        the calculator.
      </p>
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
