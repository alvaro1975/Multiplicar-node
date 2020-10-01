// al ppio se ponen los require, que son equivalentes a using de c#

// const fs = require('fs'); //con esto manejamos las funciones de "file system"

// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 12
//         }
//     })
//     .command('crear', 'Crea un archivo con la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 12
//         }
//     })
//     .help()
//     .argv;
const argv = require('./config/yargs').argv;
// const multiplicar = require('./Multiplicar/multiplicar');
const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0]; //con _ hago referencia al arreglo que me devuelve en consola

switch (comando) {
    case 'listar':
        // console.log('Listar');
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.gray))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}

// let base = '67'; //ojo que si mandamos un número entre comillas, lo coge como número

// console.log(multiplicar); // para ver movidas de la aplicación
// console.log(process);
// console.log(process.argv); //con esto decimos que vamos a enviar argumentos

// let argv2 = process.argv;
// let parametro = argv[2]; //el 2 porque hemos visto con process.argv que el parámetro que metemos está en tercer lugar
// let base = parametro.split('=')//cortamos el texto por el =
// let base = parametro.split('=')[1] // y seleccionamos el segundo elemento (el número que metemos como parámetro)

// console.log('Limite', argv.limite);
// console.log(argv2);
// multiplicar.crearArchivo();
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));