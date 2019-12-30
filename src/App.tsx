import React, { Component } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/SearchBox/Search';

interface IProps {
  superhero: string;
}

interface Monster {
  name: string;
}

interface IState {
  monsters: Monster[],
  search: string,
}

class App extends Component<IProps, IState> {

  state: IState;
  
  constructor(props: IProps){
    
    super(props);

    this.state = {
      monsters: [],
      search: '',
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){

    interface IContact {
      id: number;
      name: string;
    }

    const searchMonsters = (e: any) => {
     
      this.setState(
        { 
          search: e.target.value
        }
      );

    }

    const { monsters, search } = this.state;

    const filteredMonsters = monsters.filter( monster => {
      return monster.name.toLowerCase().includes(search)
    });

    return (
      <div className="App">
        <Search
        placeholder = "Search Monster" 
        handleChange = {searchMonsters}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );

  }

}

export default App;
