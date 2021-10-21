import { conn } from "../store/connect";

import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";

import BerdoApiComponent from "./berdoapi/berdoapi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "white",
  border: "1px solid gray",
  boxShadow: 24,
  p: 4,
};

const LoadBldgModal = (props) => {
  const isLoadModalOpen = props.ui.isLoadModalOpen;

  return (
    <Modal open={isLoadModalOpen}>
      <Box sx={style}>
        <Button onClick={() => props.actions.setIsLoadModalOpen(false)}>
          x
        </Button>

        <h3>Query the BERDO dataset for your building</h3>

        <BerdoApiComponent />
      </Box>
    </Modal>
  );
};

const mapStateToProps = (store) => {
  return {
    actions: { ...store.actions },
    ui: { ...store.ui },
  };
};

export default conn(mapStateToProps)(LoadBldgModal);
