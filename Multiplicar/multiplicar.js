const { resolveCname } = require('dns');
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('===================='.green);
    console.log(`=== TABLA DE ${base} ===`.white);
    console.log('===================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 20) => { // =20 es el valor por defecto qeu le ponemos
    return new Promise((resolve, reject) => {

        if (!Number(base)) { //así nos aseguramos que llamamos a la función con un número
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            // console.log(`${base} * ${i} = ${base * i}`);
            data += `${base} * ${i} = ${base * i}\n` //con salto de linea
        }

        //la ruta se la ponemos con ../ ó ./ si es el raiz o con algo de este estilo
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);

        });
    });

}

module.exports = { //con esto indico qué es lo que hay que exportar
    crearArchivo,
    listarTabla
}