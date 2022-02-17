import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import Popover from "@mui/material/Popover";

const useStyles = makeStyles({
  root: {},
  container: {
    padding: 15,
    backgroundColor: "rgba(40,55,90,0.05)",
  },
});

const HoverButton = (props) => {
  const classes = useStyles();
  const { clickCallback, variant, color, hovercontent, size } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        size={size}
        onClick={clickCallback}
        variant={variant}
        color={color}
      >
        {props.children}
      </Button>

      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div className={classes.container}>{hovercontent}</div>
      </Popover>
    </div>
  );
};

export { HoverButton };
