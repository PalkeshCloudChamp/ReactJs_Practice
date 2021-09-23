import React,{Component} from "react";

class TableDom extends Component {
        state = { 
            data : this.props.body,
            headers : this.props.headers,
            selectedId : "",
            selectedName : "",
            selectedManu: "",
            selectedPrice : ""
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

    getValues = (items) =>{
        this.setState({selectedId : items.ProductId})
        this.setState({selectedName : items.ProductName})
        this.setState({selectedManu : items.Manufacturer})
        this.setState({selectedPrice : items.Price})
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
                                return(<tr onClick={()=>this.getValues(item)}>
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
                <div className="container" style={{textAlign :'left'}}>
                        Id : - {this.state.selectedId}<br/>
                        Name : - {this.state.selectedName}<br/>
                        Manufacturer : - {this.state.selectedManu}<br/>
                        Price : - {this.state.selectedPrice}<br/>
                </div>
        </>  
    );
    }
}
 
export default TableDom;