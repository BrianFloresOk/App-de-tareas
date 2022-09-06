function lecturaDeTareas(accion)
{
    let fs = require('fs');
    let archivoJson = JSON.parse(fs.readFileSync("tareas.json", 'utf-8'));
    
    switch (accion)
    {
        case 'listar':
            console.log("\nLista de Tareas:\n")
            for (i = 0; i < archivoJson.length ; i++){
                console.log(`Titulo: ${archivoJson[i].Titulo}\nEstado: ${archivoJson[i].Estado}`)
                console.log("----------------------------------------------------")
            }
            break;
        case undefined:
            console.log("\n¡¡Atención!!\nTenés que pasar una acción.");
            break;
        default:
            console.log( "No entiendo qué quieres hacer.");
            
    }
}

module.exports = lecturaDeTareas