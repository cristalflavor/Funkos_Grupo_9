module.exports = {
    home: (req, res) => {
        res.render('index_ejs', {
        title: 'Home'
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