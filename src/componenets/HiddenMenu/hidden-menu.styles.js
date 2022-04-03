import styled from 'styled-components';

export const MenuDiv = styled.div`
  background-color: gray;
  display: ${(props) => (props.isClicked ? 'flex' : 'none')};
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 4.8125rem;
  padding: .5625rem 2.9375rem;
  position: absolute;
`;

export const Menu = styled.div``;
