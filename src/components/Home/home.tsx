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
        <Fact />
        <Facts />
        <Breeds />
      </div>
    );
  }
}
