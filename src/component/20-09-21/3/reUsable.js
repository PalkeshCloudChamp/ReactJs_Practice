import React from "react";

function RadioDom(props){
    // console.log(props)
    return(
        <><input type='radio' name={props.name} value={props.val} />{props.val}<br></br></>
    )
}

export default RadioDom