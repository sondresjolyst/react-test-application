import React, {Component} from 'react';
import {catFact} from '../../models/catfact.models';
import {Api} from '../../services/api.service';
import './fact.scss';
import {FactState} from './types/FactState.types';

/**
 * Fact page
 */
export default class Fact extends Component<{}, FactState> {
  api = new Api();

  /**
   * Constructor
   * @param {interface} props interface
   */
  constructor(props: {}) {
    super(props);
    this.state = {
      randomFact: {
        fact: '',
        length: 0,
      },
    };
  }

  componentDidMount = () => {
    this.fetchFact();
  };

  fetchFact = () => {
    this.api
        .getFact()
        .then((response: catFact) => {
          this.setState({
            randomFact: {
              fact: response.data.fact,
              length: response.data.length,
            },
          });
        })
        .catch((err: any) => console.log(err));
  };

  /**
   * @return {return} Will return the content for the component.
   */
  render() {
    return (
      <div>
        <p className='uk-text-large uk-text-bold'>Fact:</p>
        <table className='uk-table uk-table-striped'>
          <thead>
            <tr>
              <th>Random Fact:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.randomFact.fact}</td>
            </tr>
          </tbody>
        </table>
        <p></p>
        <button
          className='uk-button uk-button-primary'
          onClick={this.fetchFact}>
          Get new fact
        </button>
      </div>
    );
  }
}
