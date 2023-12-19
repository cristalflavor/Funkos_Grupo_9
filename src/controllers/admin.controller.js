const path = require('path');
const { getAll, getOne, getAllWithCategory, getAllMulti, setOne } = require('../models/product.model');
const { getOneLicence, getOneLicenceIdByLicenceName } = require('../models/licence.model');
const { getAllCategoryName, getOneCategoryIdByCategoryName } = require('../models/category.model');

module.exports = {
    admin: (req, res) => {
        const prodRows = "";
        res.render(path.resolve(__dirname, '../views/admin/admin.ejs'),
        {
            title: 'Item',
            prodRows
        }
        )
    },
    create: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/create.ejs'))
    },
    post_create: (req, res) => res.send('Esta es la vista para agregar un nuevo item'),
    edit: async (req, res) => {
        const { id } = req.params;

        const [prodRows] = await getOne(id);

        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'),
        {
            title: 'Edit Item',
            prodRows
        }
        )
    },
    put_edit: async (req, res) => {

        function obtenerFechaFormateada() {
            const fecha = new Date();
            
            const year = fecha.getFullYear();
            const month = (fecha.getMonth() + 1).toString().padStart(2, '0');
            const day = fecha.getDate().toString().padStart(2, '0');
            const hours = fecha.getHours().toString().padStart(2, '0');
            const minutes = fecha.getMinutes().toString().padStart(2, '0');
            const seconds = fecha.getSeconds().toString().padStart(2, '0');
          
            const fechaFormateada = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            
            return fechaFormateada;
          }
        const { id } = req.params;
        const [prodRows] = await getOne(id);

        const category_name = req.body.collection[0];

        const licence_name = req.body.collection[1];
        const [licence_id] = await getOneLicenceIdByLicenceName(licence_name);

        const product_name = req.body.name;
        const product_description = req.body.description;
        const product_price = 1800; //req.body.price;
        const stock = req.body.stock;
        const sku = req.body.sku;
        const discount = 10;
        const dues = 3;
        
        const originalRoute = req.files.file1[0].path;
        const changedRoute = originalRoute.replace(/\\/g, '/'); // Reemplazar las barras diagonales inversas
        const finalRoute = changedRoute.replace(/.*\/img/, '/img');
        
        const img_front = finalRoute + req.files.file1[0].filename;
        const img_back = finalRoute + req.files.file2[0].filename;
        const create_time = obtenerFechaFormateada();
        const [category_id] = await getOneCategoryIdByCategoryName(category_name);

        //console.log(id, product_name, product_description, product_price, stock, sku, discount, dues, img_front, img_back, create_time, category_id.category_id, licence_id.licence_id);
        await setOne(id, product_name, product_description, product_price, stock, sku, discount, dues, img_front, img_back, create_time, category_id.category_id, licence_id.licence_id);
        console.log("PRODUCTO MODIFICADO EXITOSAMENTE");
        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'),
        {
            title: 'Edit Item',
            prodRows
        }
        )
    },
    delete_it: (req, res) => res.send('Esta es la vista para eliminar un item específico'),
    search: async (req, res) => {
        const { search } = req.params;

        const [category_result] = await getAllCategoryName(search);

        if(category_result.error){
            res.render(path.resolve(__dirname, '../views/error/error.ejs'),
            {
                title: 'Error',
                error: true,
                message: 'Estamos experimentando inconvenientes técnicos',
                message2: 'Prueba más tarde, por favor!'
            }
            )
        }else{
            if(category_result != ""){

                const category_id = category_result[0].category_id;

                const prod = await getAllWithCategory(category_id);
                const [prodRows] = Array.isArray(prod) ? prod : [prod];

                res.render(path.resolve(__dirname, '../views/admin/admin.ejs'),
                {
                    title: 'Item',
                    prodRows
                }
                )
            }else{
                const prod = await getAllMulti(search);
                
                const [prodRows] = Array.isArray(prod) ? prod : [prod];

                res.render(path.resolve(__dirname, '../views/admin/admin.ejs'),
                {
                    title: 'Item',
                    prodRows
                }
                )
            }
        }
        
    }
}