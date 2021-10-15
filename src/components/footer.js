import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  footer: {
    height: 100,
    padding: 20,
  },
  left: {},
  center: {},
  right: {},
});
const Footer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <img width="75" src="city_council_logo.png"></img>
      <img width="75" src="akf-logo.png"></img>
    </div>
  );
};

export default Footer;
