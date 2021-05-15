require('dotenv').config()
const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


const main = async() => {

    const busquedas = new Busquedas();

    let opt;

    do {
        // imprimir menu
        opt = await inquirerMenu();
 
        switch (opt) {
            case 1:
                //Mostrar Mensaje
                const termino = await leerInput('Ciudad: ');
                //Buscar los lugares
                const lugares = await busquedas.ciudad(termino);
                // Seleccionar el lugar
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find( l => l.id === id )
                //Datos del clima
                //Mostrar resultados
                console.log('\nInformacion del lugar\n'.green);
                console.log('Ciudad:', lugarSel.name);
                console.log('Lat:', lugarSel.lat);
                console.log('Lng:', lugarSel.lng);
                console.log('Temperatura:', );
                console.log('Minima:', );
                console.log('Maxima:', );
                break;
             case 2:
                console.log('opcion 2 seleccionada');
                 break;       
        }
 
        if (opt !== 0) await pausa();

     } while (opt !== 0);
}

main();
