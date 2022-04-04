import styled from 'styled-components';
import { ReactComponent as cardbutton } from 'assets/cardbutton.svg';

export const ButtonDiv = styled.div`
  background-color: black;
  height: 1.875rem;
  position: absolute;
  width: 1.875rem;
`;

export const Dots = styled(cardbutton)`
  position: absolute;
  right: 0.3125rem;
  top: 0.5rem;
  width: 1.5625rem;

  & path {
    fill: white;
    opacity: 0.7;
  }
  & :hover {
    fill: #00b4e4;
  }
  @media (max-width: 48rem) {
    display: none;
  } 
`;
