import React, {Component} from 'react'
import Cardlist from './cardlist'
// import {robots} from './robots'
import Searchbox from './searchbox'
import './App.css'
import Scroll from './scroll'
import 'tachyons'

class App extends Component {
  constructor(){
    super()
    this.state ={
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots : users}));
  }

  onSearchchange=(event) => {
    this.setState({ searchfield: event.target.value})
  }

  render(){
    const filteredrobots= this.state.robots.filter(robots=>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
  return (
    <div className="tc">
      <h1> ROBOFRIENDS</h1>
      <Searchbox onSearchchange={this.onSearchchange}/>
      <Scroll>
        <Cardlist robots={filteredrobots} /> 
      </Scroll>
    </div>
  )}
}

export default App;
