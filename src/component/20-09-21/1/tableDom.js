import React,{Component} from "react";

class TableDom extends Component {
        state = { 
            data : this.props.body,
            headers : this.props.headers
         }

    deleteEle = evt =>{
        let temp = this.state.data.findIndex( item => item.ProductId == evt.target.value);
        this.state.data.splice(temp,1)
        this.setState((prevState,prevProp)=>{
            console.log(prevState.data);
            return({data : prevState.data})
        })
    }
    sortOnThis = evt =>{
        this.setState((prevState,prevProp)=>{
            let temp = prevState.data
            console.log(evt.target.innerText)
            // prevState.data.sort((a,b)=>a[JSON.stringify(evt.target.innerHTML)] > b[JSON.stringify(evt.target.innerHTML)] ? 1 : -1)
            console.log(temp.sort((a,b)=>(a[evt.target.innerText] > b[evt.target.innerText]) ? 1 : -1))
            return({data:temp});
        })
    }
    render() { 
        return (
        <>
                <table className="table table-striped">
                    <thead>
                        {
                            this.props.headers.map((item,pos)=>{
                                return(
                                    <td>
                                       <a href = "#" onClick = {this.sortOnThis} value= {item} > {item}</a>
                                    </td>
                                )
                            })
                        }
                        <td>Delete</td>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((item,pos)=>{
                                return(<tr>
                                    {this.props.headers.map((it,po)=>{
                                        return(
                                            <td>{item[it]}</td>
                                        )
                                    }
                                    )}
                                    <button value={item['ProductId']} onClick={this.deleteEle}>Delete</button>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
        </>  
    );
    }
}
 
export default TableDom;