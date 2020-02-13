import React from "react";
import "./style.css";
import Dados from "./Data.json";

const Janela = ({ handleClose, validacaoJanela, codigo }) => {
  const showHideClassName = validacaoJanela
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="ge-modal-content">
        <section className="modalTemplate modalType__oiPurple  undefined">
          <a>
            <span className="close" onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-639.5 400.5 27 27"
                enable-background="new -639.5 400.5 27 27"
              >
                <path d="M-612.5 401.9l-1.4-1.4-12.1 12.1-12.1-12.1-1.4 1.4 12.1 12.1-12.1 12.1 1.4 1.4 12.1-12.1 12.1 12.1 1.4-1.4-12.1-12.1 12.1-12.1z"></path>
              </svg>
            </span>
          </a>
          <header className="header">
            <span className="logo">
              <h2>Logo</h2>
            </span>
            {Dados.map(info => {
              return (
                <div>
                  {codigo === info.codigo ? (
                    <div>
                      <h2>{info.categoria}</h2>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </header>
          {Dados.map(info => {
            return (
              <div>
                {codigo === info.codigo ? (
                  <div>
                    <div className="modalTemplate-content">
                      <div className="modal-block">
                        <div>
                          <span className="ge-subtitle">{info.subtitulo}</span>
                          <h1>{info.titulo}</h1>
                          <ul className="ge-list">
                            <li>
                              <h4>Como funciona</h4>
                              <div>
                                <p>{info.funcionamento}</p>
                              </div>
                            </li>
                            <li>
                              <h4>A quem se destina</h4>
                              <div>
                                <p>{info.destino}</p>
                                <a href={info.servicoUrl}>
                                  <p>{info.textoServicoUrl}</p>
                                </a>
                              </div>
                            </li>
                            <li>
                              <h4>Como solicitar o serviço</h4>
                              <div>
                                <p>{info.servico}</p>
                              </div>
                            </li>
                            <li>
                              {info.info !== "" ? (
                                <div>
                                  <h4>Informações legais</h4>
                                </div>
                              ) : (
                                <div></div>
                              )}
                              <div>
                                <a href={info.url}>
                                  <p>{info.info}</p>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Janela;
