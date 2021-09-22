import React,{Component} from "react";
import RadioDom from './reUsable'
import CheckBoxDom from "./reUsable2";
import './App.css'



class App extends Component {
    cont = [
        1,2,3,4,5,6,7
    ]
    render() { 
        return (
            <center>
                <h1>Radio Buttons</h1>
                <div>
                    <RadioDom name='rbName' val = {this.cont}/>
                </div>
                <h1>CheckBoxes</h1>
                <div>
                <CheckBoxDom name='rbName' val = {this.cont}/>
                </div>
            </center>
         );
    }
}
 
export default App;