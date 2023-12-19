const path = require('path');

const { getOneUser, setOneUser } = require('../models/user.model');

module.exports = {
    post_login: async (req, res) => {
        const { login__email, login__password } = req.body;
        const isLogged = false;
        try {
          const [user_founded] = await getOneUser(login__email, login__password);
          console.log(user_founded);
          if (user_founded !== undefined) {

            req.session.isLogged = true;
            res.redirect('/home');

          } else {
            res.render(path.resolve(__dirname, '../views/auth/login.ejs'), {
              title: "Login",
              errorMessage: "Credenciales inválidas",
              isLogged: req.session.isLogged = false
            });
          }
        } catch (error) {
          console.error(error);
          res.status(500).send("Error interno del servidor");
        }
    },
    login: (req, res) => {
      const isLogged = req.session.isLogged;

      if(req.session.isLogged === undefined){
        req.session.isLogged = false;
      }
      res.render(path.resolve(__dirname, '../views/auth/login.ejs'), {
        title: "Login",
        isLogged
      });
    },
    register: (req, res) => {

        res.render(path.resolve(__dirname, '../views/auth/register.ejs'))
    },
    post_register: (req, res) => {
        const isLogged = false;
        const { register__name, register__lastname, register__email, register__password } = req.body;
        
        const fechaActual = new Date();

        const anyo = fechaActual.getFullYear();
        const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
        const dia = String(fechaActual.getDate()).padStart(2, '0');
        const hora = String(fechaActual.getHours()).padStart(2, '0');
        const minutos = String(fechaActual.getMinutes()).padStart(2, '0');
        const segundos = String(fechaActual.getSeconds()).padStart(2, '0');

        const register__time = `${anyo}-${mes}-${dia}T${hora}:${minutos}:${segundos}`;
        setOneUser(register__name, register__lastname, register__email, register__password, register__time);
        console.log(register__name, register__lastname, register__email, register__password, register__time );
        if(req.session.isLogged === undefined){
          req.session.isLogged = false;
        }
        res.render(path.resolve(__dirname, '../views/auth/register_success.ejs'),
        {
            title: "Success",
            isLogged
        })
    },
    logout: (req, res) => res.send('Esta es la ruta que desloguea o cierra la sesión del usuario')
}