import React, { Component } from 'react';

import FruitBasket from './FruitBasket';
// import Filter from './Filter'
// import FilteredFruitList from './FilteredFruitList'

class App extends Component {
  constructor() {
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };
  }

  componentWillMount(){
    this.fetchFilters()
    this.fetchFilteredFruitList()
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFilteredFruitList() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  render() {

  }
}

export default App;
