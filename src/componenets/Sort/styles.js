import styled from "styled-components";
import React from "react";
import { ReactComponent as arrow } from "./arrow.svg";

export const SortDiv = styled.div`
  flex-direction: column;
  display: flex;
  padding: 1rem;
  margin-top:-50px;
  ${probs=>probs.onClick}

  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
    margin: inherit;
  }
`;
export const SearchList = styled.div`

  flex-direction: row;
  display: flex;
  min-width: 260px;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid #e3e3e3;
  border-radius: ${props=>props.radius || '8px'} ;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  text-align: start;
  height: 50px;
  margin-top: 13px;
 

  justify-content: space-between;
    @media (max-width: 768px) {
        width: 100% ;
  }

  & h2 {
    font-size: 1.1em;
    margin: auto 15px;
    font-weight: 550;
    color: #000;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    

  }
`;

export const Arrow = styled(arrow)`
  width: 16px;
  flex-direction: row;
  margin: 15px;
  transform: rotate( ${props=>props.rotate});
 `;


