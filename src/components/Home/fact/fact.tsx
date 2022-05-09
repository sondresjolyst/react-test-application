import React, {Component} from 'react';
import {catFact} from '../../models/catfact.models';
import {Api} from '../../services/api.service';
import './fact.scss';

type HomeState = {
  randomFact: {
    fact: string
    length: number
  };
};

/**
 * Fact page
 */
export default class Fact extends Component<{}, HomeState> {
  api = new Api();

  /**
 * Constructor
 * @param {interface} props interface
 */
  constructor(props: any) {
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
        //   console.log(response.data.fact);
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
        <p>{this.state.randomFact.fact}</p>
        <button
          className="uk-button uk-button-primary"
          onClick={this.fetchFact}
        >
          Get new fact
        </button>
      </div>
    );
  }
}