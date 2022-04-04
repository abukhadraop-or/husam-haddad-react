import React from 'react';
import PropTypes from 'prop-types';
import { Dots } from 'componenets/DotsButton/dotbutton-styles';
/**
 * Render Dot Button element.
 * 
 * @param {func} props.onClick handle click function.
 *  
 * @return {JSX.element}
 */
function DotButton({ onClick }) {
  return <Dots onClick={onClick} />;
}

export default DotButton;

DotButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
