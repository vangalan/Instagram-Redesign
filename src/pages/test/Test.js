import React, { Component } from 'react';

export default  class testForms extends Component{
    constructor(props){
        super(props);


    }
    render() {
        return (
            <div>
                <form>
                    <input type="text"  name='userName' placeholder="Full Name"/>
                    
                </form>
            </div>
        )
    }
}