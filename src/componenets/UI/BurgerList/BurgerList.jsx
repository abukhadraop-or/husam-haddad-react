import React from 'react';
import {
  BurgerDiv,
  BurgerListTitle,
  BurgerListLogin,
  BurgerListItems,
} from 'componenets/UI/BurgerList/styles';

function BurgerList() {
  return (
    <BurgerDiv>
      <BurgerListTitle>Movies </BurgerListTitle>
      <BurgerListTitle> TV Shows</BurgerListTitle>
      <BurgerListTitle>People </BurgerListTitle>

      <section>
        <BurgerListItems>Contribution Bible</BurgerListItems>
        <BurgerListItems>Apps</BurgerListItems>
        <BurgerListItems>Discussions</BurgerListItems>
        <BurgerListItems>Leaderbord</BurgerListItems>
        <BurgerListItems>Contribute</BurgerListItems>
        <BurgerListItems>API</BurgerListItems>
        <BurgerListItems>Support</BurgerListItems>
        <BurgerListItems>About</BurgerListItems>
        <BurgerListLogin>Login</BurgerListLogin>
      </section>
    </BurgerDiv>
  );
}

export default BurgerList;
