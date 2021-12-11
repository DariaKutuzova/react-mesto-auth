// import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import * as auth from '../auth.js';
import {useState} from "react";
import SignPopup from "./SignPopup";



function Register({isOpen, onClose}) {

    const linkToEntry = (
        <p
            className="sign__description"
        >
            Уже зарегистрированы? <Link className="sign__link" to="/sign-in">Войти</Link>
        </p>
    )

    const [inputValues, setInputValues] = useState({email: '', password: ''});

    function handleSubmit(e) {

        e.preventDefault();
    }


    return (
        <SignPopup
            name={'login'}
            title={'Регистрация'}
            isOpen={isOpen}
            onClose={onClose}
            buttonText={'Зарегистрироваться'}
            onSubmit={handleSubmit}
            linkToEntry={linkToEntry}
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


export default Register;