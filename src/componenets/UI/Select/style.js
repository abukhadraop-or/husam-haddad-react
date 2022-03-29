import styled from 'styled-components';


export const HiddenDiv=styled.div`


width: 260px;
height: 95px;
border-radius: 0 0 8px 8px;
display: flex;
flex-direction: column;
border: 1px solid #e3e3e3;;
& h3{
  margin-left: 15px;
    align-items: center;
    width: 100%;
    font-size: 1em;
    font-weight: 300;
    margin-bottom: 10px;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    color: #AFAFAF;
    border-radius: 5px;
}
 & option{
    background-color: white;
    margin: 0;
    width: 100%;    
    @media (max-width: 768px) {

    background-color: white;
    width: 100%;
    background-color: white;
  }

   }

 & select{
 padding: 0.375rem 1.75rem;;
    margin: auto;
    background-color: #C7CDD5;
    border-color: #e4e7eb;
    border-radius: 5px;



    
    @media (max-width: 768px) {
        width: 90% ;
  }
 }



 @media (max-width: 768px) {
        width: 100% ;
  }

`