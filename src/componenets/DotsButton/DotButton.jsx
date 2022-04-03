import React from 'react';
import PropTypes from 'prop-types';
import { Dots } from 'componenets/DotsButton/dotbutton-styles';

function DotButton({ onClick }) {
  return <Dots onClick={onClick} />;
}

export default DotButton;

DotButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
