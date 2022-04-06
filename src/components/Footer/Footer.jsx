import React from "react";
import {
  FooterDiv,
  FooterElement,
  FooterLogo,
  FooterImage,
  FooterParagraph,
  FooterTitle,
  FooterLogoText,
} from "components/Footer/footer.styles";
import logo from "assets/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";

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
        <FooterParagraph>About TMDB</FooterParagraph>
        <FooterParagraph>Contact Us</FooterParagraph>
        <FooterParagraph>Support Forums</FooterParagraph>
        <FooterParagraph>API</FooterParagraph>
        <FooterParagraph>System Status</FooterParagraph>
      </FooterElement>
      <FooterElement>
        <FooterTitle>Get Involved</FooterTitle>
        <FooterParagraph>Contribution Bible</FooterParagraph>
        <FooterParagraph>Add New Movie</FooterParagraph>
        <FooterParagraph>Add New TV Show</FooterParagraph>
      </FooterElement>
      <FooterElement>
        <FooterTitle>Community</FooterTitle>
        <FooterParagraph>Guidelines</FooterParagraph>
        <FooterParagraph>Disscussions</FooterParagraph>
        <FooterParagraph>Leaderboard</FooterParagraph>
        <FooterParagraph>Twitter</FooterParagraph>
      </FooterElement>
      <FooterElement>
        <FooterTitle>Legal</FooterTitle>
        <FooterParagraph>Terms of Use</FooterParagraph>
        <FooterParagraph>API Terms of Use</FooterParagraph>
        <FooterParagraph>Privacy Policy</FooterParagraph>
      </FooterElement>
    </FooterDiv>
  );
}
export default Footer;
