import React from 'react';
import propTypes from 'prop-types';
import { ButtonDiv, ButtonText } from 'componenets/UI/Button/styles';

function Button({ Click, disabled, children }) {
  return (
    <ButtonDiv onClick={Click} disabled={disabled}>
      <ButtonText>{children}</ButtonText>
    </ButtonDiv>
  );
}

Button.propTypes = {
  Click: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
  disabled: propTypes.bool.isRequired,
};

export default Button;
