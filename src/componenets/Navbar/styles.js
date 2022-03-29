import styled from "styled-components";
import { ReactComponent as add } from "./add.svg";
import { ReactComponent as burger } from "./burger.svg";
import { ReactComponent as logo } from "./blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";
import { ReactComponent as head } from "../Sort/head.svg";

export const StyledNavbar = styled.nav`
  margin: 0;
  height: 64px;
  display: flex;
  justify-content: space-between;
  color: black;
  background: #022541;
  font-family: "Source Sans Pro", Arial, sans-serif;
`;

export const StyledContainer = styled.div`
  height: 100%;
  display: flex;

  & ul {
    display: flex;
    list-style-type: none;
    gap: 1rem;
    color: white;
    margin: auto 0;
    padding-left: 2rem;
    font-family: "Source Sans Pro", Arial, sans-serif;
    font-size: 1em;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  font-family: "Source Sans Pro", Arial, sans-serif;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 0 3rem 0 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderImage = styled.div`
  height: 100%;
  width: 154px;
  display: flex;
  align-items: center;
  margin-left: 2.5rem;
`;

export const Add = styled(add)`
  width: 2rem;
`;

export const EnButton = styled.button`
  font-family: "Source Sans Pro", Arial, sans-serif;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  font-size: 0.75em;
  font-weight: 400;
  width: 28px;
  height: 26px;
  margin: auto;
  border-radius: 3px;

  padding: 0;
  &:hover {
    background-color: white;
    color: #022541;
    cursor: pointer;
  }
`;

export const Links = styled.a`
  font-family: "Source Sans Pro", Arial, sans-serif;
  color: white;
  padding: auto;
  margin: auto;
  font-weight: 600;
  font-size: 1em;
`;

export const BurgerButton = styled(burger)`
 display:none;
width: 20px;
fill: white;

@media (max-width: 768px) {
   display: flex;
   margin: 15px;

}
`;

export const MobileNav = styled.div`
  display: none;
  @media (max-width: 768px) {
    flex: 1;
    display: contents;
    flex-direction: row;
    justify-content: space-between;
    gap: 120px;
  }
`;

export const MobileLogo = styled(logo)`
  width: 55px;
  aspect-ratio: auto 55 / 40;
  height: 40px;
  margin: auto;
`;

export const MobileRight = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin: auto 0;
  padding-right: 20px;
`;

export const HeadIcon = styled(head)`
  width: 22px;
  height: 22px;
  fill: white;
`;

export const HiddenSidebar=styled.div`
 @media (max-width: 768px) {
  padding-left: 1.5rem;
width: 90%;
    height: 100%;
    z-index: 500;
    position: fixed;
  background-color: #203853;
  margin-top: 64px;
  margin-left: ${props=> props.isClicked ? 0 : "-100%"};
  transition: ease-in-out 0.5s;
 }
`;  
