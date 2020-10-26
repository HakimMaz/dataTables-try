import React, { Component } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import {Button} from "@material-ui/core"
export default class DataTable extends Component {

   constructor(props){
     super(props);
     this.state={
       item:[]
     }
   }
  
    render() {
        const actions =<button style={{height:"10px",backgroundColor:"red"}}>Add</button>
 
     
        const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'libelle', headerName: 'First name', width: 150 },
            { field: 'description', headerName: 'Last name', width: 200 }, 
            { field: <Button  variant="outlined" size="small" color="primary">
            Edit
        </Button>,
                 
                headerName: 'Action',
                 width: 200 },   
          ];
          
          const listItem=this.props.data.filter(d=>
            d.libelle.includes(this.props.filter)||
            d.description.includes(this.props.filter)||
            d.id.toString().includes(this.props.filter)
            )
        return (
            <div>
            <div style={{ height: 400, width: '70%' }}>
            <DataGrid rows={listItem} columns={columns} pageSize={5} checkboxSelection />
          </div>
            </div>
        )
    }
}
