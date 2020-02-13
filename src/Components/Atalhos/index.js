import React, { Component } from 'react';

import './style.css';

export default class Teste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeInput: null,
      enderecoInput: null,
      estadoInput: null,
      bairroInput: null,
      uf: [
        { text: 'AC', value: 'AC' },
        { text: 'AL', value: 'AL' },
        { text: 'AM', value: 'AM' },
        { text: 'AP', value: 'AP' },
        { text: 'BA', value: 'BA' },
        { text: 'CE', value: 'CE' },
        { text: 'DF', value: 'DF' },
        { text: 'ES', value: 'ES' },
        { text: 'GO', value: 'GO' },
        { text: 'MA', value: 'MA' },
        { text: 'MT', value: 'MT' },
        { text: 'MS', value: 'MS' },
        { text: 'MG', value: 'MG' },
        { text: 'PA', value: 'PA' },
        { text: 'PB', value: 'PB' },
        { text: 'PR', value: 'PR' },
        { text: 'PE', value: 'PE' },
        { text: 'PI', value: 'PI' },
        { text: 'RJ', value: 'RJ' },
        { text: 'RN', value: 'RN' },
        { text: 'RO', value: 'RO' },
        { text: 'RS', value: 'RS' },
        { text: 'RR', value: 'RR' },
        { text: 'SC', value: 'SC' },
        { text: 'SE', value: 'SE' },
        { text: 'SP', value: 'SP' },
        { text: 'TO', value: 'TO' }],
    }
  }
  componentDidMount() {
    this.estadoInput.focus();
  }
  tabEnter(event,campo){
    event.preventDefault();
    var tecla = event.which || event.keyCode;
    if(tecla === 13 /*Enter*/) 
    {
      if(campo === 'campoNome'){
        this.nomeInput.focus(); }
      else if(campo === 'campoEndereco'){
        this.enderecoInput.focus();}
      else if(campo === 'campoEstado'){
        this.estadoInput.focus();}
      else if(campo === 'campoBairro'){
        this.bairroInput.focus();}
    }
  
}
render() {
    return (
      <div>
        <input list="estados" ref={elem => (this.estadoInput = elem)}  onKeyUp={(e) => this.tabEnter(e,'campoBairro')} placeholder="digite o seu estado"style={{padding: "20px", margin:"20px"}}/>
        <input ref={elem => (this.bairroInput = elem)}  onKeyUp={(e) => this.tabEnter(e,'campoEndereco')} placeholder="digite o seu bairro" style={{padding: "20px", margin:"20px"}}/>
        <input ref={elem => (this.enderecoInput = elem)} onKeyUp={(e) => this.tabEnter(e,'campoNome')} placeholder="digite o seu endereco" style={{padding: "20px", margin:"20px"}}/>
        <input ref={elem => (this.nomeInput = elem)}  onKeyUp={(e) => this.tabEnter(e,'campoEstado')} placeholder="digite o seu nome" style={{padding: "20px", margin:"20px"}}/>
        <datalist id="estados">
        {this.state.uf.map((item, key) =>
        <option key={key} value={item.value} /> )}
        </datalist>
      </div>
    );
  }
}
