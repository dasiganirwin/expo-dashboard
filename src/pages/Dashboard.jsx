import React, { useState, useEffect } from "react";
import SideNavigation from "../components/SideNavigation";
import Header from "../components/Header";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Paper, Grid } from '@material-ui/core';
import MaterialTable from 'material-table';
import axios from 'axios';
import DashboardTable from "../components/DashboardTable";

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
  
const comonscol = [
    { title: "Exhibitor no.", field: "id" },
    { title: "Exhibitor", field: "company_name" },
    { title: "Exhibitor Type", field: "type" },
    { title: "Live", field: "" },
    ];

function Dashboard() {
    const [data, setData] = React.useState([])
   


    React.useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/https://expo-ph.herokuapp.com/api/exhibitor/")
          .then(res => res.json())
          .then(res => setData(res))
          .then(json => console.log(json))
          .catch(err => console.log(err.message))
      }, [])

    const classes = useStyles();
    const [expoevent, setExpoevent] = React.useState('');
    
  
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
                                <Paper className={classes.paper}>Dashboard</Paper>  
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <div>
                                    <Paper className={classes.paperEvent}>
                                        <div className="event">
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-outlined-label">Event</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={expoevent}
                                                onChange={handleChange}
                                                label="Age"
                                                >
                                                <MenuItem value={10}>Builvex</MenuItem>
                                                <MenuItem value={20}>Health Pinoy</MenuItem>
                                                <MenuItem value={30}>Marry Me</MenuItem>
                                                <MenuItem value={30}>Pili pinas</MenuItem>
                                                </Select>
                                            </FormControl> 
                                        </div>
                                        <div className="year">
                                        <FormControl variant="outlined" className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={expoevent}
                                                onChange={handleChange}
                                                label="Age"
                                                >
                                                <MenuItem value={10}>2020</MenuItem>
                                                <MenuItem value={20}>2021</MenuItem>
                                                <MenuItem value={30}>2022</MenuItem>
                                                <MenuItem value={30}>2023</MenuItem>
                                                </Select>
                                            </FormControl> 
                                        </div> 
                                    </Paper>     
                                </div>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Paper className={classes.paperExhibitorBrand}> 
                                    <div className="exhibitorNumber">
                                        <p>Exhibitors</p><p>1</p>
                                    </div>
                                    <div className="totalBrands">
                                        <p>No. of Brands</p><p>1</p>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <DashboardTable col={comonscol} data={data} />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
        );
    }

export default Dashboard;