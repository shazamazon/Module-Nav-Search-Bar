import React from 'react';
import ResultList from './ResultList.jsx';
import axios from 'axios';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      category: 'All',
      results: []
    };
  }

  componentDidMount() {
    setInterval(this.showResults.bind(this), 500);
  }

  showResults() {
    if (this.state.term === '') {
      this.setState({results: []});
    } else if (this.state.category === 'All') {
      const searchRegex = this.state.term;
      axios.get(`${this.props.url}/api/search/matches`, {params: {regex: searchRegex}})
        .then(res => {
          this.setState({results: res.data});
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      const searchRegex = this.state.term;
      const cat = this.state.category.toLowerCase();
      axios.get(`${this.props.url}/api/search/matches/category`, {params: {regex: searchRegex, category: cat}})
        .then(res => {
          this.setState({results: res.data});
        })
        .catch(err => {
          console.error(err);
        });
    }
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
          <div id="nav-search-input">
            <input type="text" key="nav-search-input" value={this.state.term} id="nav-search-text" onChange={this.onChange.bind(this)}></input>
            {this.state.results.length > 0 ? <ResultList results={this.state.results} onSubmit={this.onSubmit.bind(this)}/> : null}
          </div>
          <button type="submit" key="nav-search-submit" id="nav-search-submit" onClick={this.onSubmit.bind(this)}>
            <img id="nav-search-icon" src="https://nav-search-bar.s3.us-east-2.amazonaws.com/nav-icons/search_final.png"></img>
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;