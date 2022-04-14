import React from "react";
import PropTypes from "prop-types";
import { Dots } from "components/DotsButton/dotbutton-styles";

/**
 * Render Dot Button element.
 *
 * @param {Object} props         The component props.
 * @param {func}   props.onClick handle click function.
 *
 * @return {JSX.element}
 */
function DotButton({ onClick }) {
  return <Dots onClick={onClick} role="button" data-testid='button' />;
}

DotButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DotButton;
