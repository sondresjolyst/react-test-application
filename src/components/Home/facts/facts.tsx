import React, {Component} from 'react';
import {Api} from '../../services/api.service';
import './facts.scss';

type FactState = {
  facts: {
    current_page: number;
    data: [
      {
        fact: string;
        length: number;
      }
    ];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: [
      {
        url: string | null;
        label: string;
        active: boolean;
      }
    ];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
};

/**
 * Facts page
 */
export default class Facts extends Component<{}, FactState> {
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

  fetchFacts = () => {
    this.api.getFacts().then((response: any) => {
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
        <ul>
          {this.state.facts.data.map((facts: any, index) => (
            <li key={index}>{facts.fact}</li>
          ))}
        </ul>
      </div>
    );
  }
}
