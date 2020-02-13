import React, { Component } from "react";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import {
  SearchProvider,
  WithSearch,
  Paging,
  PagingInfo,
  ResultsPerPage
} from "@elastic/react-search-ui";
// import { Layout } from "@elastic/react-search-ui-views";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {faUser, faSearch, faArrowRight,faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import './style.css';
import "@elastic/react-search-ui-views/lib/styles/styles.css";
//conectando API elastic app search
const connector = new AppSearchAPIConnector({
  searchKey: "search-vj2hxgg3mnfg53gzrnbfbmdu",
  engineName: "search-user",
  hostIdentifier: "host-n1gpyh"
});

//configuração de query
const configuration = {
  initialState:{
    ResultsPerPage: 5
  },
  apiConnector: connector,
  autocompleteQuery: {
    suggestions: {
      types: {
        documents: {
          fields: ["nome","estado", "cidade", "bairro", "endereco"]
        }
      },
      size: 5
    }
  },
  searchQuery: {
    search_fields: {
      nome: {},
      estado:{},
      cidade:{},
      bairro:{},
      endereco:{}
    },
    
    result_fields: {
      nome: {
        snippet: {
          size: 75, 
          fallback: true 
        }
      },
      estado: {
        snippet: {
          size: 50,
          fallback: true
        }
      },
      cidade: {
        snippet: {
          size: 50,
          fallback: true
        }
      },
      bairro: {
        snippet: {
          size: 50,
          fallback: true
        }
      },
      endereco: {
        snippet: {
          size: 50,
          fallback: true
        }
      },
    },
  }
};

export default class App extends Component {
    //criando variaveis de estados
    state = {
        buttonActive: 0,
        negocio: true,
        pessoa: false,
        switchValue: false,
        displayIcon: 'display-button-false',
        dadoSelecionado: false,
     };

    //atualiza state do checkbox pessoa ou negocio de acordo com o item selecionado
    setActiveButton(index){
        this.setState({'buttonActive': index})
        if(index === 0){
          this.setState({negocio: true, pessoa:false})
        }
        else{
          this.setState({negocio: false, pessoa:true})
        }
    }
    handleChangeSwitch = () =>{
    if(this.state.switchValue === false){
       this.setState({switchValue: true})
    } else{
        this.setState({switchValue: false}) }
    }
    //mostra o botao do telefone
    adicionaBotao = () =>{
       this.setState({displayIcon: 'display-button-true'})
    }

