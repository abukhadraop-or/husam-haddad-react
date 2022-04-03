import styled from 'styled-components';

export const CardContainer = styled.div`
  flex-direction: row;
  width: auto;
  padding: 1rem;
  justify-content: space-between;
  @media (min-width: 48rem) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 8.8125rem;
  border: 0.0625rem solid #e3e3e3;
  margin-top: 1.875rem;
  border: 0.0625rem solid #e3e3e3;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 10%);
  @media (min-width: 48rem) {
    flex-direction: column;
    height: 21rem;
    width: 9.6875rem;
    position: relative;
  }
`;

export const CardImage = styled.img`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.5rem 0 0 0;
  flex-direction: row;
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

export const CardInfo = styled.div`
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
  @media (min-width: 48rem) {
    margin-left: 0.3125rem;
  }
`;

export const ReleasedDate = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1em;
  margin-left: 0.3125rem;
  padding: 0;
  @media (min-width: 48rem) {
    margin: 0.625rem;
  }
`;

export const OverView = styled.p`
  margin: 0.625rem;
  padding: 0;
  font-size: 0.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 1.3125rem;
  max-height: 3rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media (min-width: 48rem) {
    display: none;
  }
`;
