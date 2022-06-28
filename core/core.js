const express = require('express');
var cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // Conectar a base de datos
        this.conectarDB();
        
        //Middleware
        this.middleware();

        // Rutas de mi aplicacion 
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middleware(){

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){

        //this.app.use( this.apiPath, require('../routes/usuarios'));
        this.app.use( '/api/v1', require('../routes/usuarios.routes'));

        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto',this.port);
        });
    }

}

module.exports = Server;