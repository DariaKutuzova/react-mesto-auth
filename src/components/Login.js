// import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import * as auth from '../auth.js';
// import './styles/Login.css';
// import Register from "./Register";
//
import PopupWithForm from "./PopupWithForm";



function Login({isOpen, onClose}) {

    function handleSubmit(e) {

        e.preventDefault();
    }


    return (
        <PopupWithForm
            name={'infoTooltip'}
            title={''}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >

        </PopupWithForm>
    );
}


export default Login;