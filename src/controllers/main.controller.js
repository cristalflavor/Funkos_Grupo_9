module.exports = {
    home: (req, res) => {
        const isLogged = req.session.isLogged;

        if(req.session.isLogged === undefined){
            req.session.isLogged = false;
        }

        res.render('index_ejs', {
        title: 'Home',
        isLogged: isLogged
        }
    )},
    contact: (req, res) => {
        res.render()
    },
    about: (req, res) => {
        res.render()
    },
    faqs: (req, res) => {
        res.render()
    }
};