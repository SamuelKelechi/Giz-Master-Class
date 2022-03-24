import React,{useState} from 'react'
import styled from 'styled-components'
import { DiMagento } from "react-icons/di";
import { FaBars, FaTimes } from "react-icons/fa";



export const Header = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

  return (
   <Container>
       <ContainerWrapper>
           <Logo>
               <span><DiMagento/>GIZ</span>
           </Logo>
            
           <MobileIcon onClick={handleClick}>
           {click ? <FaTimes /> :   <FaBars/> }
         
           </MobileIcon>
           <Navs onClick={handleClick}  click={click}>
               <NavLinks>Home</NavLinks>
               <NavLinks>About</NavLinks>
               <NavLinks>Contact</NavLinks>
               <NavLinks>Blog</NavLinks>

           </Navs>
       </ContainerWrapper>
   </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: #101522;
    color: white;
    display: flex;
    justify-content: center;
`

const ContainerWrapper = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.div`
    font-size: 35px;
`
const MobileIcon = styled.div`
    font-size: 25px;
    display: none;

    @media screen and (max-width: 768px){
        display: block;
    }
`
const Navs = styled.ul`
    width: 700px;
    height:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 25px;

    @media screen and (max-width: 768px){
        flex-direction: column;
        position: absolute;
        top: 50px;
        width: 50%;
        height: 80vh;
        /* display: none; */
        left: ${({click}) => (click ? 0 : '-100%')};
        /* justify-content: flex-start; */
        background-color: #101522;
        transition: all 0.5s ease ;
    }
`
const NavLinks = styled.li``

