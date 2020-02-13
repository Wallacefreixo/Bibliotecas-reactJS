import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

//importando páginas
import Home from  './Components/Home';
import Search from './Components/Search';
import Modal from './Components/Modal';
import MenuResponsive from './Components/MenuResponsive';
import SearchSeveral from './Components/SearchSeveral';
import ElasticSearch from './Components/ElasticSearch';
import Atalhos from './Components/Atalhos';
import Teste from './Components/Teste';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Search" component={Search} />
      <Route exact path="/MenuResponsive" component={MenuResponsive} />
      <Route exact path="/ElasticSearch" component={ElasticSearch} />
      <Route exact path="/Atalhos" component={Atalhos} />
      <Route exact path="/Modal" component={Modal} />
      <Route exact path="/SearchSeveral" component={SearchSeveral} />
      <Route exact path="/Teste" component={Teste} />
    </Switch>
  </BrowserRouter>
);

export default Routes;