import React, { Component } from "react";

class DD extends Component{ 
    state = {
        res : []
    }
    updateDiv = (evt) =>{
        let temp = []
        for (var option of document.getElementById('mSel').options)
        {
            if (option.selected) {
                temp.push(option.value);
            }
        }
        this.setState((prevState , prevProp)=>{
            return ({res : temp});
        })
    }
    render(){   
        // console.log(this.props.val)
        return (
            <div>
            <select multiple='multiple' id = 'mSel' onChange = {this.updateDiv.bind(this)}>
                {
                this.props.val.map((item,pos)=>{
                    return (<option value = {item}>{item}</option>)
                })
                }
            </select>
            {this.state.res.length > 0 ? <div>Selected Items:- {JSON.stringify(this.state.res)} </div>: null}
            </div>
        )
    }
}
export default DD;