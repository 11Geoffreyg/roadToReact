import React, { Component } from 'react';
import './App.css';

const helloworld = 'Bonjour';
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'Google',
    url: 'https://google.com/',
    author: 'No one',
    num_comments: 6,
    points: 204,
    objectID: 2,
  },
  {
    title: 'Facebook',
    url: 'https://facebook.com/',
    author: 'Mark Zukerberg',
    num_comments: 1,
    points: 8,
    objectID: 3,
  },
];
const name = 'name'
const isSearched = searchTerm => item =>
    item.title.toLowerCase().includes(searchTerm);
class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        list,
        [name]: "Geoffrey Guez",
        count: 0,
        count2: 0,
        serachTerm: '',
      };
      this.onDismiss = this.onDismiss.bind(this);
      this.onClickme = this.onClickme.bind(this);
      this.onSearchChange = this.onSearchChange.bind(this);
  }
  onDismiss(id){
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({list: updatedList});
  }
  onClickme(){
    const countUpdate = this.state.count+1;
    this.setState( {count: countUpdate});
  }
  onSearchChange(event){
    this.setState({searchTerm: event.target.value});
  }
  render() {
    const {searchTerm, list} = this.state;
    return (
      <div className="App">
        <h2>{helloworld+' '+this.state.name}</h2>
        <button onClick={this.onClickme} type='button'>Click me !</button>
        <h2>{this.state.count}</h2>
        <form>
          <input 
          type='text'
          value={searchTerm}
          onChange={this.onSearchChange}
          >

          </input>
        </form>
        {list.filter(isSearched(searchTerm)).map(item =>
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span> {item.author} </span>
              <span>{item.num_comments} </span>
              <span>{item.points} </span>
              <span>
                <button 
                onClick={() => this.onDismiss(item.objectID)}
                type='button'
                >
                  Supprimer
                </button>
              </span>
            </div>
        )}
      </div>
    );
  }
}

export default App;
