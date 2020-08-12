import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";

export type Monster = {
  name: string,
  id: number
  email: string
}

type State = {
  monsters: Monster[]
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      monsters: []
    }
  }

  async componentDidMount() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    this.setState({monsters: await result.json()})
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}/>
      </div>
    )
  }
}

export default App;
