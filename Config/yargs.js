const { option } = require('yargs');
const colors = require('colors');

const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 12
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', options)
    .help()
    .argv;

module.exports = {
    argv
}