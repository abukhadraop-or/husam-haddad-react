import styled from 'styled-components';

export const MenuDiv = styled.div`
  background-color: #fff;
  display: ${(props) =>
    props.isClicked.isShown && props.id === props.isClicked.id
      ? 'flex'
      : 'none'};
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 77px;
  position: absolute;
  width: 12.5rem;
  margin-left: 1.625rem;
  top: 1.625rem;
  border: 1px solid #e3e3e3;
  border-radius: .5rem;
  box-shadow: 0 .125rem .5rem rgb(0 0 0 / 10%);
  z-index: 50;
`;

export const Menu = styled.div`
  padding: .25rem 0;
`;

export const SecondMenu = styled.div`
  padding: .25rem 0;
  border-top: .0625rem solid rgba(33, 37, 41, 0.15);
`;

export const HiddenClickedDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 25;
`;
