import React from "react";
import {
  Container,
  ListTitle,
  Login,
  ListItem,
} from "components/UI/BurgerList/burger-list.styles";

const DataArray = [
  "Contribution Bible",
  "Apps",
  "Discussions",
  "Leaderboard",
  "Contribute",
  "API",
  "Support",
  "About",
];

/**
 * Render Burgerlist Menu element.
 *
 * @return {JSX.element}
 */
function BurgerList() {
  return (
    <Container>
      <ListTitle>Movies </ListTitle>
      <ListTitle> TV Shows</ListTitle>
      <ListTitle>People </ListTitle>
      <section>
        {DataArray.map((item) => (
          <ListItem> {item} </ListItem>
        ))}
        <Login>Login</Login>
      </section>
    </Container>
  );
}

export default BurgerList;
