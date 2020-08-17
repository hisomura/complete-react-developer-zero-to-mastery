import React, {ChangeEventHandler, Component} from 'react';
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

  onSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => this.setState({searchField: e.target.value})

  render() {
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(m => m.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox placeholder='search monsters' handleChange={this.onSearchChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
