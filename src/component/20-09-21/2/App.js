import React,{Component} from "react";
import DD from "./dropDown";
import './App.css'
class App extends Component {

        state = {
            selectOptions : [
                'A','B','C','D','E','G'
            ],
            res : []
        }
    render() {
        return (
            <center>
                <DD val={this.state.selectOptions}/ >
            <br/>
            </center>
        )
    }
}
 
export default App;