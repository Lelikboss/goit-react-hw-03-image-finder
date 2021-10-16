import React, { Component } from 'react';

import Searchbar from './Components/Searchbar';
import ImagesList from './Components/pixabayGallery';

export default class App extends Component {
  state = {
    searchValue: '',
  };
  getSearchValue = searchValue => this.setState({ searchValue });

  render() {
    return (
      <div>
        <Searchbar getSearchValue={this.getSearchValue} />
        <ImagesList searchValue={this.state.searchValue} />
      </div>
    );
  }
}
