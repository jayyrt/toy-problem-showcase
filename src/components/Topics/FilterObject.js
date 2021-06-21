import React, { Component } from 'react';

export default class FilterObject extends Component{
    constructor(){
        super();

        this.state = {
            friends: [
                {
                  name: 'Kenia Romero',
                  title: 'Hacker',
                  age: 28,
                },
                {
                  name: 'Carolina Ojeda',
                  age: 23,
                  hairColor: 'brown'
                },
                {
                  name: 'Pau Camacho',
                  title: 'Boss',
                }
              ],
        
        userInput: '',
        filteredFriends: []      
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
      }

    filterEmployees(prop){
        let friends = this.state.friends;
        let filteredFriends = [];

        for ( let i = 0; i < employees.length; i++ ) {
            if ( friends[i].hasOwnProperty(prop) ) {
            filteredFriends.push(friends[i]);
            }
        }

        this.setState({ filteredFriends: filteredFriends });
    }

    render() {
        return (
        <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"> Original: { JSON.stringify(this.state.friends, null, 10) } </span>
            <input className="inputLine"/>
            <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredFriends, null, 10) } </span>
        </div>
        )
    }
}