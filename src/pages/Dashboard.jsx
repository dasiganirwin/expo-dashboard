import React from "react";
import SideNavigation from "../components/SideNavigation";
import Header from "../components/Header";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  

function Dashboard() {
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
            <div className="contentsContainer">
                <h1>Dashboard</h1>
                <div className="eventYear">
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
                </div>
            </div>
            <div className="navContainer">
                <SideNavigation />
            </div>  
        </div>
        );
    }

export default Dashboard;