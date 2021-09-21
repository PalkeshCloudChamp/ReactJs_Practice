// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import button from './component/button';

class App extends Component {
  res = ""
  state = {
  }

  updateRes = (evt) =>{
    this.setState((prevState , prevProp)=>{

      if(prevState.res === undefined)
      {
        prevState.res = ''
      }
      if(evt.target.innerHTML === 'C'){
        return {res : ''}
      }
      else if(evt.target.innerHTML == '&lt;'){
        return {res : prevState.res.slice(0,-1)}
      }
      else if(evt.target.innerHTML == '='){
        console.log(`Result : ${eval(prevState.res)}`)
        return {res : eval(prevState.res)}
      }
      
      else if(evt.target.innerHTML == 'X'){
        return {res : prevState.res + '*'}
      }
      else if(evt.target.innerHTML == 'tan')
      {
        return {res : Math.tan(eval(prevState.res)*Math.PI/180)}
      }
      else if(evt.target.innerHTML == 'sin')
      {
        return {res : Math.sin(eval(prevState.res)*Math.PI/180)}
      }
      else if(evt.target.innerHTML == 'cos')
      {
        return {res : Math.cos(eval(prevState.res)*Math.PI/180)}
      }
      return {res : prevState.res + evt.target.innerHTML }
    })
  }


  render(){
    return(
      <center className = 'Card'>
        <div><input type = 'text' value = {this.state.res} placeholder = 'Enter Value'></input><button onClick = {this.updateRes} className = 'cClass btn btn-danger'>C</button></div>
      <table>
        <tr><td><button  className="btn btn-primary"  onClick = {this.updateRes}>7</button></td><td><button  className="btn btn-primary"  onClick = {this.updateRes}>8</button></td><td><button  className="btn btn-primary"  onClick = {this.updateRes}>9</button></td><td><button  className="btn btn-primary"  onClick = {this.updateRes}>+</button></td></tr>
        <tr><td><button  className="btn btn-primary"  onClick = {this.updateRes}>4</button></td><td><button  className="btn btn-primary"  onClick = {this.updateRes}>5</button></td><td><button  className="btn btn-primary"  onClick = {this.updateRes}>6</button></td><td><button  className="btn btn-primary"  onClick = {this.updateRes}>-</button></td></tr>
        <tr><td><button  className="btn btn-primary"  onClick = {this.updateRes}>1</button></td><td><button  className="btn btn-primary"  onClick = {this.updateRes}>2</button></td><td><button  className="btn btn-primary"  onClick = {this.updateRes}>3</button></td><td><button  className="btn btn-primary"  onClick = {this.updateRes}>X</button></td></tr>
        <tr><td><button  className="btn btn-primary"  onClick = {this.updateRes}>=</button></td><td><button  className="btn btn-primary"  onClick = {this.updateRes}>0</button></td><td><button  className="btn btn-primary"  onClick = {this.updateRes}>.</button></td><td><button  className="btn btn-primary"  onClick = {this.updateRes}>/</button></td></tr>
        <tr><td><button  className="btn btn-success"  onClick = {this.updateRes}>sin</button></td><td><button  className="btn btn-success"  onClick = {this.updateRes}>cos</button></td><td><button  className="btn btn-success"  onClick = {this.updateRes}>tan</button></td><td><button  className="btn btn-warning"  onClick = {this.updateRes}>{'<'}</button></td></tr>
      </table>
      </center>
    )
  }
}

export default App;