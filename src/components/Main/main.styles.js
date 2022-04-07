import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (min-width: 48rem) {
    flex-direction: row;
    margin: auto;
    padding: 1.875rem;
  }
`;

export default Container;
