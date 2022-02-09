import { makeStyles } from "@material-ui/styles";
import { Paper } from "@mui/material";
const useStyles = makeStyles({
  footer: {
    // height: 20,
    // padding: 20,
    borderTop: "solid 1px gray",
    // backgroundColor: 'rgba(20,20,20,0.1)'
  },
  left: {},
  center: {},
  right: { float: "right", paddingTop: 18, paddingRight: 25 },
});
const Footer = (props) => {
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <div className={classes.footer}>
        <div className={classes.right}> &copy; 2022 AKF Group</div>
      </div>
    </Paper>
  );
};

export default Footer;
