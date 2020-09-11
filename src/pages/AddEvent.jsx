import React from "react";
import SideNavigation from "../components/SideNavigation";
import Header from "../components/Header";
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Grid } from '@material-ui/core';
import MaterialTable from 'material-table';
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
    paperAddEvent: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: '110px',
    },
    paperExhibitorBrand: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: '110px',
    },
    paperDetails: {
        padding: theme.spacing(5),
        textAlign: 'left',
        height: '1100px',
    },
  }));
  
  

function AddEvent() {
    const classes = useStyles();
    const [expoevent, setExpoevent] = React.useState('');

    const [state, setState] = React.useState({
        columns: [
          { title: 'Event', field: 'event' },
          { title: 'Event Description', field: 'eventdescription' },
          { title: 'Event Month', field: 'eventmonth', lookup: { 1: 'January', 2: 'February'}},
          { title: 'Event Year', field: 'eventyear' },
          { title: 'Logo URL', field: 'logourl' },
          { title: 'Cover Photo URL', field: 'coverphotourl' },
          { title: 'Video Event URL', field: 'videoeventurl' },
          
        ],
        data: [
          { 
            event: 'Builvex', 
            eventdescription: 'test' ,
            eventmonth: 1,
            eventyear: '2021',
            logourl: 'url here',
            coverphotourl: 'url here',
            videoeventurl: 'url here',
        }
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
                        <Paper className={classes.paper}>Add Event</Paper>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div>
                            <Paper className={classes.paperDetails}>
                            <MaterialTable
                            title="Events"
                            columns={state.columns}
                            data={state.data}
                            editable={{
                                onRowAdd: (newData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                    resolve();
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data.push(newData);
                                        return { ...prevState, data };
                                    });
                                    }, 600);
                                }),
                                onRowUpdate: (newData, oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                    resolve();
                                    if (oldData) {
                                        setState((prevState) => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                        });
                                    }
                                    }, 600);
                                }),
                                onRowDelete: (oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                    resolve();
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data.splice(data.indexOf(oldData), 1);
                                        return { ...prevState, data };
                                    });
                                    }, 600);
                                }),
                            }}
                        />
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

export default AddEvent;