const path = require('path');
const { getAll, getOne, getAllWithCategory, getAllMulti } = require('../models/product.model');
const { getAllLicence, getOneLicence } = require('../models/licence.model');
const { getAllCategory, getOneCategory, getAllCategoryName } = require('../models/category.model');

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
    edit: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'))
    },
    put_edit: (req, res) => res.send('Esta es la vista para impactar la modificación'),
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
                console.log(prodRows);
                res.render(path.resolve(__dirname, '../views/admin/admin.ejs'),
                {
                    title: 'Item',
                    prodRows
                }
                )
            }
        }




        /*if(!isNaN(search.charAt(0))){

            const prod = await getOne(search);


            if(prod.error){
                res.render(path.resolve(__dirname, '../views/error/error.ejs'),
                {
                    title: 'Error',
                    error: true,
                    message: 'Estamos experimentando inconvenientes técnicos',
                    message2: 'Prueba más tarde, por favor!'
                }
                )
            }else{
                const prodRows = Array.isArray(prod) ? prod : [prod];

                const category_id = prodRows.category_id;
                
                const cat = await getOneCategory(category_id);
                const [catRows] = cat;

                const categoryPromises = prodRows.map(async (product) => {
                    const category_id = product.category_id;
                    const cat = await getOneCategory(category_id);
                    const [catRows] = cat;
                    return { ...product, catRows };
                });

                const prodFiller = await Promise.all(categoryPromises);
                console.log(prodFiller);
                res.render(path.resolve(__dirname, '../views/admin/admin.ejs'),
                {
                    title: 'Item',
                    prodRows,
                    prodFiller
                }
            )
            }
            }else{
                console.log("No es un número");
            }*/
        
    }
}