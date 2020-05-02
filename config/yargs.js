const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            alias: 'd',
            demand: true
        }
    })
    .command('borrar', 'Borrar un elemento por hacer', {
        descripcion: {
            alias: 'd',
            demand: true
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            alias: 'd',
            demand: true
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}