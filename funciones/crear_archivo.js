const fs = require('fs');
var colors = require('colors');

let getData = async (base, limite = 10) => {
    let data = '';

    for (let index = 1; index <= limite; index++) {
        data += `${base} * ${index} = ${base * index}\n`;
    }

    return data;
}

let crearArchivo = (base, limite = 10) => {

    return new Promise(async (res, rej) => {
        if(!Number(base)){
            rej('Base no es un Número');
            return;
        }
    
        if(!Number(limite)){
            rej('Limite no es un Número');
            return;
        }

        let data = await getData(base, limite);
        
        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
          if (err) 
            rej(err);
          else
            res(`tabla-${base}.txt`);
        });
    });
    
};

let listarArchivo = (base, limite = 10) => {

    return new Promise( async (res, rej) => {

        if(!Number(base)){
            rej('Base no es un Número');
            return;
        }

        if(!Number(limite)){
            rej('Limite no es un Número');
            return;
        }
        let data = await getData(base, limite);
        
        res(data);
    });
    
};



module.exports = {
    crearArchivo,
    listarArchivo
};