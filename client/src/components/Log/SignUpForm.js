import axios from 'axios';
import { useState } from 'react';

const SignUpForm = () => {
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ctrlPassword, setCtrlPassword] = useState('');

    const handleRegister = async (e) => {

    }

    return (
        <form action="" onSubmit={handleRegister} id="sign-up-form">
            <label htmlFor="pseudo">Pseudo</label>
            <br />
            <input type="text" name='pseudo' id='pseudo' onChange={(e)=>{setPseudo(e.target.value)}} value={pseudo}/>
            <div className="pseudo error"></div>
            <br />

            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
            <div className="email error"></div>
            <br />

            <label htmlFor="password">Mot de passe</label>
            <br />
            <input type="password" name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
            <div className="password error"></div>
            <br />

            <label htmlFor="password-conf">Confirmer le mot de passe</label>
            <br />
            <input type="password" name='password-conf' id='password-conf' onChange={(e)=>{setCtrlPassword(e.target.value)}} value={ctrlPassword}/>
            <div className="password-confirm error"></div>
            <br />
            <input type="checkbox" name="" id="terms" />
            <label htmlFor="terms">J'accepte les <a href="/" target="_blank" rel="noopener noreferrer">conditions générales d'utilisations</a></label>
            <input type="submit" value="S'incrire" />
        </form>
    );
};

export default SignUpForm;
