import './App.css';
import { Component } from 'react';

import {CardList} from './component/card-list.component';
import { Searchbox } from './component/serachbox.component';
 

class App extends Component {
  constructor(){
    super()
    this.state = {
     monsters: [],
     searchfield: ''
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(respons => respons.json())
  .then(users => this.setState({
    monsters: users
  }))
}

handleSearch = e => {
  this.setState({ searchfield: e.target.value })
}

  render(){
    const {monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()))
   return  (
      <div className="App">
        <h1 className='header-primary'>React Monsters</h1>
        <Searchbox 
          handleChange={this.handleSearch} 
          placeholder='search monsters'
        />
       <CardList monsterList={filteredMonsters} />
      </div>
    );
  }
}

export default App;
