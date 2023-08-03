const db = require('./app/models')
const userController = require('./app/controllers/user.controller')
const bootcampController = require('./app/controllers/bootcamp.controller')

const express = require('express');
const bodyParser = require('body-parser')
const PORT = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

const bootcampRouter = require("./app/routes/bootcamp.routes");
const userRouter = require("./app/routes/user.routes");

app.use("/api", bootcampRouter);
app.use("/api", userRouter);


db.sequelize.sync({
    force: true
}).then(()=>{
    console.log('Eliminando y resincronizando la base de datos');
    app.listen(PORT, () =>{
        console.log(`La API se esta ejecutando en: http://localhost:${PORT}`);
    })
})