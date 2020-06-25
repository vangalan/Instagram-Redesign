import React, { Component } from 'react';
import axios from 'axios';
import './test.css'

export default class TestForm extends Component{
    constructor(props){
        super(props);
        this.state = {
                name:"",
                email:"",
                password:"",
                phone:"",
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
        if(this.state.phone.includes('-')){
            console.log('Phone Inlcude - Need to be filtered')
        } else{
            const {name, email, phone, username, password} = this.state;
            console.log(this.state);
            const newUser = {
                name,
                email,
                password,
                phone,
                username
            }

            try{
                const config = {
                    headers: {
                        'Content-Type': "application/json"
                    }
                };
                const body = JSON.stringify(newUser);

                const response = await axios.post('api/users',body,config);
                console.log(response.data.token);

            } catch(err){
                console.error(err.response.data);
            }


        }
    }
   

    render() {
        const {name, email, password, phone, username} = this.state;
        return (
            <div className="test" onSubmit={this.submitHandler}>
                <form>
                   <input type="text"  id='name' name="name" value={name} placeholder="Enter Full Name" onChange={this.changeHandler} required/>
                   <input type="tel" id="phone" name="phone" value={phone}  placeholder="123-451-6781"  required  onChange={this.changeHandler}/>
                   <input type="email" id='email' name="email" value={email} placeholder="Enter Email"  onChange={this.changeHandler} required/>
                   <input type="text" id="username" value={username}  name="username" placeholder="Enter Username"  onChange={this.changeHandler} required/>
                   <input type="password" id="password" value={password} name="password" placeholder="Enter Password"  onChange={this.changeHandler} required/>
                   <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}