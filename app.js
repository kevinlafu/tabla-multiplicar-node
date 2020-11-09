
const argumentos = require('./config/yargs').argumentos;
var colors = require('colors');
const { crearArchivo, listarArchivo } = require('./funciones/crear_archivo');

// console.log(argumentos.limite);

let comando = argumentos._[0]; //Selecciona sólo el primer argumento
let base = argumentos.base;
let limite = argumentos.limite;

switch (comando) {
    case 'listar':
        listarArchivo(base, limite)
            .then((data) => console.log(data))
            .catch((err)=> console.log(err))
        break;
    
    case 'crear':
        crearArchivo(base, limite)
            .then((nombre_archivo) => console.log(`Archivo creado:`, nombre_archivo.green))
            .catch((err)=> console.log(err))
        break;

    default:
        console.log('Comando no reconocido');
        break;
}


