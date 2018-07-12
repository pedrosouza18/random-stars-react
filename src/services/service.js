import { API_URL } from './api';

export default class Service {

    getPlanets(randomNumber) {
        return new Promise((resolve, reject) => {
            fetch(`${API_URL}${randomNumber}/`)
                .then(data => data.json())
                .then(data => resolve(data))
                .catch(error => console.log(error));
        }); 
    }
}