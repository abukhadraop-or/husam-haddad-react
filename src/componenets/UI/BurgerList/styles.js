import styled from 'styled-components';

export const BurgerDiv=styled.div`
display: none;
 @media (max-width: 768px) {
display: flex;
flex-direction: column;
color: white;
& h2{
    font-size:1.2em ;
    margin: 16px 15px 0 0;
}
& p{
    color: rgba(255,255,255,0.6);
    font-size: 1em;
}

& h3{
    color: rgba(255,255,255,0.6);
    font-weight: 600;
}
 }
`;
