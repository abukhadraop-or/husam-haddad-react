import styled from "styled-components";
import { ReactComponent as add } from "assets/add.svg";
import { ReactComponent as burger } from "assets/burger.svg";
import { ReactComponent as head } from "assets/head.svg";
import { ReactComponent as logo } from "assets/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";

export const MainContainer = styled.nav`
  background: #022541;
  display: flex;
  font-family: "Source Sans Pro", Arial, sans-serif;
  height: 4rem;
  justify-content: space-between;
  margin: 0;
`;

export const StyledContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    height: 100%;
  }
`;

export const LeftContainerList = styled.ul`
  color: #fff;
  display: flex;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 0.9em;
  gap: 2rem;
  list-style-type: none;
  margin: auto 0;
  padding-left: 2rem;
`;

export const RightContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    font-family: "Source Sans Pro", Arial, sans-serif;
    gap: 2rem;
    height: 100%;
    justify-content: space-between;
    margin: 0 3rem 0 0;
  }
`;

export const HeaderImage = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  margin-left: 2.5rem;
  width: 9.625rem;
`;

export const Add = styled(add)`
  width: 1.5rem;
`;

export const EnButton = styled.button`
  background-color: transparent;
  border-radius: 0.1875rem;
  border: 1px solid white;
  color: #fff;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 0.75em;
  font-weight: 400;
  height: 1.625rem;
  margin: auto;
  padding: 0;
  width: 1.75rem;
  &:hover {
    background-color: #fff;
    color: #022541;
    cursor: pointer;
  }
`;

export const Links = styled.a`
  color: #fff;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 0.9em;
  font-weight: 600;
  margin: auto;
  padding: auto;
`;

export const BurgerButton = styled(burger)`
  display: flex;
  fill: #fff;
  margin: 0.9375rem;
  width: 1.25rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNav = styled.div`
  display: contents;
  flex-direction: row;
  flex: 1;
  gap: 7.5rem;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileLogo = styled(logo)`
  aspect-ratio: auto 55 / 40;
  height: 2.5rem;
  margin: auto;
  width: 3.4375rem;
`;

export const MobileRight = styled.div`
  display: flex;
  gap: 0.9375rem;
  justify-content: center;
  margin: auto 0;
  padding-right: 1.25rem;
`;

export const HeadIcon = styled(head)`
  fill: #fff;
  height: 1.375rem;
  width: 1.375rem;
`;

export const HiddenSidebar = styled.div`
  @media (max-width: 48rem) {
    background-color: #203853;
    height: 100%;
    margin-left: ${(props) => (props.isClicked ? 0 : "-100%")};
    margin-top: 4rem;
    padding-left: 1.5rem;
    position: fixed;
    transition: ease-in-out 0.5s;
    width: 90%;
    z-index: 500;
  }
`;
