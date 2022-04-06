import React from "react";
import propTypes from "prop-types";
import {
  HiddenClickedDiv,
  Menu,
  MenuDiv,
  SecondMenu,
} from "components/HiddenMenu/hidden-menu.styles";
/**
 * Render Hidden Side Menu element.
 *
 * @param {Object} props            The component props.
 * @param {boolean} props.isClicked Check if the menu is clicked.
 * @param {Number} props.id         The menu id.
 * @param {Function} props.hide     The function that shows or hide the menu.
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
  hide: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
  isClicked: propTypes.bool.isRequired,
};

export default HiddenMenu;
