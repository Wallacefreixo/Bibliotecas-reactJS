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
          <p className="tituloprojeto">PROJETO </p>
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
