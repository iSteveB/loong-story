import { useState } from 'react';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';

const Log = ( props ) => {
    const [logInModal, setLogInModal] = useState(props.logIn);
    const [signUpModal, setSignUpModal] = useState(props.signUp);

    const handleModals = (e) => {
        if (e.target.id === 'register') {
            setLogInModal(false);
            setSignUpModal(true);
        } else if (e.target.id === 'login') {
            setLogInModal(true);
            setSignUpModal(false);
        }
    };

    return (
        <div className='connection-form'>
            <div className='form-container'>
                <ul>
                    <li
                        id='register'
                        className={signUpModal ? 'active-btn' : null}
                        onClick={ handleModals }>
                        S'inscrire
                    </li>
                    <li
                        id='login'
                        className={logInModal ? 'active-btn' : null}
                        onClick={handleModals}>
                        Se connecter
                    </li>
                </ul>
                {signUpModal && <SignUpForm />}
                {logInModal && <LogInForm />}
            </div>
        </div>
    );
};

export default Log;
