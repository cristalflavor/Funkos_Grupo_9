const { conn } = require('../config/conn');

const getAll = async () => {

    try{
        const data = await conn.query('SELECT * FROM product;');

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

const getOne = async (id) => {

    try{
        const data = await conn.query('SELECT * FROM product WHERE product_id = ?;', [id]);

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
    getAll,
    getOne
}