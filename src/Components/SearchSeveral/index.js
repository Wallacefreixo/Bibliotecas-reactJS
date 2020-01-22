import React, { Component } from 'react';
import './style.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";


//Funções de ordenação em ordem alfabética
function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}
function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

export default class SearchSeveral extends Component {
    state = {
        filter: "",
        visible: false,
        data: [],
        order:  'asc',
        orderBy:  'nome',
        page:  0,
        dense:  false,
        rowsPerPage:  5,
        displayIcon: 'display-button-false',
     };
      
     //Aqui vai dados ou api 
      componentDidMount(){
        this.setState({  data: [
            {
              nome: "Jayne",
              endereco: "Rua nova",
              bairro: "Maceió",
              cidade: "Niteroi",
              uf:"RJ",
              telefone: "21 0000-0000",
            },
            {
              nome: "Arthur",
              endereco: "Rua 2",
              bairro: "Trevo",
              cidade: "São Paulo",
              uf:"SP",
              telefone: "21 0000-0000",
            },
            {
              nome: "Vanessa",
              endereco: "Avenida mendonça",
              bairro: "Teresina",
              cidade: "Rio Branco",
              uf:"AC",
              telefone: "21 0000-0000",
            },
            {
              nome: "Maria",
              endereco: "Rua 123",
              bairro: "tal",
              cidade: "Teste",
              uf:"DF",
              telefone: "21 0000-0000",
            },
            {
              nome: "Marco",
              endereco: "Rua 00",
              bairro: "avenida",
              cidade: "algo",
              uf:"BH",
              telefone: "21 0000-0000",
            },
            {
              nome: "Marcelo",
              endereco: "Rua 123",
              bairro: "praça",
              cidade: "outro",
              uf:"PE",
              telefone: "21 0000-0000",
            },
            {
                nome: "Marcone",
                endereco: "Rua 123",
                bairro: "praça",
                cidade: "outro",
                uf:"PE",
                telefone: "21 0000-0000",
              },
              {
                nome: "Maicosuel",
                endereco: "Rua 123",
                bairro: "praça",
                cidade: "outro",
                uf:"PE",
                telefone: "21 0000-0000",
              }
          ] })
      }
      //atualiza o valor digitado no input
      handleChangeInput = event => {
        this.setState({ filter: event.target.value , visible: true});
        
      }
      //função que desativa resultados
      cancelResult = event =>{
          event.preventDefault();
          this.setState({ visible: false, filter: "", page:0, displayIcon:'display-button-false'})
      }

      //função atualiza valor da página
      handleChangePage = (event, newPage) => {
        this.setState({page: newPage});
        
      };
      //função atualiza linhas por página
      handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: parseInt(event.target.value, 10) })
        this.setState({page:0})
      };
      adicionaBotao = () =>{
          this.setState({displayIcon: 'display-button-true '})
      }

      render() {
        const { filter, data, rowsPerPage, page,dense, order, orderBy, displayIcon, visible} = this.state;

        let tabela = visible;
        //converter o valor presente no filter antes de renderizar os dados na tela
        const lowercasedFilter = filter.toLowerCase();
        //converter o array de data tb em minusculo e compara com o valor na váriavel filter 
        let filteredData = data.filter(item => {
            return Object.keys(item).some(key =>
              item[key].toLowerCase().includes(lowercasedFilter)
            );
          });
        //limpa o campo se o usuário apagar o value do input e oculta tabela
        if(!filter.length>0){
            filteredData=[];
            tabela=false;
        }
        //calcula as linhas por página para fazer páginação
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

       
        return (
            <div className="search-several-container">
            <div class="search-several-input-wrapper">
                  <FontAwesomeIcon icon={faSearch} className="search-several-input-icon" />
                  <input type="text" className="search-several-input-text" value={filter} onChange={this.handleChangeInput} placeholder="Pesquise por nome, endereço, bairro, cidade, uf"  />
                  <button className="search-several-cancel" onClick={this.cancelResult} >Cancelar</button>
            </div>
            {tabela ? (
            <Paper className="MuiPaper-rootm">
                <p className="titulo-result">Resultados</p>
              <TableContainer className="MuiTableContainer-root">
                <Table>
                  <TableBody>
                    {stableSort(filteredData, getSorting(order, orderBy))
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => {
                        const labelId = `enhanced-table-checkbox-${index}`;
                        return (
                          <TableRow
                            tabIndex={-1}
                            key={row.nome}>
                            <TableCell component="th" id={labelId} style={{border:0}}>
                            <div className="content-info">
                                  <div className="usuarios-info">
                                      <div>
                                          {row.nome}
                                      </div>
                                      <button className="button-telefone" onMouseEnter={this.adicionaBotao}>
                                          <FontAwesomeIcon icon={faMapMarkerAlt} className={displayIcon} />
                                          <p>{row.telefone}</p>
                                      </button> 
                                  </div>
                                  <div className="info-location">
                                      <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-location" />
                                      <div className="info-text-location">
                                          {row.endereco} - {row.bairro} - {row.cidade} - {row.uf}
                                      </div>
                                  </div>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredData.length}
                rowsPerPage={rowsPerPage}
                labelDisplayedRows = {({from, to, count}) => `${from}-${to} de ${count}`}
                labelRowsPerPage = {'Registros'} 
                page={page}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
              />
            </Paper>                
           ) : null
         }
          </div>
        );
      }
}
    