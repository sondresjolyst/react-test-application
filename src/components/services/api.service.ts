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

    if (process.env.NODE_ENV === 'production') {
      this.apiUrl = 'https://backend-sondre-express-test-application-production.playground.radix.equinor.com/';
    } else if (process.env.NODE_ENV === 'development') {
      this.apiUrl = 'http://localhost:8001/';
    } else {
      this.apiUrl = 'http://localhost:8001/';
    }
  }

  init = () => {
    this.client = axios.create({baseURL: this.apiUrl, timeout: 31000});
    return this.client;
  };

  getFact = () => {
    return this.init().get('api/catfacts/fact');
  };

  getFacts = () => {
    return this.init().get('api/catfacts/facts');
  };

  getBreeds = () => {
    return this.init().get('api/catfacts/breeds');
  };
}
