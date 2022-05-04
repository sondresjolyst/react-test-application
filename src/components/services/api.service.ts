import axios from 'axios';

export class Api {

    client: any;
    apiUrl: string;

    constructor() {
        this.client = null;
        this.apiUrl = 'http://express-backend-typescript-example.com/api/';
    }

    init = () => {
        this.client = axios.create({baseURL: this.apiUrl, timeout: 31000});
        return this.client;
    };

    getFactOfTheDay = () => {
        return this.init().get('/example/catFact');
    }
}