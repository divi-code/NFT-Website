import React from 'react';
import styled from "styled-components";
import {Row, Col} from 'antd';
import CardImg1 from '../assets/imgs/cardImg1.png'

function Hero() {
    return (
        <Container>
            <Row gutter={[12, 12]} align={"center"} justify={"around"}>
                <Col lg={12} md={24} align={"center"}>
                    <ContentContainer>
                        <Title>Scoby Gold</Title>
                        <Desc>Welcome to Scoby Gold, the trading post for NFTs that reflect your values and unlock
                            amazing
                            powers, experiences, projects and teams in our live, audio-video centered Web3 Creator
                            Ecosystem.</Desc>
                        <Button>mint an asset now</Button>
                    </ContentContainer>
                </Col>
                <Col lg={12} md={24} align={"center"}>
                    <CardsContainer>
                        <Card>
                            <CardImage src={CardImg1}/>
                            <CardTitle>Transformer</CardTitle>
                            <CardDesc>Weaves cocoons of transformation where collectors can initiate themselves into the
                                mysteries of their own soul.</CardDesc>
                        </Card>
                        <Card1>
                            <CardImage src={CardImg1}/>
                            <CardTitle>Creator</CardTitle>
                            <CardDesc>In council with the Community of All Beings, shifts the quantum field to open new
                                possibility spaces for the imaginal realm.</CardDesc>
                        </Card1>
                    </CardsContainer>
                </Col>
            </Row>
        </Container>
    )
}


export default Hero

const Container = styled.div`
  margin-top: 48px;
`

const ContentContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  text-align: center;

`
const Desc = styled.p`
  color: #fff;
  font-size: 20px;
  font-family: "TTNormsRegular";
  line-height: 115%;
`
const Title = styled.h1`
  font-size: 48px;
  font-family: "TTNormsBold";
  background: -webkit-linear-gradient(left, #F97ADD, #683AFE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Button = styled.button`
  padding: 8px 24px;
  color: #fff;
  font-family: "TTNormsMedium";
  background: #CD068E;
  cursor: pointer;
  text-transform: capitalize;
  border: none;
  border-radius: 8px;
  transition: all ease-in .3s;

  &:hover {
    background: #fff;
    color: #CD068E;
  }
`
const CardsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
`

const Card = styled.div`
  width: 205px;
  min-height: 273px;
  background: linear-gradient(91.53deg, rgba(255, 255, 255, 0.16) 1.89%, rgba(255, 255, 255, 0.105) 103.72%);
  border: 1px solid rgba(242, 242, 242, 0.4);
  box-sizing: border-box;
  box-shadow: 1px 0px 5px 3px rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  border-radius: 14px;
  transform: rotate(-15.4deg);
  z-index: 2;
  margin-top: 15%;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  user-select: none;
  transition: all ease-in 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`
const Card1 = styled.div`
  width: 205px;
  height: 273px;
  background: linear-gradient(91.53deg, rgba(255, 255, 255, 0.16) 1.89%, rgba(255, 255, 255, 0.105) 103.72%);
  border: 1px solid rgba(242, 242, 242, 0.4);
  box-sizing: border-box;
  box-shadow: 1px 0px 5px 3px rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  border-radius: 14px;
  transform: rotate(-4.82deg);
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: all ease-in 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`
const CardTitle = styled.h1`
  font-size: 18px;
  color: #fff;
  font-family: "TTNormsBold";
`
const CardDesc = styled.p`
  font-size: 12x;
  color: #fff;
  font-family: "TTNormsRegular";
`
const CardImage = styled.img`
  height: 118px;
  object-fit: contain;
`
