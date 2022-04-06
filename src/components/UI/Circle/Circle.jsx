import React from "react";
import propTypes from "prop-types";
import {
  CircleDiv,
  FirstCircle,
  SecondCircle,
  SvgCircle,
  CircleGroup,
  Rate,
} from "./circle.styles";
/**
 * Render progress circle element.
 * 
 * @param {Object} props The component props.
 * @param {Number} rate  The progress Rate. 
 * @param {Number} fill  The fill percentage.
 *  
 * @return {JSX.element}
 */
function Circle({ rate , fill }) {
  return (
    <CircleDiv>
      <SvgCircle>
        <CircleGroup>
          <FirstCircle r="18" cx="20" cy="20" />
          <SecondCircle r="18" cx="20" cy="20" rate={rate} fill={fill} />
        </CircleGroup>
      </SvgCircle>
      <Rate>{fill}%</Rate>
    </CircleDiv>
  );
}

Circle.propTypes = {
  fill: propTypes.number.isRequired,
  rate: propTypes.number.isRequired,
};

export default Circle;
