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
                    {
                        this.cont.map((item,pos)=>{
                            return (
                                <RadioDom key = {pos} name='rbName' val = {item}/>
                            )
                        })
                    }
                </div>
                <h1>CheckBoxes</h1>
                <div>
                    {
                        this.cont.map((item,pos)=>{
                            // console.log(item)
                            return (
                                <CheckBoxDom key = {pos} name='rbName' val = {item}/>
                            )
                        })
                        
                    }
                </div>
            </center>
         );
    }
}
 
export default App;