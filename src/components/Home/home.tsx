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
        <div className='uk-container uk-container-xlarge'>
          <Fact />
        </div>
        <div className='uk-container uk-container-xlarge'>
          <Facts />
        </div>
        <div className='uk-container uk-container-xlarge'>
          <Breeds />
        </div>
      </div>
    );
  }
}
