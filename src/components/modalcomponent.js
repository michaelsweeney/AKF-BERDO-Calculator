import { Button } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

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
  padding: 5,
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
          <Button
            sx={{
              padding: 1,
              minWidth: 0,
              // textAlign: "left",

              position: "relative",
              left: -20,
              top: -10,
              "&:hover": {
                color: "red",
                backgroundColor: "white",
              },
            }}
            size="small"
            color="primary"
            onClick={hideModal}
          >
            <CloseIcon />
          </Button>
          {props.children}
        </Box>
      </div>
    </Modal>
  );
};

export { ModalComponent };
