import React, {Component} from 'react';
import './home.scss';
import Fact from './fact/fact';
import Facts from './facts/facts';
import Breeds from './breeds/breeds';

/**
 * Home page
 */
export default class Home extends Component {
  /**
   * @return {return} Will return the content for the component.
   */
  render() {
    return (
      <div>
        <div className='uk-container container-large'>
          <Fact />
        </div>
        <div className='uk-container container-large'>
          <Facts />
        </div>
        <div className='uk-container container-large'>
          <Breeds />
        </div>
      </div>
    );
  }
}
