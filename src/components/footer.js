import { makeStyles } from "@material-ui/styles";
import { Paper } from "@mui/material";
import { HoverButton } from "./hoverbutton";
const useStyles = makeStyles({
  footer: {
    // height: 20,
    // padding: 20,
    borderTop: "solid 1px gray",
    // backgroundColor: 'rgba(20,20,20,0.1)'
  },
  left: { float: "left", paddingTop: 18, paddingLeft: 25 },
  center: {},
  right: { float: "right", paddingTop: 18, paddingRight: 25 },

  contactButton: {
    position: "relative",
    top: -10,
    left: -10,
  },
});
const Footer = (props) => {
  const classes = useStyles();

  const handleContactClick = (e) => {
    let mailto =
      "mailto:cmarino@akfgroup.com,rosser@akfgroup.com,msweeney@akfgroup.com?subject=Question regarding the BERDO 2.0 Calculator";
    window.location.href = mailto;
    e.preventDefault();
  };

  return (
    <Paper elevation={0}>
      <div className={classes.footer}>
        <div className={classes.left}>
          <div className={classes.contactButton}>
            <HoverButton
              color="primary"
              variant="contained"
              clickCallback={handleContactClick}
              hovercontent="Get in touch with AKF's Energy + Performance to learn more about how BERDO impacts your project."
            >
              Contact Us
            </HoverButton>
          </div>
        </div>
        <div className={classes.right}> &copy; 2022 AKF Group</div>
      </div>
    </Paper>
  );
};

export default Footer;
