import React, { Component } from "react";
import "./style.css";

class OPHeader extends Component {
  state = {
    openMenu: "none"
  };

  openMenu() {
    this.setState({ openMenu: "block" });
  }

  closeMenu() {
    this.setState({ openMenu: "none" });
  }
  render() {
    const itensMenuDesktop = () => {
      return (
        <ul className="op-novo-menu">
          <li className="op-novo-menu-item">
            <a className="op-novo-regular-font-menu-item" href="#produtos">
              Produtos
            </a>
          </li>
          <li className="op-novo-menu-item">
            <a
              className="op-novo-regular-font-menu-item tooltip-top"
              href="#ofertas-publicas-interconexao"
              data-tooltipOPI="Ofertas Públicas de Interconexão"
            >
              OPI
            </a>
          </li>
          <li className="op-novo-menu-item">
            <a
              className="op-novo-regular-font-menu-item"
              href="#ofertas-produtos-atacado"
              data-tooltipORPA="Ofertas de Referência de Produtos de Atacado"
            >
              ORPA
            </a>
          </li>
          <li className="op-novo-menu-item">
            <a className="op-novo-regular-font-menu-item" href="#atendimento">
              Atendimento
            </a>
          </li>
        </ul>
      );
    };

    const itensMenuMobile = () => {
      return (
        <ul className="op-menu-mobile" style={{ display: this.state.openMenu }}>
          <div className="op-close-menu" onClick={() => this.closeMenu()}>
            <span>+</span>
          </div>
          <li className="op-menu-mobile-title">
            <span>MENU</span>
          </li>
          <li
            className="op-mobile-item"
            data-context="link_menu-mobile-superior"
            onClick={() => this.closeMenu()}
          >
            <a className="op-novo-regular-font-menu-item" href="#produtos">
              Produtos
            </a>
          </li>
          <li
            className="op-mobile-item"
            data-context="link_menu-mobile-superior"
            onClick={() => this.closeMenu()}
          >
            <a
              className="op-novo-regular-font-menu-item"
              href="#ofertas-publicas-interconexao"
            >
              Ofertas Públicas de Interconexão
            </a>
          </li>
          <li
            className="op-mobile-item"
            data-context="link_menu-mobile-superior"
            onClick={() => this.closeMenu()}
          >
            <a
              className="op-novo-regular-font-menu-item"
              href="#ofertas-produtos-atacado"
            >
              Ofertas de Referência de Produtos de Atacado
            </a>
          </li>
          <li
            className="op-mobile-item"
            data-context="link_menu-mobile-superior"
            onClick={() => this.closeMenu()}
          >
            <a className="op-novo-regular-font-menu-item" href="#atendimento">
              Atendimento
            </a>
          </li>
        </ul>
      );
    };

    return (
      <div className="scroll-menu solutions__menu ">
        <div className="op-novo-header">
          <div className="op-novo-section1">
            <a className="op-novo-logo" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69 60"><g fill="#9F2AFF" class="oi"><path d="M40.3 23.9c1.5 0 2.8-1.3 2.8-2.9 0-1.5-1.3-2.8-2.8-2.8s-2.8 1.3-2.8 2.8c0 1.6 1.2 2.9 2.8 2.9zm-12.4 1.8c-4.5 0-7.8 3.5-7.8 8.3s3.3 8.3 7.8 8.3 7.7-3.4 7.8-8.3c0-4.8-3.3-8.3-7.8-8.3zm0 12.6c-2.1 0-3.2-2.2-3.2-4.3s1.1-4.2 3.2-4.2 3.1 2.1 3.2 4.2c0 2.1-1.1 4.3-3.2 4.3z"></path><ellipse cx="40.4" cy="34" rx="2.9" ry="8.3"></ellipse></g><g fill="#FFF" class="ameba"><path d="M27.9 29.7c-2.1 0-3.3 2.1-3.3 4.3s1.2 4.4 3.3 4.4 3.3-2.2 3.3-4.4c-.1-2.2-1.2-4.3-3.3-4.3z"></path><path d="M53.9 15.7C46.6 10.8 41 .2 25.9.2 8.9.2 0 15.7 0 28.9c0 19.3 16.3 30.9 36.2 30.9 18.2 0 32.2-13.2 32.2-23.9 0-10-6.3-14.8-14.5-20.2zm-26 26.5c-4.6 0-7.7-3.6-7.7-8.2s3.1-8.2 7.7-8.2 7.7 3.6 7.7 8.2c-.1 4.6-3.1 8.2-7.7 8.2zm12.4-23.9c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.8-2.7 2.8-2.7-1.2-2.7-2.8c0-1.5 1.2-2.7 2.7-2.7zm.1 23.9c-1.5 0-2.8-3.7-2.8-8.2s1.3-8.2 2.8-8.2 2.8 3.7 2.8 8.2c0 4.6-1.3 8.2-2.8 8.2z"></path></g></svg>
            </a>
            <span className="op-novo-title">Outras Operadoras</span>
          </div>
          <nav>
            {itensMenuDesktop()}
            <div className="op-open-menu" onClick={() => this.openMenu()}>
              <span>☰</span>
            </div>
            {itensMenuMobile()}
          </nav>
        </div>
      </div>
    );
  }
}
export default OPHeader;