  render(){
    //descontruindo os estados para nao precisar escrever this.states nos campos 
    const { buttonActive, switchValue, displayIcon, negocio} = this.state;
     
     //retorna nome da classe + active para ativar a cor do botao do telefone que foi selecionado
     var current = buttonActive;
     var getClass = function(name, index){
       if(index === current)
          return name + ' active';
       return name;
     }

  
  return (
    <div className="container">
      <div className="search-several-container">
        <div className="header">
        <div className="logo">
        <svg width="40" height="58" viewBox="0 0 55 58" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="112.738%" y1="110.801%" x2="4.03%" y2="31.582%" id="a">
        <stop stop-color="#FF0" offset="0%"/><stop stop-color="#FF6D00" offset="41.941%"/><stop stop-color="#EA288C" offset="100%"/></linearGradient></defs><g fill="none"><path d="M27.077 57.473c7.427 1.423 18.374.416 18.374-12.323 0-20.46 15.42-23.53 6.832-35.89C41.887-5.702 6.785-2.375 1.15 19.546c-5.007 19.42 8.573 34.599 25.926 37.928z" fill="url(#a)"/><path d="M36.235 23.29a2.597 2.597 0 0 0 2.402-1.585 2.558 2.558 0 0 0-.559-2.807 2.613 2.613 0 0 0-2.83-.561 2.574 2.574 0 0 0-1.605 2.376 2.56 2.56 0 0 0 .757 1.821 2.606 2.606 0 0 0 1.835.756zm.032 1.906c-1.457 0-2.646 3.44-2.646 7.684s1.192 7.683 2.643 7.683c1.45 0 2.642-3.438 2.642-7.683 0-4.244-1.178-7.684-2.642-7.684h.003zm-11.787-.008c-4.345 0-7.235 3.41-7.235 7.684s2.89 7.686 7.235 7.686c4.346 0 7.223-3.406 7.223-7.686 0-4.28-2.888-7.684-7.223-7.684zm0 11.744c-1.992 0-3.095-2.03-3.095-4.088 0-2.057 1.103-4.029 3.095-4.029 1.993 0 3.088 1.974 3.088 4.03 0 2.054-1.095 4.09-3.088 4.09v-.003z" fill="#FFF"/></g></svg>
          <p className="tituloprojeto">PROJETO 102</p>
        </div>
        <div className="user-login">
        <FontAwesomeIcon icon={faUser} className="iconUser"/>
          <div className="user-login-user">
          <p className="titulocliente">CLIENTE SOLICITANTE</p>
          <p className="titulotelefone">21 9 0000-6655</p>
          </div>
        </div>
      </div>  
      <SearchProvider config={configuration}>
      <WithSearch
        mapContextToProps={({ searchTerm, setSearchTerm, results}) => ({
          searchTerm,
          setSearchTerm,
          results,
        })} >

        {({ searchTerm, setSearchTerm, results }) => {
        return (
            <div className="search-several-selecaoDados">
            <div className="SelecaoDados">
                {/*grupo de botoes pegando pelo index*/}
                <div className="ButtonGroup">
                   <button href="#" onClick={this.setActiveButton.bind(this, 0)} className={getClass("buttonNegocios", 0)}>Negócios</button>
                   <button href="#" onClick={this.setActiveButton.bind(this, 1)} className={getClass("buttonPessoas", 1)}>Pessoas</button>
                </div>
                <div className="regiao">
                  <p>Região</p>
                  <div className="regiao-opcoes">
                     <p className="titulo-opcoes-regiao">21 Rio de Janeiro /RJ</p>
                     <input checked={switchValue}
                            onChange={this.handleChangeSwitch}
                            className="react-switch-checkbox"
                            id={`react-switch-new`}
                            type="checkbox" />
                            <label style={{background: switchValue && 'dodgerblue'}}
                                   className="react-switch-label"
                                   htmlFor={`react-switch-new`} >
                              <span className={`react-switch-button`} />
                            </label> Todas
                  </div>
                </div>
            </div>
            <div class="search-several-input-wrapper">
             <FontAwesomeIcon icon={faSearch} className="search-several-input-icon" />
                <input className="search-several-input-text"
                        value={searchTerm}
                        placeholder={negocio ? 'pesquise por nome, estado, cidade ou bairro': 'pesquise por pessoa'}  
                        onChange={e => setSearchTerm(e.target.value)}
                />
                <button className="search-several-cancel">Cancelar</button>
            </div>
            <div>
              
            {searchTerm ? (
            <div className="resultado">
            <p className="titulo-result">Resultados</p>  
             {results.map(r => (
              <div key={r.id.raw}>
                 <div className="content-info">
                    <div className="usuarios-info">
                        <div>
                         <span dangerouslySetInnerHTML={{ __html: r.nome.snippet }}></span>
                        </div>
                        <div>
                          <button className="button-telefone" onMouseEnter={this.adicionaBotao}>
                             <FontAwesomeIcon icon={faArrowRight} className={displayIcon}/>
                             <span>21 2129-0202</span>
                          </button>
                          </div>
                         </div>
                           <div className="info-location">
                              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-location" />
                                 <div className="info-text-location">
                                 <span className="location-text-endereco" dangerouslySetInnerHTML={{ __html: r.endereco.snippet }}></span>
                                   -  
                                  <span className="location-text-outros" dangerouslySetInnerHTML={{ __html: r.bairro.snippet }}></span>   
                                    - 
                                  <span className="location-text-outros" dangerouslySetInnerHTML={{ __html: r.cidade.snippet }}></span>  
                                     - 
                                  <span className="location-text-outros" dangerouslySetInnerHTML={{ __html: r.estado.snippet }}></span>
                                  </div>
                                </div>
                          </div>
              </div> 
            ))}
            <div className="paginacao">
              <ResultsPerPage options={[5, 10, 15]} />
              <PagingInfo />
              <Paging />
            </div>
           </div>               
           ) : null }         
           </div>
        </div>
        );
        }}
    </WithSearch>
    </SearchProvider>
    </div> 
    </div>
  );
}
}
