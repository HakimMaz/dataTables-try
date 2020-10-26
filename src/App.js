import React,{Component} from 'react';
import DataTable from "./component/datatable";
import "./css/table.css"

export default class App extends Component {
  constructor(){
    super();
    this.state={
      filter:'',
      item:[]
    }
  }
  handleChangeInputFilter(e){
    this.setState({filter:e.currentTarget.value});
    console.log("key word--------",this.state.filter);
    
  }
  componentWillMount(){
    fetch('http://localhost:4000/api/v1/reference/get_all_references')
    .then(response => response.json())
    .then(json =>this.setState({item:json}));
   
   }
  render(){
  return (
    <div className="App">
    <label >Search Field</label>
      <input 
      type="text" placeholder="enter your key word" 
      style={{marginBottom:"20px"}}
      onChange={(e)=>this.handleChangeInputFilter(e)}
      value={this.state.filter}/>
     <DataTable filter={this.state.filter} data={this.state.item}/>
    </div>
  );
  }
}


