import React from "react";


function CheckBoxDom(props){
    console.log(props)
    return(
        <><input type='checkbox' value={props.val} />{props.val}<br></br></>
    )
}
export default CheckBoxDom;