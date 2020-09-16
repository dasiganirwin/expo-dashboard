import React from "react";
import SideNavigation from "../components/SideNavigation";
import Header from "../components/Header";
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Grid } from '@material-ui/core';
import MaterialTable from 'material-table';
import DashboardTable from "../components/DashboardTable";

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
  
  const comonscol = [
    { title: "Event", field: "name" },
    { title: "Event Description", field: "short_description" },
    { title: "Start", field: "start_at" },
    { title: "End", field: "end_at" },
    { title: "Small logo URL", field: "small_logo_image_url" },
    { title: "Big Logo URL", field: "big_logo_image_url" },
    { title: "Icon URL", field: "icon_image_url" },
    { title: "Intro Video URL", field: "intro_video_url" },
    { title: "Cover Image URL", field: "cover_image_url" },
    { title: "Category", field: "category" },
    { title: "Status", field: "status" },
    ];

function AddEvent() {
    const classes = useStyles();
    const [expoevent, setExpoevent] = React.useState('');

    const [data, setData] = React.useState([])

    React.useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/https://expo-ph.herokuapp.com/api/event/")
          .then(res => res.json())
          .then(res => setData(res))
          .then(json => console.log(json))
          .catch(err => console.log(err.message))
      }, [])

  
    const handleChange = (event) => {
        setExpoevent(event.target.value);

        
    };
    return (
        <div className="mainContainer">
            <div className="header">
                <Header />
            </div>
                <Grid container className={classes.grid} spacing={2}>
                    <Grid item xs={3} md={3}>
                        <div className="navContainer">
                            <SideNavigation />
                        </div>  
                    </Grid>
                    <Grid item xs={9} md={9}>
                        <div className="contentsContainer" >
                            <Grid container className={classes.grid} spacing={2}>
                                <Grid item xs={10} md={12}>
                                    <Paper className={classes.paper}>Add Event</Paper>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <div>
                                        <Paper className={classes.paperDetails}>
                                            <DashboardTable col={comonscol} data={data} />
                                        </Paper>     
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
        </div>
        );
    }

export default AddEvent;