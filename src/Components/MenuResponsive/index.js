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
              data-tooltipOPI="Ofertas"
            >
              OP1
            </a>
          </li>
          <li className="op-novo-menu-item">
            <a
              className="op-novo-regular-font-menu-item"
              href="#ofertas-produtos-atacado"
              data-tooltipORPA="Ofertas 2"
            >
              OP2
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
              Ofertas 
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
              Ofertas 2
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
            </a>
            <span className="op-novo-title">Projeto</span>
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
