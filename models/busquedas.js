const axios = require('axios');

class Busquedas {
    historial = ['Merida', 'Caracas', 'Maracay'];

    constructor() {
        // TODO: leer DB si existe
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language':'es',
        }
    }

    async ciudad( lugar = '' ) {
        //peticion http
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get()
            // const resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/merida.json?access_token=pk.eyJ1Ijoia2V2aW5yYW5nZWxzIiwiYSI6ImNrb3B3YnA4djBsdXMyd3J4cHpiaDY1aHMifQ.i3aSQCHW0NaX9wjS8X52TA&limit=5&language=es`)
            console.log(resp.data);
            return []
            
        } catch (error) {
            return []
        }

    }
}

module.exports = Busquedas;