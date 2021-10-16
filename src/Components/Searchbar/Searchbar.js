import { Component } from 'react';
import PropTypes from 'prop-types';
class Searchbar extends Component {
  state = {
    searchValue: '',
  };
  static propTypes = {
    getSearchValue: PropTypes.func.isRequired,
  };
  handleSearchSubmit = e => {
    const { searchValue } = this.state;
    e.preventDefault();
    console.log('Before fetch:', searchValue);
    this.props.getSearchValue(searchValue);
  };
  handleSearchChange = e => {
    this.setState({ searchValue: e.target.value });
  };
  render() {
    const { handleSearchSubmit, handleSearchChange } = this;
    return (
      <header className="Searchbar">
        <form onSubmit={handleSearchSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleSearchChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
