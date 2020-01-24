import React, { Component } from 'react';
import Fuse from 'fuse.js';
// import { Container } from './styles';

export default class Teste extends Component {
   
  state={
    result:[],
    searchVal:'',
    list:[
      {
      'title': 'Washigton',
      'telefone': '21 123'
    },
    {
      'title': 'McDonald´s',
      'telefone': '31 222'
    },
    {
      'title': 'Avenida Presidente Vargas',
      'telefone': '31 222'
    },
    {
      'title': 'McDonald´s',
      'telefone': '31 222'
    },
    {
      'title': 'Bob´s',
      'telefone': '22 000'
    },
    {
      'title': 'Bob´s',
      'telefone': '22 000'
    }

  ] }

  handleChange = event =>{
    this.setState({searchVal: event.target.value })
  }
  run = event =>{
    event.preventDefault();

    var options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 3,
      keys: [
        "title",
        "telefone"
      ]
    };
    var fuse = new Fuse(this.state.list, options); // "list" is the item array
    this.setState({result: fuse.search(this.state.searchVal)})
  }

  render() {
    
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.searchVal}/><button onClick={this.run}>testar</button>
          
          {this.state.result.map(item =>(
            <ul>
              <li>
              {item.title}
              </li>
              <li>
              {item.telefone}
              </li>
              <br/>
            </ul>

          ))}
          
      </div>
    );
  }
}
