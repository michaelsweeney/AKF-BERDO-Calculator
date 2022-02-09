import { Button } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

const boxStyle = {
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
  overflowY: "auto",
  // paddingTop: "5px !important",
};

const modalStyle = {
  paddingTop: 5,
};

const modalContentStyle = {
  // overflowY: "scroll",
};

const ModalComponent = (props) => {
  const { isOpen, exitCallback, disableClose } = props;

  const hideModal = () => {
    exitCallback(false);
  };

  return (
    <Modal cx={modalStyle} className="modal" open={isOpen} onClose={hideModal}>
      <div className="modal-content">
        <Box sx={boxStyle}>
          {disableClose ? (
            ""
          ) : (
            <div style={{ height: 20 }}>
              <Button
                sx={{
                  padding: 1,
                  minWidth: 0,
                  float: "right",
                  position: "relative",
                  // left: -15,
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
            </div>
          )}
          <div style={modalContentStyle}>{props.children}</div>
        </Box>
      </div>
    </Modal>
  );
};

export { ModalComponent };
