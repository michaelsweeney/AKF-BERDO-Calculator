import { Button } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";

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

const ModalComponent = (props) => {
  const { isOpen, exitCallback } = props;

  const hideModal = () => {
    exitCallback(false);
  };

  return (
    <Modal className="modal" open={isOpen} onClose={hideModal}>
      <div className="modal-content">
        <Box sx={style}>
          <Button color="primary" onClick={hideModal}>
            x
          </Button>
          {props.children}
        </Box>
      </div>
    </Modal>
  );
};

export { ModalComponent };
