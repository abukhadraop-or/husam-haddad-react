import styled from "styled-components";

export const HiddenDiv = styled.div`
  border-radius: 0 0 0.5rem 0.5rem;
  border: 0.0625rem solid #e3e3e3;
  display: flex;
  flex-direction: column;
  height: 5.9375rem;
  width: 100%;

  @media (min-width: 48rem) {
    height: 5.9375rem;
  }
`;

export const SelectText = styled.h3`
  align-items: center;
  border-radius: 0.3125rem;
  color: #afafaf;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0.625rem;
  margin-left: 0.9375rem;
  width: 100%;
`;

export const SelectItem = styled.select`
  background-color: #c7cdd5;
  border-color: #e4e7eb;
  border-radius: 0.3125rem;
  margin: auto;
  padding: 0.375rem 1.75rem;
  width: 90%;
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
