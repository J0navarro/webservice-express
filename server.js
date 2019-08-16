const express = require('express')
const app = express();

const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Jose Antonio'
    });
})
app.get('/about', (req, res) => {

    res.render('about', {
        img: '../assets/img/po.jpg',
        nomImg: 'Kunfu Panda'
    });
})


app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
})