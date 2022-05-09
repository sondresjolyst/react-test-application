import React, {Component} from 'react';
import {Api} from '../../services/api.service';
import './breeds.scss';
import {BreedsState} from './types/BreedsState.types';

/**
 * Breeds page
 */
export default class Breeds extends Component<{}, BreedsState> {
  api = new Api();

  /**
   * Constructor
   * @param {interface} props interface
   */
  constructor(props: any) {
    super(props);
    this.state = {
      breeds: {
        current_page: 0,
        data: [
          {
            breed: '',
          },
        ],
        first_page_url: '',
        from: 0,
        last_page: 0,
        last_page_url: '',
        links: [
          {
            url: '',
            label: '',
            active: false,
          },
        ],
        next_page_url: '',
        path: '',
        per_page: 0,
        prev_page_url: '',
        to: 0,
        total: 0,
      },
    };
  }

  componentDidMount = () => {
    this.fetchBreeds();
  };

  fetchBreeds = () => {
    this.api.getBreeds().then((response: any) => {
      this.setState({
        breeds: response.data,
      });
    });
  };

  /**
   * @return {return} Will return the content for the component.
   */
  render() {
    return (
      <div className="uk-margin-top">
        <p className="uk-text-large uk-text-bold">Breeds:</p>
        <div
          className="
        uk-child-width-1-5
        uk-grid-medium
        uk-grid-match"
          uk-grid="true">
          {this.state.breeds.data.map((breeds: any, index) => (
            <div key={index}>
              <div
                className="
            uk-card
            uk-card-default">
                <div className="uk-card-header">
                  <h3 className="uk-card-title">{breeds.breed}</h3>
                </div>
                <div className="uk-card-body">
                  <ul>
                    {breeds.coat != '' && <li>{breeds.coat}</li>}
                    {breeds.country != '' && <li>{breeds.country}</li>}
                    {breeds.origin != '' && <li>{breeds.origin}</li>}
                    {breeds.pattern != '' && <li>{breeds.pattern}</li>}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
