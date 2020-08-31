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
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

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
    paperUser: {
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
  

function AddUserInfo() {
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
            <div className="contentsContainer" >
                <Grid container className={classes.grid} spacing={2}>
                    <Grid item xs={10} md={12}>
                        <Paper className={classes.paper}>Add User Info</Paper>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div>
                            <Paper className={classes.paperDetails}>
                                <form className={classes.twoColumnTextfield} noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="User No." variant="outlined" />
                                </form>
                                <form className={classes.twoColumnTextfield} noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="First Name" variant="outlined" />
                                    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                                    <TextField id="outlined-basic" label="Company" variant="outlined" />
                                    <TextField id="outlined-basic" label="Position" variant="outlined" />
                                </form>
                                <form className={classes.fullWidthTextfield} noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="Company Address" variant="outlined" />
                                </form>
                                <form className={classes.twoColumnTextfield} noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="User Name" variant="outlined" />
                                    <TextField id="outlined-basic" label="Email Address" variant="outlined" />
                                    <TextField id="outlined-basic" label="Contact No." variant="outlined" />
                                    <TextField id="outlined-basic" label="Telephone No." variant="outlined" />
                                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                                    <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
                                </form>
                                <div className="saveButtonUser">
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

export default AddUserInfo;