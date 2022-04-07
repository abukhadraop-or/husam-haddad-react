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
          defaultValue="popularity.desc"
        >
          <Option value="popularity.desc">Popularity Descending</Option>
          <Option value="popularity.asc">Popularity Ascending</Option>
          <Option value="vote_average.desc">Rating Descending</Option>
          <Option value="vote_average.asc">Rating Ascending</Option>
          <Option value="release_date.desc">Release Date Descending</Option>
          <Option value="release_date.asc">Release Date Ascending</Option>
          <Option value="original_title.asc">Title (A-Z)</Option>
          <Option value="original_title.desc">Title (Z-A)</Option>
        </SelectItem>
      </Form>
    </HiddenDiv>
  );
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Select;
