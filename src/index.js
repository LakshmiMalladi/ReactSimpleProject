//Please get React from installed modules and give me access in this file
import _ from 'lodash';//we are using underscore instead of saying lodash
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//importing the youtube serach api
import YTSearch from 'youtube-api-search';

//getting the search bar into the application component
import SearchBar from './components/search_bar';
//import video list
import VideoList from './components/video_list';

import VideoDetail from './components/video_detail';

//get the api-key for youtube
//const API_KEY = 'AIzaSyDEbdbPDhJPP19p9_enjEncdZf19LGDz28';
const API_KEY = 'AIzaSyCJjqcZx0HBe2L4H7lFkRjGGvrH-GT8jso';

// Create a new component. This component should produce some HTML

//const ES2016 or ES6 syntax; it is similar to var.
//returns JSX000000
//functional based component
//const App = () => {
  //return (
    //<div>
    //<SearchBar />
    //</div>
  //);
//}

//since we need to maintain the state of the data we searched we need a class based component
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     }; //list of videos

     this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term} , (videos) => {
      //this.setState({videos : videos});
      this.setState({
        videos :videos,
        selectedVideo:videos[0]
      });
    });
  }

  render()
  {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) },300);

    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch}  />
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList onVideoSelect = {selectedVideo => this.setState({selectedVideo})} videos = {this.state.videos} />
      </div>
    );
  }
}

//create an instance of App class
//it is <App />

//Take this component's HTMl and put it on the page(in the DOM)
//we should not be passing a class. we need to pass an instance which is <App /> in this case
ReactDOM.render(<App />, document.querySelector('.container'));
