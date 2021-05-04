import React, { useEffect } from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { auth, provider } from '../firebase'
import { selectUserName,
        selectUserPhoto,
        setUserLogin,
        setSignOut} from "../features/user/userSlice"
import { useDispatch, useSelector} from "react-redux"

function Header() {

    const dispatch = useDispatch();
    const history = useHistory();
    const userName =  useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photo
                }))
                history.push("/")
            }
        })
    },[])


    const signIn = ()=> {
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user = result.user;
          dispatch(setUserLogin({
              name: user.displayName,
              email: user.email,
              photo: user.photo
          }))  
          history.push('/')
        })
    }

    const signOut =()=> {
        auth.signOut()
        .then(()=>{
            dispatch(setSignOut())
            history.push("/login")
        })

    }

    return (
        <Nav>
           <Logo src= "/images/logo.svg" alt="1"/>
           {!userName ? (
               <LoginContainer>
                  <Login onClick={signIn}>Login</Login> 
               </LoginContainer>
            ):
            <>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" alt="1"/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="1"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="1"/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="1"/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="1"/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="1"/>
                    <span>SERIES</span>
                </a>

           </NavMenu>
          
           <UserImg onClick={signOut} src="https://lh3.googleusercontent.com/ogw/ADGmqu-PX2W-ghNg6FAbCsau2Wnv_i0EnbhDTC8OG3kpJg=s32-c-mo" alt="1" />

           
            </>
            }
           
        </Nav>
    )
}

export default Header


const Nav = styled.nav `
    height:70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding : 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img `
    width:80px;
`

const NavMenu = styled.div`
    display:flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    
    a {
        display:flex;
        align-items :center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height:20px;
        }

        span {
            font-size: 13px;
            letter-spacing : 1.42px;
            position: relative;

            &:after {
                content: "";
                height:2px;
                background: white;
                position: absolute;
                left:0;
                right:0;
                bottom: -6px;
                opacity : 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94) 0s;
                transform: scaleX(0);

            }
        }
        &:hover {
            span:after {
                
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg =styled.img `
    width:40px;
    height:40px;
    border-radius:50%;

`

const Login = styled.div `
cursor: pointer;
    padding: 8px 16px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text=transform: uppercase;
    transition: all 0.2s ease 0s;
    background-color: rgba(0, 0,0, 0.6);

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent ;
    }
`

const LoginContainer = styled.div `
    flex: 1;
    display: flex;
    justify-content: flex-end;
`