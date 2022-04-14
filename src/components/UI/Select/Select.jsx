import React from "react";
import PropTypes from "prop-types";
import {
  HiddenDiv,
  SelectText,
  SelectItem,
  Option,
  Form,
} from "components/UI/Select/select.styles";

/**
 * Render Form element.
 *
 * @param {Object}   props          The component props.
 * @param {Function} props.onChange Function to get the selected value.
 *
 * @return {JSX.element}
 */
function Select({ onChange }) {
  return (
    <HiddenDiv>
      <SelectText>Sort result By</SelectText>
      <Form>
        <SelectItem
          onChange={onChange}
          name="sort"
          data-testid='select'
          defaultValue="popularity.desc"
        >
          <Option value="popularity.desc" data-testid="select-option">
            Popularity Descending
          </Option>
          <Option value="popularity.asc" data-testid="select-option">
            Popularity Ascending
          </Option>
          <Option value="vote_average.desc" data-testid="select-option">
            Rating Descending
          </Option>
          <Option value="vote_average.asc" data-testid="select-option">
            Rating Ascending
          </Option>
          <Option value="release_date.desc" data-testid="select-option">
            Release Date Descending
          </Option>
          <Option value="release_date.asc" data-testid="select-option">
            Release Date Ascending
          </Option>
          <Option value="original_title.asc" data-testid="select-option">
            Title (A-Z)
          </Option>
          <Option value="original_title.desc" data-testid="select-option">
            Title (Z-A)
          </Option>
        </SelectItem>
      </Form>
    </HiddenDiv>
  );
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Select;
