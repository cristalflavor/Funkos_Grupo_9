const { conn } = require('../config/conn');

const getOneUser = async (email, pass) => {

    try{
        const data = await conn.query('SELECT * FROM user WHERE email = ? AND password = ?;', [email, pass]);
        console.log(email + " " + pass);
        return data[0];
    }catch(error){
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        }
    }finally{
        conn.releaseConnection();
    }
}

setOneUser = async (name, lastname, email, pass, time) => {
    try{
        const data = await conn.query('INSERT INTO user (name, lastname, email, password, create_time) VALUES(?, ?, ?, ?, ?);', [name, lastname, email, pass, time]);
        console.log("ACAAAAAAAAAA");
        console.log(data[0]);
        return data[0];
    }catch(error){
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        }
    }finally{
        conn.releaseConnection();
    }
}

module.exports = {
    getOneUser,
    setOneUser
}