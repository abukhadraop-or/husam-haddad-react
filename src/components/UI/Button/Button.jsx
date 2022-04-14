import React from "react";
import propTypes from "prop-types";
import { Container, Text } from "components/UI/Button/button.styles";

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
    <Container onClick={Click} disabled={disabled}>
      <Text>{buttonText}</Text>
    </Container>
  );
}

Button.propTypes = {
  Click: propTypes.func.isRequired,
  buttonText: propTypes.string.isRequired,
  disabled: propTypes.bool.isRequired,
};

export default Button;
