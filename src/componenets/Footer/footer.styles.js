import styled from 'styled-components';

export const FooterDiv = styled.div`
  background-color: #03233e;
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  padding-bottom: 4.375rem;

  @media (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-evenly;
    padding-right: 7.5rem;
    padding: 0;
  }
`;

export const FooterElement = styled.div`
  align-items: center;
  align-self: baseline;
  color: white;
  display: flex;
  flex-direction: column;
  margin: .3125rem 2.1875rem;

  @media (min-width: 48rem) {
    margin: 4.375rem 0;
  }
`;

export const FooterTitle = styled.h2`
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: 1.0625rem;
  text-transform: uppercase;
`;

export const FooterPargraph = styled.p`
  font-size: 1em;
  margin: .125rem;
`;

export const FooterLogo = styled.div`

  height: 5.9375rem;
  margin: .3125rem 1.875rem;
  width: 13.75rem;

  @media (min-width: 48rem) {
    margin-left: 7.5rem;
    margin-top: 1.875rem;
  }
`;

export const FooterLogoText = styled.h3`
  background-color: white;
  border-radius: .3125rem;
  border: .125rem solid #fff;
  color: #00b4e4;
  font-size: 1em;
  font-weight: bold;
  margin: 2.0625rem .625rem 0 0rem;
  padding: .5rem .875rem;
  text-align: center;
`;

export const FooterImage = styled.img.attrs((props) => ({
  src: props.Img,
}))`
  display: none;
  @media (min-width: 48rem) {
    display: block;
    margin: .625rem 5.625rem;
    width: 7.5rem;
  }
`;
