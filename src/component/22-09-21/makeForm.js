import React, { Component } from "react";

class MakeForm extends Component {

    state = {
        name: '',
        nameErrorVisi: false,
        email: '',
        emailerrorVisi: false,
        password: '',
        passerrorVisi: false,
    }

    validateUserName = evt => {
        this.setState((prevState, prevProp) => {
            console.log(prevState.name.length)
            if (prevState.name.length < 4) {
                return ({
                    nameErrorVisi: true,
                    name: evt.target.value
                })
            }
            else {
                return ({
                    nameErrorVisi: false,
                    name: evt.target.value
                })
            }
        })
    }

    ValidateEmail = evt => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (evt.target.value.match(mailformat)) {
            this.setState((prevState, prevProp) => {
                return ({
                    email: evt.target.value,
                    emailerrorVisi: false
                })
            });
        }
        else {
            this.setState((prevState, prevProp) => {
                return ({
                    email: evt.target.value,
                    emailerrorVisi: true
                })
            });
        }
    }


    ValidatePassword = evt => {
        var passformat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if (evt.target.value.match(passformat)) {
            this.setState((prevState, prevProp) => {
                return ({
                    password: evt.target.value,
                    passerrorVisi: false
                })
            });
        }
        else {
            this.setState((prevState, prevProp) => {
                return ({
                    password: evt.target.value,
                    passerrorVisi: true
                })
            });
        }
    }



    render() {
        return (<>
            <div className="container card mt-5">
                <form className='card-body'>
                    <div className='form-group mb-3'>
                        <label>UserName*</label><br></br>
                        <input type='text' placeholder="Enter value" onChange={this.validateUserName} value={this.state.name} required /><br></br>
                        <div className="text-danger">{this.state.nameErrorVisi ? <>Minimum size of Name (5)</> : null}</div>
                        <label>Email*</label><br></br>
                        <input type='email' placeholder="Enter value" onChange={this.ValidateEmail} required /><br></br>
                        <div className="text-danger">{this.state.emailerrorVisi ? <>Write Correct Email Address.</> : null}</div>
                        <label>Password*</label><br></br>
                        <input type='password' placeholder="Enter value" onChange={this.ValidatePassword} className = "form-control pwd"required /><br></br>
                        <div className="text-danger">{this.state.passerrorVisi ? <>Make a Strong Password</> : null}</div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>)
    }
}
export { MakeForm }