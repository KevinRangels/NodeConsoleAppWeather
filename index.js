require('dotenv').config()
const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
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
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar)
                //Buscar los lugares
                // Seleccionar el lugar
                //Datos del clima
                //Mostrar resultados
                console.log('\nInformacion del lugar\n'.green);
                console.log('Ciudad:', );
                console.log('Lat:', );
                console.log('Lng:', );
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
