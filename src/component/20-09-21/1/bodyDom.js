import React from "react";

function BodyDom(props){
    return(<>
            <td>{props.val['ProductId']}</td>
            <td>{props.val['ProductName']}</td>
            <td>{props.val['Manufacturer']}</td>
            <td>{props.val['Price']}</td>
            </>
    )
}
export default BodyDom;