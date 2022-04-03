import styled from 'styled-components';

const HiddenDiv = styled.div`
  border-radius: 0 0 0.5rem 0.5rem;
  border: 0.0625rem solid #e3e3e3;
  display: flex;
  flex-direction: column;
  height: 5.9375rem;
  & h3 {
    align-items: center;
    border-radius: 0.3125rem;
    color: #afafaf;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    font-size: 1em;
    font-weight: 300;
    margin-bottom: 0.625rem;
    margin-left: 0.9375rem;
    width: 100%;
  }
  & option {
    background-color: white;
    margin: 0;
    width: 100%;
    @media (max-width: 48rem) {
      background-color: white;
      background-color: white;
      width: 100%;
    }
  }

  & select {
    background-color: #c7cdd5;
    border-color: #e4e7eb;
    border-radius: 0.3125rem;
    margin: auto;
    padding: 0.375rem 1.75rem;

    @media (max-width: 48rem) {
      width: 90%;
    }
  }
  & form {
    display: flex;
  }

  @media (max-width: 48rem) {
    width: 100%;
  }
`;
export default HiddenDiv;
