import React, { Component } from 'react'
import { DataGrid } from '@material-ui/data-grid';
export default class DataTable extends Component {

   constructor(props){
     super(props);
     this.state={
       item:[]
     }
   }
  
    render() {
        const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'libelle', headerName: 'First name', width: 130 },
            { field: 'description', headerName: 'Last name', width: 130 },
            {
              field: 'age',
              headerName: 'Age',
              type: 'number',
              width: 90,
            },
            {
              field: 'fullName',
              headerName: 'Full name',
              description: 'This column has a value getter and is not sortable.',
              sortable: false,
              width: 160,
              valueGetter: (params) =>
                `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
            },
          ];
          
          const listItem=this.props.data.filter(d=>
            d.libelle.includes(this.props.filter)||
            d.description.includes(this.props.filter)
            )
        return (
            <div>
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={listItem} columns={columns} pageSize={5} checkboxSelection />
          </div>
            </div>
        )
    }
}
