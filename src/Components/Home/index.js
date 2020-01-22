import React, { Component } from 'react';
import  './style.css';
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
        <div className="tela">
            <h3 className="Texto-componente">Lista de Componentes</h3>
            <ul className="lista">
                <li><Link to="/Search">Busca API</Link></li>
                <li><Link to="/SearchSeveral">Busca com json</Link></li>
                <li><Link to="/MenuResponsive">Menu Responsivo</Link></li>
                <li><Link to="/Modal">Modal</Link></li>
                <li><Link to="/Teste">Teste</Link></li>
            </ul>
        </div>
    );
  }
}
