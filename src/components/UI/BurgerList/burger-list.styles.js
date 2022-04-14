import styled from 'styled-components';

export const Container = styled.div`
  display: none;

  @media (max-width: 768px) {
    color: white;
    display: flex;
    flex-direction: column;
  }
`;

export const ListTitle = styled.h2`
  font-size: 1.2em;
  margin: 1rem 0.9375rem 0 0;
`;

export const ListItem = styled.p`
  color: #ffffff99;
  font-size: 1em;
`;

export const Login = styled.h3`
  color: #ffffff99;
  font-weight: 600;
`;
