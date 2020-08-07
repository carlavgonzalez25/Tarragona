import React from "react";
import styled, { css } from "styled-components";
import { background } from "../img";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Background>
        <Opacity desktop>
          <p>{t("text")}</p>
        </Opacity>
      </Background>
      <Opacity mobile>
        <p>{t("text")}</p>
      </Opacity>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Background = styled.div`
  display: flex;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 165px);
  width: 100%;
  -webkit-box-shadow: 1px 5px 14px -6px rgba(105, 105, 105, 1);
  -moz-box-shadow: 1px 5px 14px -6px rgba(105, 105, 105, 1);
  box-shadow: 1px 5px 14px -6px rgba(105, 105, 105, 1);
  z-index: 50;
  @media (max-width: 600px) {
    box-shadow: 1px 8px 14px -6px rgb(37 36 36);
    -webkit-box-shadow: 1px 8px 14px -6px rgb(37 36 36);
    -moz-box-shadow: 1px 8px 14px -6px rgb(37 36 36);
  }
`;

const Opacity = styled.div`
  width: 428px;
  height: 348px;
  background-color: #333b3eab;
  @media (min-width: 600px) and (max-width: 960px) {
    margin-right: 1rem;
    width: 476px;
  }

  p {
    padding: 3rem 2rem 1rem 7rem;
    font-size: 18px;
    text-align: left;
    line-height: 1.8rem;
    color: #fff;
  }

  ${(props) =>
    props.mobile &&
    css`
      @media (min-width: 601px) {
        display: none !important;
      }
      width: 100% !important;
      height: fit-content;
      background: #747a7f;
      p {
        padding: 1rem;
      }
    `}
  ${(props) =>
    props.desktop &&
    css`
      @media (max-width: 600px) {
        display: none !important;
      }
    `}
`;

const Footer = styled.footer`
  display: flex;
  height: 100px;
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
    min-width: 420px;
    padding-right: 3rem;
    justify-content: flex-start;
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
  }
  .allianceContainer {
    border-left: 2px solid #c6ced3;
    padding-left: 1rem;
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
    }
    .hicsvyda {
      height: 55px;
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
