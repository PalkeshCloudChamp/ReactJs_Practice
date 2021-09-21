import React,{Component} from "react";
import DD from "./dropDown";
import './App.css'
class App extends Component {
        selectOptions = [
            'A','B','C','D','E'
        ]

        showPopUp=()=>{
            let test = []
            for(let v of document.getElementById('mSel').options)
            {
                if(v.selected)
                {
                    test.push(v.innerHTML);
                }
            }
            alert(`Selected Options:- ${test}`)
        }

    render() {
        return (
            <center>
            <select className = 'mdb-select md-form custom-select' id='mSel' multiple>
            {this.selectOptions.map((item,pos)=>{
                return (<DD val={item} key = {item}/ >)
            })}
            </select>
            <br/>
            <button className='btn btn-primary' onClick = {this.showPopUp}>Submit</button>
            </center>
        )
    }
}
 
export default App;