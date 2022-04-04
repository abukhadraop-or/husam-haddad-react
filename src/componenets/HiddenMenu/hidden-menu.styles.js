import styled from "styled-components";

export const MenuDiv = styled.div`
  background-color: #fff;
  display: ${(props) =>
    props.isClicked.isShown && props.id === props.isClicked.id
      ? "flex"
      : "none"};
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 4.8125rem;
  position: absolute;
  width: 12.5rem;
  margin-left: 1.625rem;
  top: 1.625rem;
  border: 1px solid #e3e3e3;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 10%);
  z-index: 50;
`;

export const Menu = styled.div`
  padding: 0.25rem 0;
`;

export const SecondMenu = styled.div`
  padding: 0.25rem 0;
  border-top: 0.0625rem solid #21252926;
`;

export const HiddenClickedDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 25;
`;
