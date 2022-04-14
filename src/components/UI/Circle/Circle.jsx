import React from "react";
import propTypes from "prop-types";
import {
  Container,
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
function Circle({ rate, fill }) {
  return (
    <Container>
      <SvgCircle>
        <CircleGroup>
          <FirstCircle r="18" cx="20" cy="20" fill={fill} />
          <SecondCircle r="18" cx="20" cy="20" rate={rate} fill={fill} />
        </CircleGroup>
      </SvgCircle>
      <Rate>{fill}%</Rate>
    </Container>
  );
}

Circle.propTypes = {
  fill: propTypes.number.isRequired,
  rate: propTypes.number.isRequired,
};

export default Circle;
