const express = require('express');
const app = express();
const PORT = 3000;

const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
    layoutsDir: `${__dirname}/views/layouts`
}))

app.use(express.static('public'));

app.get('/',(req, res) => {
    res.render('main', {layouts: 'index'});
})

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});