import { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import Popover from "@mui/material/Popover";

const useStyles = makeStyles({
  root: {},
  container: {
    padding: 15,
    backgroundColor: "rgba(40,55,90,0.05)",
  },
});

const HoverInfoWrapper = (props) => {
  const classes = useStyles();
  const { hovercontent } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div
      style={{ cursor: "pointer" }}
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      {props.children}

      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div className={classes.container}>{hovercontent}</div>
      </Popover>
    </div>
  );
};

export { HoverInfoWrapper };
