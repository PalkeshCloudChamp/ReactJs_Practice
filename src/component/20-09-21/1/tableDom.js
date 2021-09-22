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
    render() { 
        return (
        <>
                <table className="table table-striped">
                    <thead>
                        {
                            this.props.headers.map((item,pos)=>{
                                return(
                                    <td>
                                        {item}
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