import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom"
import db from '../firebase';

function Detail() {
    const { id } = useParams();
    
    const [ movie, setMovie] = useState()


    console.log(id);

    useEffect(()=> {
            db.collection("movies")
            .doc(id)
            .get()
            .then((doc)=>{
                if(doc.exists){
                    setMovie(doc.data());
                } else {

                }
            })
    }, [])

console.log("m", movie)

    return (
        <Container>
            {movie && (
            <>
            <Background>
                <img src= {movie.backgroundImg} alt="1" />
            </Background>

            <ImgTitle>
                <img src={movie.titleImg} alt="1"/>
            </ImgTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="1"/>
                    <span>PLAY</span>
                </PlayButton>
                <Trailerbutton>
                <img src="/images/play-icon-white.png" alt="1"/>
                    <span>Trailer</span>
                </Trailerbutton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatch>
                    <img src="/images/group-icon.png" alt="1"/>
                </GroupWatch>
            </Controls>
            <SubTitle>
                 {movie.subTitle}        
            </SubTitle>
            <Description>
                {movie.description}
            </Description> 
            </>
            ) }
            
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