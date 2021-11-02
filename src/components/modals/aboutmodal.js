import { conn } from "../../store/connect";
import { ModalComponent } from "../modalcomponent";

const AboutModal = (props) => {
  const isAboutModalOpen = props.ui.isAboutModalOpen;
  const exitCallback = props.actions.setIsAboutModalOpen;

  return (
    <ModalComponent isOpen={isAboutModalOpen} exitCallback={exitCallback}>
      <h3>About this calculator</h3>

      <p>summary info tbd....</p>
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
