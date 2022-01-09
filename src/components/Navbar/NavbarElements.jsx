import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#000' : ' #010606')};
  height: 80px;
  // margin-top: -100px;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index:10;
  width : 100%;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1500px;
`
export const NavLogo = styled(LinkR) `
  color:#fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  color : white;

  &:hover
  {
    color : white;
  }

  @media screen and (max-width : 768px)
  {
    font-size : 1rem;
  }
`
export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display:flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
`
export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover{

    text-decoration : none;
    color : white;
    border-bottom : 3px solid green;
  }

  &.active{
    border-bottom: 3px solid green
    text-decoration : none;
  }
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content : center;

`
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`

export const NavProfile = styled.div`
  
  width : 600px;
  display : flex;
  flex-direction : row;
  justify-content : space-between;
  align-items : center;
  @media screen and (max-width: 960px) {
    display : none;
  }
`

export const NavPhoto = styled.img`

  overflow : hidden;
  height : 2.5rem;
  width : 2.5rem;
  border-radius : 40px;
`

export const NavName = styled(LinkR)`

  font-size : 1.07rem;
  color : white;
  text-decoration : none;
  margin-top : 0.5rem;
`

export const NavRight = styled.div`

  display: flex;
  align-items: center;
  justify-content : center;
  width : 20rem;

  @media screen and (max-width: 960px) {
    display : none;
  }
`

export const NavUser = styled.div`

  display : flex;
  width : 10rem;
  flex-direction : column;
  justify-content : center;
  align-items :center;

`

export const Select = styled.select`

  display : block;
  height : 20px;
  width : 20px;

  option 
  {
    height : 20px;
    width : 20px;
    color : blue;
  }
`
