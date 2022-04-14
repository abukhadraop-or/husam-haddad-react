import React from "react";
import {
  Container,
  Column,
  Logo,
  Image,
  FooterParagraph,
  FooterTitle,
  LogoText,
} from "components/Footer/footer.styles";
import logo from "assets/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";

const DataArray = [
  {
    id:'1',
    title: "The Basics",
    text: ["About TMDB","Contact Us ","Support Forums"," API","System Status",],
  },
  {
    id:'2',
    title: "Get Involved",
    text: ["Contribution Bible", "Add New Movie", "Add New TV Show "],
  },
  {
    id:'3',
    title: "Community",
    text: ["Guidelines", "Discussions ", "Leaderboard", "Twitter"],
  },
  {
    id:'4',
    title: "Legal",
    text: ["Terms of Use", "API Terms of Use ", "Privacy Policy"],
  },
];

/**
 * Render Footer element.
 *
 * @return {JSX.element}
 */
function Footer() {
  return (
    <Container>
      <Logo>
        <Image Img={logo} />
        <LogoText>JOIN THE COMMUNITY </LogoText>
      </Logo>
      {DataArray.map((items) => (
        <Column key={items.id}>
          <FooterTitle>{items.title}</FooterTitle>
          {items.text.map((item) => (
            <FooterParagraph>{item} </FooterParagraph>
          ))}
        </Column>
      ))}
    </Container>
  );
}
export default Footer;
