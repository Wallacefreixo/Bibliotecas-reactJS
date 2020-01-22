import React, { Component } from "react";

import "./style.css";
import Janela from './Janela';

export default class Modal extends Component { 

  //declaracao variaveis   
 state={ validacaoJanela: false, codigo: ''};

 //Executa modal
 showJanela = (codigo, e) => {
    e.preventDefault();
    this.setState({codigo: codigo});
    this.setState({ validacaoJanela: true });
  };
  //Esconde Modal
  hideJanela = (event) => {
    event.preventDefault();
    this.setState({ validacaoJanela: false });
  };


  render() {
    return (
        <div>
        {this.state.validacaoJanela ? (
           <div>
             <Janela validacaoJanela={this.state.validacaoJanela} handleClose={this.hideJanela} codigo={this.state.codigo}></Janela>
            </div>                 
          ) : 
         <div className="texto">
          <a href="/Modal" onClick={(e) =>this.showJanela("teste", e)}> Clique aqui para abrir o modal ID: teste </a>
         </div>
         }
        </div>
    );
  }
}
