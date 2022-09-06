//****Trabajo integrador 2: App de tareas****
// Brian Flores, comision 13

let process = require('process');
let lectura = require('./funcionesDeTareas');

let accion = process.argv[2] && process.argv[2].toLowerCase();
lectura(accion)