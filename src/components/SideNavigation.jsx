import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

function SideNavigation() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Accordion>
      <AccordionSummary>
        <Typography className={classes.heading}>Overview</Typography>
      </AccordionSummary>
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
        <ButtonGroup orientation="vertical" variant="text">
          <Button size="Medium" className={classes.margin}>
            Add New Exhibitor
          </Button>
          <Button size="Medium" className={classes.margin}>
            Add Products
          </Button>
          <Button size="Medium" className={classes.margin}>
            View list Exhibitor
          </Button>
        </ButtonGroup>
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
        <ButtonGroup orientation="vertical" variant="text">
          <Button size="Medium" className={classes.margin}>
            Add New Exhibitor
          </Button>
          <Button size="Medium" className={classes.margin}>
            Add Products
          </Button>
          <Button size="Medium" className={classes.margin}>
            View list Exhibitor
          </Button>
        </ButtonGroup>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography className={classes.heading}>
          Disabled Accordion
        </Typography>
      </AccordionSummary>
    </Accordion>
  </div>
  );
}

export default SideNavigation;
