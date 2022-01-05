import React, {useState} from "react";
import styled from "styled-components";
import Logo from "../assets/imgs/navbarLogo.png";
import ChooseWallet from "./ChooseWallet";
const Navbar = ({setConnectWallet, chosenWallet}) => {
    const {name, icon} = chosenWallet ? chosenWallet : ""
    return (<Container>
        <LogoContainer>
            <LogoImage src={Logo}/>
        </LogoContainer>
        <RightContainer>
            <DownloadBtn>download our app</DownloadBtn>
            {!chosenWallet && <ConnectButton onClick={() => setConnectWallet(true)}>Connect your wallet</ConnectButton>}
            {chosenWallet && <WalletButton onClick={() => setConnectWallet(true)}>{name}
                <img src={icon} width={"32px"}
                     height={"32px"} alt=""/>
            </WalletButton>}
        </RightContainer>
    </Container>);
};

export default Navbar;

const Container = styled.div`
  padding: 32px 12px;
  min-heigth: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoContainer = styled.div`
  width: 64px;
  height: 64px;
`
const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`
const RightContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
`
const DownloadBtn = styled.a`
  position: relative;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  font-family: "TTNormsBold";
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  transition: all ease-in-out .3s;

  &:after {
    transition: all ease-in-out 0.4s;
    content: "";
    width: 0px;
    height: 3px;
    margin-top: 3px;
    background: #D858BC;
  }

  &:hover {
    color: #D858BC;

    &:after {
      width: 100%;
    }
  }
`

const ConnectButton = styled.button`
  cursor: pointer;
  max-width: 200px;
  font-size: 14px;
  font-family: "TTNormsBold";
  color: #fff;
  border-radius: 8px;
  padding: 8px 12px;
  transition: all ease-in-out .5s;
  background: linear-gradient(94.35deg, rgba(216, 88, 188, 0.5) -3.59%, rgba(60, 0, 255, 0.5) 102.16%);
  border: none;

  &:hover {
    transform: scale(1.08);
  }
`
const WalletButton = styled.button`
  cursor: pointer;
  max-width: 200px;
  font-size: 14px;
  font-family: "TTNormsBold";
  color: #fff;
  border-radius: 8px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all ease-in-out .5s;
  background: linear-gradient(94.35deg, rgba(216, 88, 188, 0.5) -3.59%, rgba(60, 0, 255, 0.5) 102.16%);
  border: none;

  &:hover {
    transform: scale(1.08);
  }
`
