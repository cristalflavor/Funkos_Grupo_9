const path = require('path');

const { getOneUser } = require('../models/user.model');

module.exports = {
    post_login: async (req, res) => {
        const { login__email, login__password } = req.body;
        const isLogged = false;
        try {
          const user_founded = await getOneUser(login__email, login__password);
          
          if (user_founded!=null) {

            req.session.isLogged = true;
            res.render(path.resolve(__dirname, '../views/index_ejs.ejs'), {
              title: "Home",
              isLogged: req.session.isLogged
            });
          } else {
            res.render(path.resolve(__dirname, '../views/auth/login.ejs'), {
              title: "Login",
              errorMessage: "Credenciales inválidas"
            });
          }
        } catch (error) {
          // Manejar errores, por ejemplo, problemas de conexión a la base de datos
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
        res.render(path.resolve(__dirname, '../views/auth/register_success.ejs'),
        {
            title: "Success"
        })
    },
    logout: (req, res) => res.send('Esta es la ruta que desloguea o cierra la sesión del usuario')
}