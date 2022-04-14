import styled from "styled-components";

export const MainContainer = styled.div`
  flex-direction: row;
  width: auto;
  padding: 1rem;
  justify-content: space-between;

  @media (min-width: 48rem) {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 75%;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 8.8125rem;
  border: 0.0625rem solid #e3e3e3;
  margin-top: 1.875rem;
  border: 0.0625rem solid #e3e3e3;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem #0000001a;

  @media (min-width: 48rem) {
    flex-direction: column;
    height: 21rem;
    width: 9.6875rem;
    position: relative;
  }
`;

export const Image = styled.img`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.5rem 0 0 0;
  flex-direction: row;
  background-color: #dbdbdb;
  height: 8.8125rem;
  min-height: 8.8125rem;
  width: 5.875rem;

  @media (min-width: 48rem) {
    border-radius: 0.5rem 0.5rem 0 0;
    height: 14.75rem;
    margin: 0 0 0.5625rem 0;
    min-height: 14.75rem;
    width: 100%;
  }
`;

export const Info = styled.div`
  flex-direction: row;
  width: 100%;
  word-wrap: normal;
  overflow-wrap: break-word;

  @media (min-width: 48rem) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const Title = styled.h2`
  font-size: 0.9rem;
  margin: 0.625rem;
  white-space: normal;

  &:hover {
    color: #00b4e4;
    cursor: pointer;
  }

  @media (min-width: 48rem) {
    margin-left: 0.3125rem;
  }
`;

export const ReleasedDate = styled.p`
  color: #00000099;
  font-size: 1em;
  margin-left: 0.3125rem;
  padding: 0;

  @media (min-width: 48rem) {
    margin: 0.625rem;
  }
`;

export const OverView = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  font-size: 0.8em;
  line-height: 1.3125rem;
  margin: 0.625rem;
  max-height: 3rem;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;

  @media (min-width: 48rem) {
    display: none;
  }
`;
