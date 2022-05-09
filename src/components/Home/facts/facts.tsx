import React, {Component} from 'react';
import {Api} from '../../services/api.service';
import './facts.scss';
import {FactsState} from './types/FactsState.types';

/**
 * Facts page
 * @param {number} pageNumber fetchFacts(pageNumber) is used to get a specified
 * site
 */
export default class Facts extends Component<{}, FactsState> {
  api = new Api();

  /**
   * Constructor
   * @param {interface} props interface
   */
  constructor(props: any) {
    super(props);
    this.state = {
      facts: {
        current_page: 0,
        data: [
          {
            fact: '',
            length: 0,
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
    this.fetchFacts();
  };

  fetchFacts = (pageNumber?: number) => {
    this.api.getFacts(pageNumber).then((response: any) => {
      this.setState({
        facts: response.data,
      });
    });
  };

  /**
   * @return {return} Will return the content for the component.
   */
  render() {
    return (
      <div className="uk-margin-top">
        <p className="uk-text-large uk-text-bold">Facts:</p>
        <p
          className="
        uk-text-default
        uk-text-lighter
        ">
          Current Page: {this.state.facts.current_page}
        </p>
        <table className="uk-table uk-table-striped">
          <thead>
            <tr>
              <th>Facts</th>
            </tr>
          </thead>
          <tbody>
            {this.state.facts.data.map((facts: any, index) => (
              <tr key={index}>
                <td>{facts.fact}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.state.facts.current_page > 1 && (
          <button
            className="uk-button uk-button-primary uk-margin-right"
            onClick={() => this.fetchFacts(this.state.facts.current_page - 1)}>
            Previous Page
          </button>
        )}
        {this.state.facts.current_page < this.state.facts.last_page && (
          <button
            className="uk-button uk-button-primary"
            onClick={() => this.fetchFacts(this.state.facts.current_page + 1)}>
            Next Page
          </button>
        )}
      </div>
    );
  }
}
