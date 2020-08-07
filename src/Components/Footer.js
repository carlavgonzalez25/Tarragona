import React, { Fragment, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { background, logo_hics, logo_hicsvyda } from "../img";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Home = () => {
  const { t } = useTranslation();
  const changeLanguage = (lan) => i18n.changeLanguage(lan);
  const [isDesktop, setIsDesktop] = useState();

  useEffect(() => {
    setIsDesktop(window.innerWidth > 960);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsDesktop(window.innerWidth > 960);
    });
    console.log(window.innerWidth > 960);
  });

  return (
    <Footer>
      {isDesktop ? (
        <Fragment>
          {tarragona()}
          {alliance()}
          {rights(t)}
        </Fragment>
      ) : (
        <Fragment>
          {alliance()}
          <div>
            {tarragona()}
            {rights(t)}
          </div>
        </Fragment>
      )}
    </Footer>
  );
};

const tarragona = () => (
  <div className="webContainer">
    <p className="tarragona">
      <strong>TARRAGONA</strong>LLC
    </p>
    <p className="web">www.tarragona.us</p>
  </div>
);

const alliance = () => (
  <div className="allianceContainer">
    <p>alliances</p>
    <img className="hics" src={logo_hics}></img>
    <img className="hicsvyda" src={logo_hicsvyda}></img>
  </div>
);

const rights = (t) => (
  <div className="contactContainer">
    <span className="contact">{t("contact.title")}</span>
    <span className="rights">2020. All right reserved</span>
  </div>
);

export default Home;

const Footer = styled.footer`
  @media (max-width: 960px) {
    flex-direction: column;
  }
  display: flex;
  height: 90px;
  width: 100%;
  background: #fff;
  z-index: 1;
  div {
    display: flex;
    align-items: center;
  }
  .webContainer {
    display: flex;
    flex-direction: column;
    padding-right: 3rem;
    justify-content: flex-start;
    @media (max-width: 600px) {
      padding: 1rem;
    }

    .tarragona {
      text-transform: uppercase;
      font-size: 16px;
      margin-bottom: 0;
      color: #888a8c;
    }
    .web {
      color: #c4c6c8;
      font-size: 13px;
      margin-top: 0;
    }
    @media (min-width: 600px) {
      width: 420px;
    }
  }
  .allianceContainer {
    border-left: 2px solid #c6ced3;
    padding-left: 1rem;
    @media (max-width: 600px) {
      padding: 2rem 1rem;
      justify-content: center;
    }
    @media (max-width: 960px) {
      -webkit-box-shadow: 1px 5px 14px -6px rgba(105, 105, 105, 1);
      -moz-box-shadow: 1px 5px 14px -6px rgba(105, 105, 105, 1);
      box-shadow: 1px 5px 14px -6px rgba(105, 105, 105, 1);
      padding: 2rem 1rem;
      justify-content: center;
    }

    p {
      align-self: flex-start;
      text-transform: uppercase;
      font-size: 12px;
      color: #888a8c;
    }
    img {
      margin: 0 1rem;
    }
    .hics {
      height: 55px;
      @media (max-width: 600px) {
        height: auto;
        width: 100%;
        max-width: 110px;
      }
    }
    .hicsvyda {
      height: 55px;
      @media (max-width: 960px) {
        /*height: 35px;*/
      }
      @media (max-width: 600px) {
        height: auto;
        width: 100%;
        max-width: 150px;
      }
    }
  }
  .contactContainer {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    text-align: end;
    span {
      width: 80%;
      height: 50%;
      border-left: 2px solid #c6ced3;
      padding-right: 2rem;
    }
    .contact {
      border-bottom: 2px solid #c6ced3;
      text-transform: uppercase;
    }
    .rights {
    }
  }
`;
