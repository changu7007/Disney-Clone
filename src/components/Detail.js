import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
            </Background>

            <ImgTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"/>
            </ImgTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png"/>
                    <span>PLAY</span>
                </PlayButton>
                <Trailerbutton>
                <img src="/images/play-icon-white.png"/>
                    <span>Trailer</span>
                </Trailerbutton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatch>
                    <img src="/images/group-icon.png"/>
                </GroupWatch>
            </Controls>
            <SubTitle>
                2018 - 7m - Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
            During the late '80s, Hemant Shah, the man with the Midas touch, pulled off the biggest hustle that shook India's financial fabric. Inspired by true events.
            </Description>
        </Container>
    )
}

export default Detail

const Container= styled.div `
 min-height : calc(100vh - 70px);
 padding: 0 calc(3.5vw + 5px);   
 position: relative;
`

const Background = styled.div `
    position: fixed;
    top: 0;
    left:0;
    bottom:0;
    right:0;
    z-index: -1;
    opacity:0.8;

    img {
        width:100%;
        height:100%;
        object-fit: cover;
    }
`

const ImgTitle= styled.div `
  height:30vh;
  min-height:170px;
  width: 35vw;
  min-width:200px;
  margin-top: 60px;
  

  img {
      width:100%;
      height:100%;
      object-fit: contain;
  }
`

const Controls = styled.div `
    display:flex;
    align-items : center;


`

const PlayButton = styled.button `

    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right: 22px;
    display:flex;
    align-items: center;
    height: 56px;
    background: rgb(249,249,249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198,198,198);
    }
`
const Trailerbutton = styled(PlayButton) `
  background: rgb(0,0,0,0.3);
  border: 1px solid  rgb(249,249,249);
  color : rgb(249,249,249);
  text-transform: uppercase;
`
const AddButton = styled.button `
    margin-right: 16px;
    width:44px;
    height:44px;
    display: flex;
    align-items:center;
    justify-content: center;
    border-radius:50%;
    border: 2px solid white;
    background-color:  rgb(0,0,0,0.6);
    cursor: pointer;
    span {
        font-size:30px;
        color: white;
    }

`

const GroupWatch = styled(AddButton)`
    background:  rgb(0,0,0);

`

const SubTitle = styled.div `
color :rgb(249,249,249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
`

const Description = styled.div `
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
    max-width: 760px;
`