import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, fonts } from "../styles/appStyles";

// images
import logo from "../assets/logo.png";
import usdcIcon from "../assets/png_usdc_56px@3x.png";
import usdtIcon from "../assets/png_usdt_56px@3x.png";
import daiIcon from "../assets/png_dai_56px@3x.png";
import wbtcIcon from "../assets/png_wbtc_56px@3x.png";
import frenbtcIcon from "../assets/png_frenbtc_56px@3x.png";
import crvrenwbtcIcon from "../assets/png_crvrenwbtc_56px@3x.png";
import wikiIcon from "../assets/wiki.png";

const Header = styled.h1`
  font-family: ${fonts.headerFont};
  margin-bottom: 2.4rem;
  font-size: 2.4rem;
`;
const Panel = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.style.lightBackground};
  color: ${(props) => props.theme.style.primaryFontColor};
  font-size: 1.4rem;
  font-family: ${fonts.contentFont};
  padding: 1.5rem;
  border: ${(props) => props.theme.style.mainBorder};
  border-radius: 0.5rem;
  box-sizing: border-box;
  box-shadow: ${(props) => props.theme.style.panelBoxShadow};
`;

const TokenList = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const tokens = [
  {
    name: "FARM",
    url: "https://harvestfi.github.io/add-farm/",
    image: logo,
  },
  {
    name: "fUSDC",
    url: "https://harvestfi.github.io/add-fusdc/",
    image: usdcIcon,
  },
  {
    name: "fUSDT",
    url: "https://harvestfi.github.io/add-fusdt/",
    image: usdtIcon,
  },
  {
    name: "fDAI",
    url: "https://harvestfi.github.io/add-fdai/",
    image: daiIcon,
  },
  {
    name: "fwBTC",
    url: "https://harvestfi.github.io/add-fwbtc/",
    image: wbtcIcon,
  },
  {
    name: "frenBTC",
    url: "https://harvestfi.github.io/add-frenbtc/",
    image: frenbtcIcon,
  },
  {
    name: "fcrvRenWBTC",
    url: "https://harvestfi.github.io/add-fcrvrenwbtc/",
    image: crvrenwbtcIcon,
  },
];

const Token = ({ className, name, url, image }) => (
  <div className={className}>
    <a target="_blank" rel="noopener noreferrer" href={url}>
      <img alt={name} src={image}></img>
      {name}
    </a>
  </div>
);

const StyledToken = styled(Token)`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.style.linkColor};
  }

  img {
    height: 56px;
    width: 56px;
    margin-bottom: 4px;
  }

  @media only screen and (max-width: 768px) {
    display: block;
    width: 50%;
    margin-bottom: 50px;
  }
`;

const AddTokens = ({ state }) => {
  return (
    <ThemeProvider theme={state.theme === "dark" ? darkTheme : lightTheme}>
      <Panel>
        <Header>Add assets to wallet</Header>

        <TokenList>
          {tokens.map((t) => (
            <StyledToken key={t.name} {...t} />
          ))}
        </TokenList>
      </Panel>
    </ThemeProvider>
  );
};

export default AddTokens;
