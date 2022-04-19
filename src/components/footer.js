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
  left: { float: "left" },
  center: {},
  right: { float: "right" },
  contactButton: {
    display: "inline-block",
    position: "relative",
    top: 25,
    left: 0,
    marginRight: 15,
    marginLeft: 20,
  },
  copyright: {
    position: "relative",
    top: 25,
    display: "inline-block",
  },
  imageContainer: {
    position: "relative",
    bottom: 20,
    left: 45,
  },
});
const Footer = (props) => {
  const classes = useStyles();

  const handleContactClick = (e) => {
    let mailto =
      "mailto:cmarino@akfgroup.com;rosser@akfgroup.com;msweeney@akfgroup.com?subject=Question regarding the BERDO 2.0 Calculator";
    window.location.href = mailto;
    e.preventDefault();
  };

  return (
    <Paper elevation={0}>
      <div className={classes.footer}>
        <div className={classes.left}>
          <div className={classes.imageContainer}>
            <img alt="" width="250" src="BERDO Outline.png"></img>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.copyright}>&copy; 2022 AKF Group</div>

          <div className={classes.contactButton}>
            <HoverButton
              color="primary"
              variant="contained"
              clickCallback={handleContactClick}
              hovercontent="Get in touch with AKF's Energy + Performance Team to discuss BERDO 2.0 compliance strategies for your project."
            >
              Contact Us
            </HoverButton>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Footer;
