const db = require('../db/database');
const express = require('express');
const usersRouter = require('./routers/usersRouter.js');

const port = 8080;
const app = express();

(async()=>{
    //CONECTA CON LA BASE DE DATOS
    const successConnDb = await db.getDb();
    //SOLO INICIA LA PAGINA SI CONECTA CON LA BASE DE DATOS
    if(successConnDb){
        //SETEA LA CARPETA DE ASSETS
        app.use('/assets', express.static('public/assets'));
        app.use('/public', express.static('public/assets'));

        //URL DE HOME
        app.get('/', (req, res)=>{
            res.sendFile("index.html", {root: './public/'});
        });

        //SETEA ROUTERS
        app.use('/user' , usersRouter);

        //ABRE PUERTO
        app.listen(8080, () => console.log('API started on port 5000'));
    }
})();



