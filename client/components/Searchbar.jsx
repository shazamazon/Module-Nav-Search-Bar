import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      category: 'wands',
    };
  }


  onChange(event) {
    const term = event.target.value;
    this.setState({term: term});
  }

  onSubmit(event) {
    event.preventDefault();
  }

  onCategoryChange(event) {
    const category = event.target.value;
    this.setState({category: category});
  }

  render() {
    return (
      <div id="nav-search-bar" key = "nav-search-bar">
        <form id="nav-search-bar-form" key = "nav-search-bar-form">
          <select name="nav-category-selector" key = "nav-category-selector" form="nav-search-bar-form" onChange={this.onCategoryChange.bind(this)} value={this.state.category}>
            <option value="wands">Wands</option>
            <option value="quidditch">Quidditch</option>
            <option value="spells">Spells</option>
            <option value="accessories">Accessories</option>
            <option value="rarities">Rarities</option>
            <option value="food">Food</option>
            <option value="furniture">Furniture</option>
            <option value="lamps">Lamps</option>
            <option value="lotr">LoTR</option>
          </select>
          <input type="text" key = "nav-search-input" onChange={this.onChange.bind(this)}></input>
          <input type="submit" value="magnifier" key = "nav-search-submit" onClick={this.onSubmit.bind(this)}></input>
        </form>
      </div>
    );
  }
}

export default Searchbar;