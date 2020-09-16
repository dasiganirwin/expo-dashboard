import React from "react";
import SideNavigation from "../components/SideNavigation";
import Header from "../components/Header";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';
import DashboardTable from "../components/DashboardTable";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '30ch',
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
        height: '250px',
    },
    fullWidthTextfield: {
        '& > *': {
            margin: theme.spacing(1),
            width: '90ch',
            },
        },
  }));

const comonscol = [
    { title: "Product Name", field: "name" },
    { title: "Product Description", field: "description" },
    { title: "Product Model", field: "model" },
    { title: "Product Brand", field: "" },
    { title: "Cover Image URL", field: "cover_images" },
    { title: "Thumbnail URL", field: "thumbnail_url" },
    ];
  

function AddProduct() {
    const classes = useStyles();
    const [expoevent, setExpoevent] = React.useState('');

    const [data, setData] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/https://expo-ph.herokuapp.com/api/product/")
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
            <div className="contentsContainer" >
                <Grid container className={classes.grid} spacing={2}>
                    <Grid item xs={10} md={12}>
                        <Paper className={classes.paper}>Add Products</Paper>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div>
                            <Paper className={classes.paperDetails}>
                                <div>
                                    <form className={classes.root} noValidate autoComplete="off">
                                        <TextField id="outlined-basic" label="Exhibitor No." variant="outlined" />
                                    </form>
                                    <form className={classes.fullWidthTextfield} noValidate autoComplete="off">
                                      <TextField id="outlined-basic" label="First Name" variant="outlined" />
                                    </form>
                                </div>
                            </Paper>     
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <DashboardTable col={comonscol} data={data} />
                    </Grid>
                </Grid>
            </div>
            <div className="navContainer">
                <SideNavigation />
            </div>  
        </div>
        );
    }

export default AddProduct;