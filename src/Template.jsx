import React from "react";
import SideNavigation from "../components/SideNavigation";
import Header from "../components/Header";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Paper, Grid } from '@material-ui/core';
import MaterialTable from 'material-table';

const useStyles = makeStyles((theme) => ({
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
    paperEvent: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: '110px',
    },
    paperExhibitorBrand: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: '110px',
    }
  }));
  

function template() {
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
                        <Paper className={classes.paper}>Template</Paper>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <div>
                            <Paper className={classes.paperEvent}>
                                
                            </Paper>     
                        </div>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Paper className={classes.paperExhibitorBrand}> 
                          
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={12}>
                    </Grid>
                </Grid>
            </div>
            <div className="navContainer">
                <SideNavigation />
            </div>  
        </div>
        );
    }

export default Template;