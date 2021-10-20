import { makeStyles } from "@material-ui/styles";
import { Paper } from "@mui/material";
const useStyles = makeStyles({
  footer: {
    height: 75,
    padding: 20,
    // borderTop: "solid 2px black",
  },
  left: {},
  center: {},
  right: { float: "right", padding: 20 },
});
const Footer = (props) => {
  const classes = useStyles();
  return (
    <Paper elevation={2}>
      <div className={classes.footer}>
        <div className={classes.right}>copyright 2021 AKF Engineers</div>
        {/* <img width="75" src="city_council_logo.png"></img> */}
        {/* <img width="75" src="akf-logo.png"></img> */}
      </div>
    </Paper>

  );
};

export default Footer;
