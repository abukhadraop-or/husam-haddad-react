import styled from 'styled-components'

export const CardContainer=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
/* gap: 2rem; */
padding: 1rem;
@media (max-width: 768px) {
    flex-direction: row;
    width: auto;
    height: 141px;
}

`;

export const CardDiv=styled.div`
display: flex;  
border: 1px solid #e3e3e3;
margin-top: 30px;
flex-direction: column;
height: 336px;
width: 155px;
position: relative;
border: 1px solid #e3e3e3;
border-radius: 8px;
box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
@media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: 141px;
}
`;


export const CardImage=styled.div`
background-image:url(${props=>props.img});
background-size:cover ;
width: 100%;
height:236px;
min-height: 236px;
border-radius: 8px 8px 0 0;
margin:0 0 9px 0;
background-position: center;
background-repeat: no-repeat;
@media (max-width: 768px) {
    flex-direction: row;
    height:141px;
    width: 94px;
    min-height: 141px;
    border-radius: 8px 0 0 0;
}
`;


export const CardInfo=styled.div`
flex-direction: column;
width: 100%;
overflow-wrap: break-word;
flex-wrap: wrap;
word-wrap: normal;
@media (max-width: 768px) {
    flex-direction: row;
}

`;

export const Title=styled.h2`
font-size:0.9rem;

white-space: normal;
@media (max-width: 768px) {
     margin: 10px;
    }
`;

export const ReleasedDate=styled.p`
font-size:0.5rem ;
font-size: 1em;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,0.6);
    @media (max-width: 768px) {
     margin: 10px;
    }
`;

export const OverView=styled.p`
display: none;
@media (max-width: 768px) {
    margin: 10px;
    padding: 0;
    font-size: .8em;
     overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 21px;
    max-height: 48px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
`;