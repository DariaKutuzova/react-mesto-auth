// import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import * as auth from '../auth.js';
// import './styles/Login.css';
// import Register from "./Register";
//
import SignPopup from "./SignPopup";
import {useState} from "react";

function Login({isOpen, onClose}) {

    const [inputValues, setInputValues] = useState({email: '', password: ''});

    function handleSubmit(e) {

        e.preventDefault();
    }


    return (
        <SignPopup
            name={'login'}
            title={'Вход'}
            isOpen={isOpen}
            onClose={onClose}
            buttonText={'Войти'}
            onSubmit={handleSubmit}
        >
            <input type="email" placeholder="Email" className={`popup__input popup__input_value_name sign__input`}
                   id="name-input" name="email" minLength="2" maxLength="40" required value={inputValues.name}/>
            <span id="name-input-error" className="popup__input-error popup__input-error_active sign__input-error"/>
            <input type="password" placeholder="Пароль"
                   className={`popup__input popup__input_value_job sign__input`}
                   id="job-input" name="password" minLength="2" maxLength="200" required value={inputValues.email}/>
            <span id="job-input-error" className="popup__input-error popup__input-error_active sign__input-error"/>
        </SignPopup>
    );
}


export default Login;