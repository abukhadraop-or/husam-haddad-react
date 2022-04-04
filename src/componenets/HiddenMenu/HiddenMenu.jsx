import React from 'react';
import propTypes from 'prop-types';
import {
  HiddenClickedDiv,
  Menu,
  MenuDiv,
  SecondMenu,
} from 'componenets/HiddenMenu/hidden-menu.styles';
/**
 * Render Hidden Side Menu element.
 *
 * @return {JSX.element}
 */
function HiddenMenu({ isClicked, id, hide }) {
  return (
    <MenuDiv isClicked={isClicked} id={id}>
      <HiddenClickedDiv onClick={hide} />
      <Menu>
        <p>hello</p>
        <p>hello</p>
      </Menu>
      <SecondMenu>
        <p>hello</p>
        <p>hello</p>
      </SecondMenu>
    </MenuDiv>
  );
}
HiddenMenu.propTypes = {
  isClicked: propTypes.bool.isRequired,
  id: propTypes.number.isRequired,
  hide: propTypes.func.isRequired,
};

export default HiddenMenu;
