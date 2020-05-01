import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/SearchBox';

class App extends React.Component {
  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  searchField(e) {
    // console.log(e.target.value);
    let search = e.target.value;
    this.setState({ searchField: search })
  }

  render() {
    const { monsters, searchField } = this.state;
    console.log(this.state.monsters);
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (

      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox handleChange={e => this.searchField(e)} />

        <CardList monsters={filteredMonsters} />
      </div>
    )

  }
}

export default App;
