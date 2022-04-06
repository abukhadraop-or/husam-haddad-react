import React from "react";
import propTypes from "prop-types";
import { ButtonDiv, ButtonText } from "components/UI/Button/button.styles";

/**
 * Render Button element.
 *
 * @param {Object}   props            The component props.
 * @param {Function} props.Click      Function handle click.
 * @param {boolean}  props.disabled   Check if button is disabled.
 * @param {String}   props.buttonText The button text.
 *
 * @return {JSX.element}
 */
function Button({ Click, disabled, buttonText }) {
  return (
    <ButtonDiv onClick={Click} disabled={disabled}>
      <ButtonText>{buttonText}</ButtonText>
    </ButtonDiv>
  );
}

Button.propTypes = {
  Click: propTypes.func.isRequired,
  buttonText: propTypes.string.isRequired,
  disabled: propTypes.bool.isRequired,
};

export default Button;
