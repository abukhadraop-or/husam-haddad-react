import styled from 'styled-components';

export const BurgerDiv = styled.div`
  display: none;
  @media (max-width: 768px) {
    color: white;
    display: flex;
    flex-direction: column;
  }
`;

export const BurgerListTitle = styled.h2`
  font-size: 1.2em;
  margin: 1rem .9375rem 0 0;
`;

export const BurgerListItems = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1em;
`;

export const BurgerListLogin = styled.h3`
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
`;
