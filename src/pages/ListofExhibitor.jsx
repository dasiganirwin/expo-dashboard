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
import TextField from '@material-ui/core/TextField';

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
  

function ListifExhibitor() {
    const classes = useStyles();
    const [expoevent, setExpoevent] = React.useState('');
    const [state, setState] = React.useState({
        columns: [
          { title: 'Exhibitor No.', field: 'Exhibitorno' },
          { title: 'Exhibitor', field: 'exhibitor' },
          { title: 'Product Model', field: 'productmodel' },
          { title: 'Product Brand', field: 'productbrand' },
          { title: 'Video URL', field: 'videourl' },
          { title: 'Image URL', field: 'imageurl' },
          
        ],
        data: [
          { Exhibitorno: '111', 
            exhibitor: 'Makita' ,
            productdescription: 'Descrition here',
            productbrand: 'Irwin',
            videos: 'url here',
            images: 'url here'
        },
          {
            productname: 'Descrition here',
            productmodel: '2233',
            productdescription: 'Descrition here',
            productbrand: 'Irwin',
            videos: 2,
            images: 10,
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
                        <Paper className={classes.paper}>List of Exhibitor</Paper>
                    </Grid>
                    <Grid item xs={3} md={3}/>
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
                    <Grid item xs={3} md={3}/>
                    <Grid item xs={12} md={12}>
                        <MaterialTable
                            title="Product Details"
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
                    </Grid>
                </Grid>
            </div>
            <div className="navContainer">
                <SideNavigation />
            </div>  
        </div>
        );
    }

export default ListifExhibitor;