import React, { Component } from "react" 

class Table extends Component{
    constructor(){
        super();
        this.state={
            showButton:false
        }
    }
    handleMosueOver =()=>{
       
       this.setState({
           showButton:!this.state.showButton
       });
      
      }
      handleMouseOut=()=>{
        this.setState({
            showButton:!this.state.showButton
        });
      }
      handleRemoveTr=()=>{
          console.log("clickin for removing tr");
      }
    

    render(){
        return(
            <div> 
            <h1>Basic Table Styles</h1>

            
            <table data-table-theme="dark zebra">
              <caption>Dark</caption>
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                  <th>Column 4</th>
                  <th>Column 5</th>
                </tr>
              </thead>
              <tbody>
                
                <tr    onMouseOver={this.handleMosueOver} onMouseOut={this.handleMouseOut}
                 >
                  <td>Cell 11</td>
                  <td>Cell 12</td>
                  <td>Cell 13</td>
                  <td><button onClick={this.handleRemoveTr} style={{visibility: this.state.showButton ? 'visible' : 'hidden' }}> remove </button></td>
                  <td><button style={{visibility: this.state.showButton ? 'visible' : 'hidden' }}> edit</button></td>
                </tr>
              </tbody>
              
            </table></div>
        )
    }
}
export default Table;