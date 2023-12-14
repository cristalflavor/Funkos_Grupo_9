const { conn } = require('../config/conn');

const getAllLicence = async () => {

    try{
        const data = await conn.query('SELECT * FROM licence;');

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

const getOneLicence = async (id) => {

    try{
        const data = await conn.query('SELECT * FROM licence WHERE licence_id = ?;', [id]);

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
    getAllLicence,
    getOneLicence
}