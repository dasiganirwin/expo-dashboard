import React from "react";
import SideNavigation from "../components/SideNavigation";
import Header from "../components/Header";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { createClassExpression } from "typescript";



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '30ch',
        },
      },
    twoColumnTextfield: {
        '& > *': {
            margin: theme.spacing(1),
            width: '44ch',
            },
        },
    fullWidthTextfield: {
        '& > *': {
            margin: theme.spacing(1),
            width: '90ch',
            },
        },
    threeColumnTextfield: {
        '& > *': {
            margin: theme.spacing(1),
            width: '28ch',
            },
        },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxHeight: 10,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    grid: {
        width: '100%',
        margin: '0px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    paperDetails: {
        padding: theme.spacing(5),
        textAlign: 'left',
        height: '1100px',
    },
    paperExhibitorBrand: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: '110px',
    },
    button: {
        margin: theme.spacing(6),
        width: '28ch'
      },

  }));
  

function AddExhibitor() {
    const classes = useStyles();
    const [expoevent, setExpoevent] = React.useState('');
    const [state, setState] = React.useState({
        columns: [
          { title: 'Exhibitor No.', field: 'exhibitorno' },
          { title: 'Exhibitor', field: 'exhibitor' },
          { title: 'Exhibitor Type', field: 'exhibitortype', lookup: { 1: 'Major', 2: 'Minor' ,3: 'General'}, },
          {
            title: 'Live',
            field: 'live',
            lookup: { 34: 'Yes', 63: 'No' },
          },
        ],
        data: [
          { exhibitorno: 'Builvex-0001-2020', exhibitor: 'Makita', exhibitortype: 1, live: 63 },
          {
            exhibitorno: 'Builvex-0001-2020',
            exhibitor: 'Black and Decker',
            exhibitortype: 2,
            live: 34,
          },
        ],
      });
  
    const handleChange = (event) => {
        setExpoevent(event.target.value);
    };
    return (
        <div className="mainContainer">
            <div className="header">
                <Header />
            </div>
            <div className="contentsContainer" >
                <Grid container className={classes.grid} spacing={2}>
                    <Grid item xs={10} md={12}>
                        <Paper className={classes.paper}>Add Exhibitor</Paper>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div>
                            <Paper className={classes.paperDetails}>
                                <div className="leftTextFields">
                                    <form className={classes.root} noValidate autoComplete="off">
                                        <TextField id="outlined-basic" label="Exhibitor No." variant="outlined" />
                                    </form>
                                </div>
                                <div className="rightTextFields">
                                    <form className={classes.twoColumnTextfield} noValidate autoComplete="off">
                                        <TextField id="outlined-basic" label="First Name" variant="outlined" />
                                        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                                        <TextField id="outlined-basic" label="Email Address" variant="outlined" />
                                        <TextField id="outlined-basic" label="Contact No." variant="outlined" />
                                    </form>
                                    <form className={classes.fullWidthTextfield} noValidate autoComplete="off">
                                        <TextField id="outlined-basic" label="Exhibitor Name" variant="outlined" />
                                        <TextField id="outlined-basic" label="Address Line 1" variant="outlined" />
                                        <TextField id="outlined-basic" label="Address Line 1" variant="outlined" />
                                        <TextField id="outlined-basic" label="Contact No." variant="outlined" />
                                    </form>
                                    <form className={classes.twoColumnTextfield} noValidate autoComplete="off">
                                        <TextField id="outlined-basic" label="City" variant="outlined" />
                                        <TextField id="outlined-basic" label="Zip Code" variant="outlined" />
                                    </form>
                                    <form className={classes.threeColumnTextfield} noValidate autoComplete="off">
                                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                                        <TextField id="outlined-basic" label="Company Logo (URL)" variant="outlined" />
                                        <TextField id="outlined-basic" label="Cover Photos (URL)" variant="outlined" />
                                    </form>
                                    <form className={classes.fullWidthTextfield} noValidate autoComplete="off">
                                        <TextField
                                        id="outlined-textarea"
                                        label="Company Description"
                                        placeholder="Company Description"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        />
                                    </form>
                                    <form className={classes.twoColumnTextfield} noValidate autoComplete="off">
                                        <TextField id="outlined-basic" label="Promotional Video Title 1" variant="outlined" />
                                        <TextField id="outlined-basic" label="Video (URL)" variant="outlined" />
                                        <TextField id="outlined-basic" label="Promotional Video Title 2" variant="outlined" />
                                        <TextField id="outlined-basic" label="Video (URL)" variant="outlined" />
                                    </form>
                                    <div className="saveButton">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        className={classes.button}
                                        startIcon={<SaveIcon />}
                                        >
                                        Save
                                        </Button>
                                    </div>
                                </div>
                            </Paper>     
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="navContainer">
                <SideNavigation />
            </div>  
        </div>
        );
    }

export default AddExhibitor;