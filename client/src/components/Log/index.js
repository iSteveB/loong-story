import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const Log = (props) => {
    const [signUpModal, setSignUpModal] = useState(props.signup);
    const [LoginModal, setLoginModal] = useState(props.login);

    const handleModals = (e) => {
        if (e.target.id === 'register') {
            setLoginModal(false);
            setSignUpModal(true);
        } else if (e.target.id === 'login') {
            setLoginModal(true);
            setSignUpModal(false);
        }
    };

    return (
        <div>
            <div className='connection-form'>
                <div className='form-container'>
                    <ul>
                        <li
                            id='register'
                            className={signUpModal ? 'active-btn' : null}
                            onClick={(e) => handleModals(e)}>
                            S'inscrire
                        </li>
                        <li
                            id='login'
                            className={LoginModal ? 'active-btn' : null}
                            onClick={(e) => handleModals(e)}>
                            Se connecter
                        </li>
                    </ul>
                    {signUpModal && <SignUpForm />}
                    {LoginModal && <LoginForm />}
                </div>
            </div>
        </div>
    );
};

export default Log;
