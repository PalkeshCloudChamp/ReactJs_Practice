import React,{Component} from "react";
import TableDom from './tableDom'
// import BodyDom from "./bodyDom";
// import HeadersDom from "./headersDom";
import './App.css'
class App extends Component {
state = {
    headers : ['ProductId','ProductName','Manufacturer', 'Price'],
data : [
    {ProductId : 1 , ProductName : 'Product1' , Manufacturer : 'Manufacturer1' , Price : 10000},
    {ProductId : 2 , ProductName : 'Product2' , Manufacturer : 'Manufacturer2' , Price : 90000},
    {ProductId : 3 , ProductName : 'Product3' , Manufacturer : 'Manufacturer3' , Price : 70000},
    {ProductId : 4 , ProductName : 'Product4' , Manufacturer : 'Manufacturer4' , Price : 20000},
    {ProductId : 5 , ProductName : 'Product5' , Manufacturer : 'Manufacturer5' , Price : 40000},
    {ProductId : 6 , ProductName : 'Product6' , Manufacturer : 'Manufacturer6' , Price : 50000},
    {ProductId : 7 , ProductName : 'Product7' , Manufacturer : 'Manufacturer7' , Price : 80000},
    {ProductId : 8 , ProductName : 'Product8' , Manufacturer : 'Manufacturer8' , Price : 60000},
    {ProductId : 9 , ProductName : 'Product9' , Manufacturer : 'Manufacturer9' , Price : 30000},
    {ProductId : 10 , ProductName : 'Product10' , Manufacturer : 'Manufacturer10' , Price : 20000},
    
]
}
popTheElement=(ele)=>{
    console.log(parseInt(ele.target.id)+1)
}
render(){
    return(
        <div>
            <center>
                <TableDom headers = {this.state.headers} body={this.state.data}/>
            </center>
        </div>
    )
}
}
 
export default App;