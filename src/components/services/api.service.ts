import axios from 'axios';

/**
 * @return {json} API service that returns JSON
 */
export class Api {
  client: any;
  apiUrl: string;

  /**
   * constructor
   */
  constructor() {
    this.client = null;
    this.apiUrl = 'https://backend-sondre-express-test-application-production.playground.radix.equinor.com/api/';
  }

  init = () => {
    this.client = axios.create({baseURL: this.apiUrl, timeout: 31000});
    return this.client;
  };

  getFactOfTheDay = () => {
    return this.init().get('/example/catFact');
  };
}
