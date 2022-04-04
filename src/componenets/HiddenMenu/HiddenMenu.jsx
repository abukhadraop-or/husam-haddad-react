import React from 'react';
import propTypes from 'prop-types';
import { Menu, MenuDiv } from 'componenets/HiddenMenu/hidden-menu.styles';
/**
 * Render Hidden Side Menu element.
 *
 * @return {JSX.element}
 */
function HiddenMenu({ isClicked }) {
  return (
    <MenuDiv isClicked={isClicked}>
      <Menu>
        <p>hello</p>
        <p>hello</p>
      </Menu>
      <Menu>
        <p>hello</p>
        <p>hello</p>
      </Menu>
    </MenuDiv>
  );
}
HiddenMenu.propTypes = {
  isClicked: propTypes.bool.isRequired,
};

export default HiddenMenu;
