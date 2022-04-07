import styled from "styled-components";
import { ReactComponent as arrow } from "assets/arrow.svg";

export const Container = styled.div`
  ${(probs) => probs.onClick}
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;

  @media (min-width: 48rem) {
    flex-direction: column;
    margin-top: -3.125rem;
    padding-top: 1rem;
    flex-basis: 22%;
  }
`;

export const SearchList = styled.div`
  border-radius: ${(props) => (props.isClicked ? ".5rem .5rem 0 0 " : ".5rem")};
  border: 0.0625rem solid #e3e3e3;
  box-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 10%);
  display: flex;
  flex-wrap: wrap;
  height: 3.125rem;
  justify-content: space-between;
  margin-top: 0.8125rem;
  text-align: start;

  @media (min-width: 48rem) {
    width: 100%;
  }
`;

export const SearchListTitle = styled.h2`
  color: #000;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 1.1em;
  font-weight: 550;
  margin: auto 0.9375rem;
`;

export const Arrow = styled(arrow)`
  flex-direction: row;
  margin: 0.9375rem;
  transform: rotate(${(props) => (props.isClicked ? "90deg" : 0)});
  width: 1rem;
`;
