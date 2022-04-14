import styled from "styled-components";

export const Container = styled.button`
  align-content: center;
  align-items: center;
  background-color: ${(props) => (props.disabled ? "#ECECEC" : "#00B4E4")};
  border-radius: 2.5rem;
  border: 0;
  color: ${(props) => (props.disabled ? "#767676" : "#fff")};
  display: flex;
  height: 2.6875rem;
  justify-content: center;
  margin: 0.9375rem 0 0 0;
`;

export const Text = styled.h2`
  font-size: 1.3em;
`;
