import styled from 'styled-components';

export const ButtonDiv = styled.button`
  align-content: center;
  align-items: center;
  background-color: ${(probs) => (probs.disabled ? '#ECECEC' : '#00B4E4')};
  border-radius: 2.5rem;
  color: ${(probs) => (probs.disabled ? '#767676' : '#fff')};
  display: flex;
  height: 2.6875rem;
  justify-content: center;
  margin: .9375rem 0 0 0;
  width: 100%;

`;
export const ButtonText=styled.h2`
  font-size: 1.3em;
`
