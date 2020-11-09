//Con parámetro --base=10 --limite=10, etc
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};
const argumentos = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar de la base dada', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar de la base dada', opts)
    .help()
    .argv;

module.exports = {
    argumentos
}