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

import {Link } from 'react-router-dom';


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
        <Link to="/dashboard">
          <Button size="medium" className={classes.margin}>
            Overview
          </Button>
        </Link>
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
          <Link to="/addexhibitor">
            <ListItem button>
              <ListItemText primary="Add Exhibitor" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/addproduct">
          <ListItem button divider>
            <ListItemText primary="Add Products" />
          </ListItem>
          </Link>
          <Link to="/listexhibitors">
          <ListItem button>
            <ListItemText primary="List of Exhibitors" />
          </ListItem>
          </Link>
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
        <Link to="/addevent">
          <ListItem button>
          <ListItemText primary="Add Event" />
          </ListItem>
        </Link>
        <Divider />
 
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
          <Link to="/adduserinfo"> 
            <ListItem button>
            <ListItemText primary="Add User Information" />
            </ListItem>
          </Link> 
          <Divider />
          <Link to="/listofusers"> 
            <ListItem button divider>
            <ListItemText primary="View list of Users" />
            </ListItem>
          </Link>
        </List>
      </AccordionDetails>
    </Accordion>
    
  </div>
  );
}

export default SideNavigation;
