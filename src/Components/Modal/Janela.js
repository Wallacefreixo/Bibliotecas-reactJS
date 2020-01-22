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
              <svg viewBox="0 0 312 294">
                <defs>
                  <linearGradient
                    x1="5"
                    y1="147"
                    x2="307"
                    y2="147"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#D528AB"></stop>
                    <stop offset=".136" stop-color="#C129C9"></stop>
                    <stop offset=".214" stop-color="#B229E1"></stop>
                    <stop offset=".297" stop-color="#A72AF2"></stop>
                    <stop offset=".387" stop-color="#A12AFC"></stop>
                    <stop offset=".5" stop-color="#9F2AFF"></stop>
                    <stop offset=".597" stop-color="#9C2DFF"></stop>
                    <stop offset=".676" stop-color="#9237FF"></stop>
                    <stop offset=".748" stop-color="#8248FF"></stop>
                    <stop offset=".815" stop-color="#6A60FF"></stop>
                    <stop offset=".881" stop-color="#4C7FFF"></stop>
                    <stop offset=".943" stop-color="#28A4FF"></stop>
                    <stop offset="1" stop-color="#00CDFF"></stop>
                  </linearGradient>
                  <linearGradient
                    id="pink-gradient"
                    x1="5"
                    y1="147"
                    x2="307"
                    y2="147"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#E9278B"></stop>
                    <stop offset=".7" stop-color="#FF6C00"></stop>
                    <stop offset=".74" stop-color="#FF7200"></stop>
                    <stop offset=".793" stop-color="#FF8200"></stop>
                    <stop offset=".852" stop-color="#FF9D00"></stop>
                    <stop offset=".917" stop-color="#FFC300"></stop>
                    <stop offset=".985" stop-color="#FFF300"></stop>
                    <stop offset="1" stop-color="#FFFF00"></stop>
                  </linearGradient>
                  <clipPath id="oi-clip-logo-white">
                    <path
                      fill="transparent"
                      d="M0 0v294h312V0H0zm188.2 99.5c6.7 0 12.1 5.4 12.1 12.1 0 6.7-5.4 12.2-12.1 12.2-6.7 0-12.1-5.4-12.1-12.2-.1-6.7 5.4-12.1 12.1-12.1zm-55 105.8c-20.3 0-33.9-16.1-33.9-36.3 0-20.2 13.5-36.3 33.9-36.3 20.3 0 33.8 16.1 33.8 36.3 0 20.2-13.5 36.3-33.8 36.3zm55.1 0c-6.8 0-12.4-16.2-12.4-36.3 0-20 5.6-36.3 12.4-36.3 6.8 0 12.4 16.2 12.4 36.3 0 20.1-5.5 36.3-12.4 36.3zm-55.1-17.1c-9.3 0-14.5-9.6-14.5-19.3 0-9.7 5.2-19 14.5-19s14.4 9.3 14.4 19-5.1 19.3-14.4 19.3z"
                    ></path>
                  </clipPath>
                </defs>
                <path
                  fill="#fff"
                  d="M38.1 205.5c-37 145 233.7 52.7 228.8-34.5-3.6-63.2-68-124-121.8-148.6C47-22.3 75.3 59.8 38.1 205.5z"
                  clip-path="url(#oi-clip-logo-white)"
                ></path>
                <path
                  fill="transparent"
                  d="M188.2 123.8c6.7 0 12.1-5.4 12.1-12.2 0-6.7-5.4-12.1-12.1-12.1-6.7 0-12.1 5.4-12.1 12.1-.1 6.7 5.4 12.2 12.1 12.2zm.1 9c-6.8 0-12.4 16.2-12.4 36.3 0 20 5.6 36.3 12.4 36.3 6.8 0 12.4-16.2 12.4-36.3 0-20.1-5.5-36.3-12.4-36.3zm-55.1-.1c-20.3 0-33.9 16.1-33.9 36.3 0 20.2 13.5 36.3 33.9 36.3 20.3 0 33.8-16.1 33.8-36.3 0-20.2-13.5-36.3-33.8-36.3zm0 55.5c-9.3 0-14.5-9.6-14.5-19.3 0-9.7 5.2-19 14.5-19s14.4 9.3 14.4 19-5.1 19.3-14.4 19.3z"
                ></path>
              </svg>
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
