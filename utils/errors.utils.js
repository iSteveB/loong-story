module.exports.signUpErrors = (err) => {
    let errors = { pseudo: '', email: '', password: '' };

    if (err.message.includes('pseudo'))
        errors.pseudo = 'Pseudo incorrect ou déjà pris';

    if (err.message.includes('email')) errors.email = 'Email incorrect';

    if (err.message.includes('password'))
        errors.password = 'Le mot de passe doit faire 6 caractères ou plus';

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
        errors.pseudo = 'Ce pseudo est déjà enregistré !';

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
        errors.email = 'Cet email est déjà enregistré !';

    return errors;
};

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: '' };

    if (err.message.includes('email'))
        errors.email = "L'adresse email est incorrect !";

    if (err.message.includes('password'))
        errors.password = 'Le mot de passe est incorrect !';

    return errors;
};

module.exports.uploadErrors = (err) => {
    let errors = { format: '', maxSize: '' };

    if (err = ('fichier incompatible'))
        errors.format = 'Le fichier doit être au format png, jpg ou jpeg et faire moins de 5 Mo';

    if (err.code = ('LIMIT_FILE_SIZE'))
        errors.maxSize = 'Le fichier ne doit pas faire plus de 500ko';

    return errors;
};
