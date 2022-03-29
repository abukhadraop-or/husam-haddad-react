import {
  HeaderImage,
  StyledNavbar,
  StyledContainer,
  RightContainer,
  Add,
  EnButton,
  Links,
  BurgerButton,
  MobileLogo,
  MobileNav,
  MobileRight,
  HeadIcon,
  HiddenSidebar
} from "./styles";
import logo from "./image1.svg";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import BurgerList from "../UI/BurgerList/BurgerList";


export const Navbar = (props) => {

  const [isClicked,setIsClicked]=useState(false);

  const clickHandler=()=>{
    setIsClicked(!isClicked)
      }


  return (
    <StyledNavbar>
      <StyledContainer>
        <HeaderImage image={logo}>
          <img src={logo} alt="image" />
        </HeaderImage>
        <ul>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>People</li>
          <li>More</li>
       
        </ul>
      </StyledContainer>
      <RightContainer>
        <Add />
        <EnButton>EN</EnButton>
        <Links>Login</Links>
        <Links>Join TMDB</Links>
        <Links> 
          <FaSearch size={20} color={"#00B4E4"}></FaSearch>
        </Links>

      </RightContainer>
      <MobileNav>
        <BurgerButton onClick={clickHandler}></BurgerButton>
      <MobileLogo />
         <MobileRight>
         <HeadIcon />
         <FaSearch size={20} color={"#00B4E4"}></FaSearch>
       
         </MobileRight>
         <HiddenSidebar isClicked={isClicked} >
   <BurgerList />
     </HiddenSidebar>
      </MobileNav>

    </StyledNavbar>
  );    
};
