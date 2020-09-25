import React, { useState, useEffect } from 'react';

import { forwardRef } from 'react';
import Avatar from 'react-avatar';
import Grid from '@material-ui/core/Grid'

import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const api = axios.create({
  baseURL: 'https://expo-ph.herokuapp.com/api', 
  headers: { 
    Accept: "application/json",
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
      completed: true}),
})

function validateEmail(email){
  const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
}
const [data, setData] = useState([]); //table data
  //for error handling
  const [iserror, setIserror] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

  useEffect(() => { 
    api.get("/event")
        .then(res => {               
            setData(res.data)
         })
         .catch(error=>{
             console.log("Error")
         })
  }, [])

function test() {

  var columns = [
    {title: "id", field: "id", hidden: true},
    {title: "name", field: "name"},
    {title: "Avatar", render: rowData => <Avatar maxInitials={1} size={40} round={true} name={rowData === undefined ? " " : rowData.first_name} />  },
    {title: "Short Description", field: "short_description"},
    {title: "Full Description", field: "full_description"},
    {title: "Start at", field: "start_at"},
    {title: "End at", field: "end_at"},
    {title: "Small logo URL", field: "small_logo_image_url"},
    {title: "Big logo Address URL", field: "big_logo_image_url"},
    {title: "Icon URL", field: "icon_image_url"},
    {title: "Intro Video URL", field: "intro_video_url"},
    {title: "Cover Image URL", field: "cover_image_url"},
    {title: "Major Exhibitor Image URL", field: "major_exhibitor_image_url"},
    {title: "Category", field: "category"},
    {title: "Status", field: "status"},
    
  ]
 






  const handleRowUpdate = (newData, oldData, resolve) => {
    //validation
    let errorList = []
   /* if(newData.email === "" || validateEmail(newData.email) === false){
      errorList.push("Please enter a valid email")
    }*/
    if(newData.name === ""){
      errorList.push("Please enter username")
    }
    if(newData.short_description === ""){
      errorList.push("Please enter short description")
    }
    if(newData.full_description === ""){
      errorList.push("Please enter full description")
    }
    if(newData.start_at === ""){
      errorList.push("Please enter start at")
    }
    if(newData.end_at === ""){
      errorList.push("Please enter end at")
    }
    if(newData.small_logo_image_url === ""){
      errorList.push("Please enter small logo url")
    }
    if(newData.big_logo_image_url === ""){
      errorList.push("Please enter big logo url")
    }
    if(newData.icon_image_url === ""){
      errorList.push("Please enter icon url")
    }
    if(newData.intro_video_url === ""){
      errorList.push("Please enter intro video url")
    }
    if(newData.cover_image_url === ""){
      errorList.push("Please enter cover image url")
    }
    if(newData.major_exhibitor_image_url === ""){
      errorList.push("Please enter major exhibitor image url")
    }
  
    if(newData.category === ""){
      errorList.push("Please enter category")
    }
    
    if(newData.current === ""){
      errorList.push("Please enter current")
    }
    if(newData.status === ""){
      errorList.push("Please enter status")
    }
  
    
    if(errorList.length < 1){
      api.patch("/event/"+newData.id, newData)
      .then(res => {
        const dataUpdate = [...data];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        setData([...dataUpdate]);
        resolve()
        setIserror(false)
        setErrorMessages([])

      })
      .catch(error => {
        setErrorMessages(["Update failed! Server error"])
        setIserror(true)
        resolve()
        
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()

    }
    
  }

  const handleRowAdd = (newData, resolve) => {
    //validation
    let errorList = []
    /*if(newData.email === undefined || validateEmail(newData.email) === false){
      errorList.push("Please enter a valid email")
    }*/
    
    if(newData.name === undefined){
      errorList.push("Please enter name")
    }
    if(newData.short_description === undefined){
      errorList.push("Please enter short description")
    }
    if(newData.full_description === undefined){
      errorList.push("Please enter full description")
    }
    if(newData.start_at === undefined){
      errorList.push("Please enter start at")
    }
    if(newData.end_at === undefined){
      errorList.push("Please enter end at")
    }
    /*if(newData.small_logo_image_url === undefined){
      errorList.push("Please enter small logo url")
    }
    if(newData.big_logo_image_url === undefined){
      errorList.push("Please enter big logo url")
    }
    if(newData.icon_image_url === undefined){
      errorList.push("Please enter icon image url")
    }
    
    if(newData.intro_video_url === undefined){
      errorList.push("Please enter intro video url")
    }
    
    if(newData.major_exhibitor_image_url === undefined){
      errorList.push("Please enter major exhibitor image url")
    }
    
    if(newData.category === undefined){
      errorList.push("Please enter category")
    }
    
    if(newData.current === undefined){
      errorList.push("Please enter current")
    }
    if(newData.status === undefined){
      errorList.push("Please enter status")
    }
    */
    
    

    if(errorList.length < 1){ //no error
      api.post("event", newData)
      .then(res => {
        let dataToAdd = [...data];
        dataToAdd.push(newData);
        setData(dataToAdd);
        resolve()
        setErrorMessages([])
        setIserror(false)
      })
      .catch(error => {
        console.log(errorList)
        setErrorMessages(["Cannot add data. Server error!"])
        setIserror(true)
        resolve()
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }
  }

  const handleRowDelete = (oldData, resolve) => {
    
    api.delete("event"+oldData.id)
      .then(res => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        resolve()
      })
      .catch(error => {
        setErrorMessages(["Delete failed! Server error"])
        setIserror(true)
        resolve()
      })
  }


  return (
    <div className="test">
      
      <Grid container spacing={1}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
          <div>
            {iserror && 
              <Alert severity="error">
                  {errorMessages.map((msg, i) => {
                      return <div key={i}>{msg}</div>
                  })}
              </Alert>
            }       
          </div>
            <MaterialTable
              title="User data from remote source"
              columns={columns}
              data={data}
              icons={tableIcons}
              editable={{
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                      handleRowUpdate(newData, oldData, resolve);
                      
                  }),
                onRowAdd: (newData) =>
                  new Promise((resolve) => {
                    handleRowAdd(newData, resolve)
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    handleRowDelete(oldData, resolve)
                  }),
              }}
            />
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
    </div>
  );
}

export default test;