import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { logo_desktop, investments_2, language_sp, language_en } from "../img";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  const { t } = useTranslation();
  const changeLanguage = (lan) => i18n.changeLanguage(lan);
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setVisible(false);
    });
  });

  return (
    <HeaderComponent>
      <IconButton
        edge="start"
        className="menuButton"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon color="primary" onClick={onClick} />
      </IconButton>

      <Link to="/" className="homeLink">
        <Logo src={logo_desktop} />
      </Link>
      <Investments src={investments_2} />
      <div className={visible ? `menuMobile` : `contactFlagCt`}>
        {visible && (
          <Link to="/">
            <p>HOME</p>
          </Link>
        )}
        <Link to="/contact">
          <p>{t("contact.title")}</p>
        </Link>
        <div className="btnContainer">
          <Button onClick={() => changeLanguage("es")}>
            <img
              src={language_sp}
              alt="spanish language selector"
              className="flags"
            />
          </Button>
          <Button onClick={() => changeLanguage("en")}>
            <img
              src={language_en}
              alt="english language selector"
              className="flags"
            />
          </Button>
        </div>
      </div>
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.header`
  width: 100vw;
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  -webkit-box-shadow: 1px 5px 14px -6px rgba(105, 105, 105, 1);
  -moz-box-shadow: 1px 5px 14px -6px rgba(105, 105, 105, 1);
  box-shadow: 1px 5px 14px -6px rgba(105, 105, 105, 1);
  z-index: 99;
  .menuButton {
    @media (max-width: 960px) {
      display: block;
    }
    display: none;
    margin-left: 0;
  }
  .homeLink {
    @media (max-width: 600px) {
      padding-right: 1.2rem;
    }
    @media (min-width: 960px) {
      width: 426px;
    }
    @media (min-width: 600px) and (max-width: 960px) {
      width: 426px;
      margin-right: 1rem;
    }
    height: 100%;
    display: flex;
    align-items: center;
    border-right: 2px solid #c6ced3;
  }
  .contactFlagCt {
    @media (max-width: 960px) {
      display: none;
    }
    display: flex;
    flex-direction: row;
    padding: 0rem 2rem;
    background: #7ea4b8;
    align-items: center;
    height: 100%;

    p {
      margin-right: 1rem;
      text-transform: uppercase;
      color: #fff;
    }
  }
  .menuMobile {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 75px;
    left: 20px;
    z-index: 999;
    height: fit-content;
    background: #7ea4b8;
    padding: 1rem;
    text-decoration: none;
    p {
      text-transform: uppercase;
      color: #fff;
      font-size: 13px;
    }
    .flags {
      padding: 0.3rem;
    }
  }
  .btnContainer {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 1rem;
    @media (max-width: 960px) {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0;
    }
  }
`;

const Logo = styled.img`
  width: 300px;
  margin-left: 2rem;
  @media (max-width: 600px) {
    max-width: 190px;
    width: 100%;
    height: auto;
    margin-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const Investments = styled.img`
  @media (max-width: 600px) {
    max-width: 95px;
    width: 100%;
    heigth: auto;
    margin-left: 0.5rem;
  }
  @media (max-width: 900px) {
    width: 130px;
  }
  width: 250px;
  margin-left: 2rem;
  border-left: thin solid grey;
  margin-right: auto;
`;

const Button = styled.a`
  margin: 0;
  cursor: pointer;
`;
