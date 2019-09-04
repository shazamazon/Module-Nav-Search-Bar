import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      category: 'all',
      related: []
    };
  }


  onChange(event) {
    const term = event.target.value;
    this.setState({term: term});
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({term: ''});
  }

  onCategoryChange(event) {
    const category = event.target.value;
    this.setState({category: category});
  }

  render() {
    return (
      <div id="nav-search-bar" key = "nav-search-bar">
        <form id="nav-search-bar-form" key = "nav-search-bar-form">
          <select id="nav-category-selector" name="nav-category-selector" key = "nav-category-selector" text={this.state.category} form="nav-search-bar-form" onChange={this.onCategoryChange.bind(this)} value={this.state.category}>
            {this.props.categories.map((cat) => {
              return <option className="nav-category-option" value={cat}>{cat}</option>;
            })}
          </select>
          <input type="text" key="nav-search-input" id="nav-search-input" value={this.state.term} onChange={this.onChange.bind(this)}></input>
          <button type="submit" key="nav-search-submit" id="nav-search-submit" onClick={this.onSubmit.bind(this)}>
            <img id="nav-search-icon" src="https://nav-search-bar.s3.us-east-2.amazonaws.com/nav-icons/search_final.png"></img>
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
