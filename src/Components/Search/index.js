import React, { Component } from 'react';
import './style.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

export default class Search extends Component {
    state = {
        filter: "",
        visible: false,
        data: []
      };

      handleChange = (event, filter) => {
        this.setState({ filter: event.target.value , visible: true});
         fetch(`https://swapi.co/api/people/?search=${filter}`)
        .then(response => response.json())
        .then(data => this.setState({ data: data.results }))
      }

      cancelResult = event =>{
          event.preventDefault();
          this.setState({data:[] , visible: false, filter: ""})
      }

      render() {
        const { filter, data } = this.state;
        
        return (
         <div className="search-several-container">
            <div>
              <div class="search-several-input-wrapper">
                    <FontAwesomeIcon icon={faSearch} className="search-several-input-icon" />
                    <input type="text" className="search-several-input-text" value={filter} onChange={(e) =>this.handleChange(e,filter)} placeholder="Pesquise um personagem na API"  />
                    <button className="search-several-cancel" onClick={this.cancelResult}>Cancelar</button>
              </div>
            </div>
         {this.state.visible ? (
            <div className="search-several-result">
            <h3 className="titulo-result">Resultados</h3>
                {data.map(item => (
                    <div key={item.name}>
                        <div className="content-info">
                            <div className="usuarios-info">
                                <div>
                                    {item.name}
                                </div>
                                <div className="text-telefone">
                                    {item.mass}
                                </div> 
                            </div>
                            <div className="info-location">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-location" />
                                <div className="info-text-location">
                                    {item.gender} - {item.hair_color} - {item.skin_color} - {item.birth_year}
                                </div>
                            </div>
                        </div>
                    </div>
                 ))}
            </div>                 
           ) : null
         }
         </div>    
        );
      }
}
    
