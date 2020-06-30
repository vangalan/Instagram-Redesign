import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './create.css';

const CreateProfile = props => {
    const [formData, setFormData] = useState ({
        bio:'',
        recFile: null,
        location:'',
        hobbies: '',
        music:'',
        food:'',
        martial:''
    });
    const {
        bio,
        recFile,
        location,
        hobbies,
        music,
        food,
        martial
    } = formData;

    return (
        <section className="create-profile">
            <h1> Create Your Profile</h1>
            
        </section>
    )
};
export default CreateProfile