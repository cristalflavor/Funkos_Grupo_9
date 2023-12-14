const { conn } = require('../config/conn');

const getAll = async () => {

    try{
        const data = await conn.query('SELECT * FROM produc;');

        return data;
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
    getAll
}