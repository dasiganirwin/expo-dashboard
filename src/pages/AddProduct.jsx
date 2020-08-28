import React from "react";
import SideNavigation from "../components/SideNavigation";
import Header from "../components/Header";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';

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
  

function AddProduct() {
    const classes = useStyles();
    const [expoevent, setExpoevent] = React.useState('');
    const [state, setState] = React.useState({
        columns: [
          { title: 'Product Name', field: 'productname' },
          { title: 'Product Description', field: 'productdescription' },
          { title: 'Product Model', field: 'productmodel' },
          { title: 'Product Brand', field: 'productbrand' },
          { title: 'Video URL', field: 'videourl' },
          { title: 'Image URL', field: 'imageurl' },
          
        ],
        data: [
          { productname: 'Drill', 
            productmodel: '2233' ,
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

export default AddProduct;