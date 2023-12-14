const path = require('path');

module.exports = {
    login: (req, res) => {
        res.render(path.resolve(__dirname, '../views/auth/login.ejs'))
    },
    post_login: (req, res) => {
        const { user, password } = req.body;
        res.send('Solicitud de login\nUser: ' + user + '\nPassword: ' + password);
    },
    register: (req, res) => {
        res.render(path.resolve(__dirname, '../views/auth/register.ejs'))
    },
    post_register: (req, res) => res.send('Esta es la vista que crea un nuevo usuario'),
    logout: (req, res) => res.send('Esta es la ruta que desloguea o cierra la sesión del usuario')
}