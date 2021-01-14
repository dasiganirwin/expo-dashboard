import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import UserService from "../services/user.service";
import postServices from "../services/post.services";

const DashboardTable = props => {
  const [gridData, setGridData] = useState({
    data: props.data,
    columns: props.col,
    resolve: () => {},
    updatedAt: new Date()
  });

  useEffect(() => {
    gridData.resolve();
    console.log("RESOLVE AT:", gridData.updatedAt);
  }, [gridData]);

  const onRowAdd = newData =>
    new Promise((resolve, reject) => {
      const data = [...gridData.data];
      data.push(newData);
      const updatedAt = new Date();
      setGridData({ ...gridData, data, updatedAt, resolve });
    });

  const onRowUpdate = (newData, oldData, resolve) =>
  postServices.updateEvent()
  .then(res => {
    let dataToAdd = [...gridData];
    dataToAdd.push(newData);
    gridData(dataToAdd);
    resolve()
   
    });

  const onRowDelete = oldData =>
    new Promise((resolve, reject) => {
      let data = [...gridData.data];
      const index = data.indexOf(oldData);
      data.splice(index, 1);
      const updatedAt = new Date();
      setGridData({ ...gridData, data, updatedAt, resolve });
    });

  return (
    <>
    {
      console.log(props.data)
    }
    
      <MaterialTable
        title="Exhibitor"
        columns={gridData.columns}
        data={props.data}
        editable={{
          isEditable: rowData => true,
          isDeletable: rowData => true,
          onRowAdd: onRowAdd,
          onRowUpdate: onRowUpdate,
          onRowDelete: onRowDelete
        }}
      />
    </>
  );
};

export default DashboardTable;
