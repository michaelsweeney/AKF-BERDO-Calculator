import { conn } from "../../store/connect";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { ModalComponent } from "../modalcomponent";
import BerdoApiComponent from "../berdoapi/berdoapicomponent";

const LoadBldgModal = (props) => {
  console.log(props.building);

  const isLoadModalOpen = props.ui.isLoadModalOpen;
  const exitCallback = props.actions.setIsLoadModalOpen;
  return (
    <ModalComponent isOpen={isLoadModalOpen} exitCallback={exitCallback}>
      <h3>Query the BERDO dataset for your building</h3>
      <BerdoApiComponent />
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

export default conn(mapStateToProps)(LoadBldgModal);
