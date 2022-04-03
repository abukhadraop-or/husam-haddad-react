import React from 'react';
import PropTypes from 'prop-types';
import HiddenDiv from 'componenets/UI/Select/select.styles';

function Select({ onChange }) {
  return (
    <HiddenDiv>
      <h3>Sort result By</h3>
      <form>
        <select name="sort" onChange={onChange}>
          <option value="popularity.desc">Popularity Descending</option>
          <option value="popularity.asc">Popularity Ascending</option>
          <option value="vote_average.desc">Rating Descending</option>
          <option value="vote_average.asc">Rating Ascending</option>
          <option value="release_date.desc">Release Date Descending</option>
          <option value="release_date.asc">Release Date Ascending</option>
          <option value="original_title.asc">Title (A-Z)</option>
          <option value="original_title.desc">Title (Z-A)</option>
        </select>
      </form>
    </HiddenDiv>
  );
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Select;
