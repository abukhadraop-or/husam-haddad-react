import React from 'react';
import {
  FooterDiv,
  FooterElement,
  FooterLogo,
  FooterImage,
  FooterPargraph,
  FooterTitle,
  FooterLogoText,
} from 'components/Footer/footer.styles';
import logo from 'assets/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg';
/**
 * Render Footer element.
 *
 * @return {JSX.element}
 */
function Footer() {
  return (
    <FooterDiv>
      <FooterLogo>
        <FooterImage Img={logo} />
        <FooterLogoText>JOIN THE COMMUNITY </FooterLogoText>
      </FooterLogo>
      <FooterElement>
        <FooterTitle>The Basics</FooterTitle>
        <FooterPargraph>About TMDB</FooterPargraph>
        <FooterPargraph>Contact Us</FooterPargraph>
        <FooterPargraph>Support Forums</FooterPargraph>
        <FooterPargraph>API</FooterPargraph>
        <FooterPargraph>System Status</FooterPargraph>
      </FooterElement>
      <FooterElement>
        <FooterTitle>Get Involved</FooterTitle>
        <FooterPargraph>Contribution Bible</FooterPargraph>
        <FooterPargraph>Add New Movie</FooterPargraph>
        <FooterPargraph>Add New TV Show</FooterPargraph>
      </FooterElement>
      <FooterElement>
        <FooterTitle>Community</FooterTitle>
        <FooterPargraph>Guidelines</FooterPargraph>
        <FooterPargraph>Disscussions</FooterPargraph>
        <FooterPargraph>Leaderboard</FooterPargraph>
        <FooterPargraph>Twitter</FooterPargraph>
      </FooterElement>
      <FooterElement>
        <FooterTitle>Legal</FooterTitle>
        <FooterPargraph>Terms of Use</FooterPargraph>
        <FooterPargraph>API Terms of Use</FooterPargraph>
        <FooterPargraph>Privacy Policy</FooterPargraph>
      </FooterElement>
    </FooterDiv>
  );
}
export default Footer;
