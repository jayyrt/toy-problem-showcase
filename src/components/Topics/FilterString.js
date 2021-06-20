import React, { Component } from 'react';

export default class FilterString extends Component{
    constructor(){
        super();

        this.state = {
            unfilteredArray: [Kenia, Adrian, Cesar, Carolina, Aksel, Hector, Alma, Luna],
            userInput: '',
            filteredArray: []
        }
    };

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterNames(userInput){
    let unfilteredArray = this.state.unfilteredArray;
    let filteredArray = [];

    for ( let i = 0; i < unfilteredArray.length; i++ ) {
      if ( unfilteredArray[i].includes(userInput) ) {
        filteredArray.push(unfilteredArray[i]);
      }
    }

    this.setState({ filteredNames: filteredNames });
}

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> Names: { JSON.stringify(this.state.unfilteredArray, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) } > Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        )
    }
}