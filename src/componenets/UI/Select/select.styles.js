import styled from 'styled-components';

const HiddenDiv = styled.div`
  border-radius: 0 0 0.5rem 0.5rem;
  border: 0.0625rem solid #e3e3e3;
  display: flex;
  flex-direction: column;
  height: 5.9375rem;
  width: 100%;
  /* & option {
    background-color: #fff;
    margin: 0;
    width: 100%;
    @media (max-width: 48rem) {
      background-color: #fff; 
      width: 100%;
    }
  } */

  /* & select {
    background-color: #c7cdd5;
    border-color: #e4e7eb;
    border-radius: 0.3125rem;
    margin: auto;
    padding: 0.375rem 1.75rem;

    @media (max-width: 48rem) {
      width: 90%;
    } */
  /* } */
  /* & form {
    display: flex;
  } */

  @media (min-width: 48rem) {
    height: 5.9375rem;
  }
`;
export const SelectParagraph = styled.h3`
  align-items: center;
  border-radius: 0.3125rem;
  color: #afafaf;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0.625rem;
  margin-left: 0.9375rem;
  width: 100%;
`;

export const SelectItem = styled.select`
  width: 90%;
  margin: auto;
  padding: 0.375rem 1.75rem;
  background-color: #c7cdd5;
  border-color: #e4e7eb;
  border-radius: 0.3125rem;
`;
export const Option = styled.option`
  background-color: #fff;
  width: 100%;
  @media (min-width: 48rem) {
    margin: 0;
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
`;

export default HiddenDiv;
