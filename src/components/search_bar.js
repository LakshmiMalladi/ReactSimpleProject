//GOAL of this Component:  we have input at the top and it should update the video list
//user types input we need to make a request to the youyube api

import React,{ Component } from 'react';//we do this as whenever we write JSX it calls for <input /> as React.CreateElement


//const SearchBar = () => {
//  return <input />;
//};

//plain js object
//define a new class called searchbar and give it all the functionality that React.component has
class SearchBar extends Component {
  //to initialise the state
  constructor(props){
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange = {event => this.onInputChange(event.target.value)} />
      </div>
  );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

//  the above onChange = {this.onInputChange} is equivalent to
// onChange = {event => console.log(event.target.value)}
  //onInputChange(event) {
  //  console.log(event.target.value);
  //}
}

export default SearchBar;
