import React,{Component} from "react";

class TableDom extends Component {
        state = { 
            data : this.props.body,
            dataCopy : this.props.body,
            headers : this.props.headers,
            selectedId : "",
            selectedName : "",
            selectedManu: "",
            selectedPrice : "",
            pagingArr : ['1'],
            pageSize : this.props.body.length,
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

updatePagingArr = evt =>{
    let temp = []
    
    for(let i =1 ; i <= Math.ceil(this.state.dataCopy.length/evt.target.value) ; i++)
    {
        temp.push(i)
    }
    this.setState({pagingArr : temp,pageSize : evt.target.value});
}

changeDataValue = evt =>{
    // evt.target.innerText
    let temp = []
    let strInd = (parseInt(evt.target.innerText) - 1)*(parseInt(this.state.pageSize))
    console.log(parseInt(this.state.pageSize))
    for(let i =  strInd; i <strInd + parseInt(this.state.pageSize);i++ ){
        if(this.state.dataCopy[i] === undefined)
        {
            break
        }
        temp.push(this.state.dataCopy[i])
    }
    console.log(temp);  
    this.setState({data : temp});
}
    render() { 
        return (
        <>
        <div>
            {/* Pagination Block */}
            Enter the number of Rows in one Page:- 
            <input type='number' placeholder='Enter table size' min='1' max = {this.state.dataCopy.length} onChange={this.updatePagingArr}></input><br/>
            {
                this.state.pagingArr.map((item,pos)=>{
                    
                    return(<li style={{display:"inline-block"}}><ul className='pagination' style={{display:"inline-block",padding : "10px"}}><a href="#" style={{display:"inline-block"}} className="page-item" onClick={this.changeDataValue}>  {item}   </a></ul></li>)
                    })
                
                }
            
        </div>
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