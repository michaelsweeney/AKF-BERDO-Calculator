import { conn } from "../../store/connect";
import { ModalComponent } from "../modalcomponent";

const AboutModal = (props) => {
  const isAboutModalOpen = props.ui.isAboutModalOpen;
  const exitCallback = props.actions.setIsAboutModalOpen;

  return (
    <ModalComponent isOpen={isAboutModalOpen} exitCallback={exitCallback}>
      <h3>About this calculator</h3>

      <p>
        This is a work-in-progress demo version of AKF's BERDO 2.0 calculator,
        and as such should not be used to predict any actual BERDO thresholds or
        future building performance.
      </p>
      <p>
        Future information about this calculator, including dataset and legal
        references, will be included at a later date.
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
