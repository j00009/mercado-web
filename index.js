const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path');
const app = express()

app.use(express.static('static'))
app.set("view engine", "handlebars")

app.engine(
    "handlebars",
    exphbs.engine()
)

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/popper', express.static(path.join(__dirname, 'node_modules/@popperjs/core/dist/umd')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get("/", (req, res) =>{
    res.render("home",
        {
        productos: ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomates"]
    });
})

app.listen(3000, ()=>{
    console.log("servidor corriendo en el puerto 3000")


})
