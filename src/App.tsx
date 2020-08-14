import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

export type Monster = {
  name: string,
  id: number
  email: string
}

type State = {
  monsters: Monster[]
  searchField: string
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  async componentDidMount() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    this.setState({monsters: await result.json()})
  }

  render() {
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(m => m.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <SearchBox placeholder='search monsters' handleChange={e => this.setState({searchField: e.target.value})}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
