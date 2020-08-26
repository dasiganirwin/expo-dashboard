import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



const StyledButton = withStyles({
  root: {
    /*background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',*/
    borderRadius: 0,
    border: 0,
    color: 'white',
    height: 70,
    width:220,
    padding: '0 30px'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function SideNavigation() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Accordion>
      <StyledButton>
        <Button size="medium" className={classes.margin}>
          Overview
        </Button>
      </StyledButton>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Exhibitor</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <ListItem button>
            <ListItemText primary="Add Exhibitor" />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Add Products" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Add Products" />
          </ListItem>
          <Divider light />
        </List>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography className={classes.heading}>Events</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <List component="nav" className={classes.root} aria-label="mailbox folders">
        <ListItem button>
        <ListItemText primary="Add Event" />
        </ListItem>
        <Divider />
        <ListItem button divider>
        <ListItemText primary="View list of Events" />
        </ListItem>
        <Divider light />
        </List>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
      <Typography className={classes.heading}>User Information</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          <ListItem button>
          <ListItemText primary="Add Event" />
          </ListItem>
          <Divider />
          <ListItem button divider>
          <ListItemText primary="View list of Events" />
          </ListItem>
          <Divider light />
        </List>
      </AccordionDetails>
    </Accordion>
  </div>
  );
}

export default SideNavigation;
