import { conn } from "../../store/connect";

import { ModalComponent } from "../modalcomponent";

const LoadedSummaryModal = (props) => {
  const isLoadModalOpen = props.ui.isLoadedSummaryModalOpen;
  const exitCallback = props.actions.setIsLoadedSummaryModalOpen;
  return (
    <ModalComponent isOpen={isLoadModalOpen} exitCallback={exitCallback}>
      <h3>LOADED BUILDING SUMMARY</h3>
      <p>results for loaded building...</p>
    </ModalComponent>
  );
};

const mapStateToProps = (store) => {
  return {
    actions: { ...store.actions },
    ui: { ...store.ui },
  };
};

export default conn(mapStateToProps)(LoadedSummaryModal);
