import React, { Component } from 'react';


import './test.css'
export default class LoginTest extends Component{
    constructor(props){
        super(props);
        this.state = {
                password:"",
                username:""
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler =  this.submitHandler.bind(this);
    }
    changeHandler(e){
        this.setState({   [e.target.name]: e.target.value    });
    }

    async submitHandler(e){
        e.preventDefault();
       console.log('Success')
    };
   

    render() {
        const {name, email, password, phone, username} = this.state;
        return (
            <div className="test" onSubmit={this.submitHandler}>
                <form>
                   <input type="text" id="username" value={username}  name="username" placeholder="Enter Username"  onChange={this.changeHandler} required/>
                   <input type="password" id="password" value={password} name="password" placeholder="Enter Password"  onChange={this.changeHandler} required/>
                   <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}