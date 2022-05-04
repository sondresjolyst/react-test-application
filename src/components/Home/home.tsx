import React, { Component } from "react";
import { catFact } from "../models/catfact.models";
import { Api } from "../services/api.service";
import './home.scss';

type MyState = {
    dailyFact: {
        fact: string,
        length: number
    }
}

export class Home extends Component<{}, MyState> {
    api = new Api();
    
    constructor(props: any) {
        super(props)
        this.state = {
            dailyFact: {
                fact: "",
                length: 0
            }
        }
    }

    componentDidMount = () => {
        this.fetchDailyFact();
    }

    fetchDailyFact = () => {
        this.api.getFactOfTheDay()
            .then((response: catFact) => {
                console.log(response.data.fact)
                this.setState({
                        dailyFact: { 
                            fact: response.data.fact,
                            length: response.data.length
                        }
                    })
            })
            .catch((err: any) => console.log(err));
    }

    render() {
        return (
            <div>
                <p>Home-content</p>
                <p>{ this.state.dailyFact.fact }</p>
                <p>{ this.state.dailyFact.length }</p>
                <button className="uk-button uk-button-primary" onClick={ this.fetchDailyFact }>test</button>
            </div>
        )
    }  
}
