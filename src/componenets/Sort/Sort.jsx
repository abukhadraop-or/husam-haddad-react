import React, { useContext, useState } from 'react';
import UrlContext from 'componenets/store/url-context';
import Button from 'componenets/UI/Button/Button';
import Select from 'componenets/UI/Select/Select';
import {
  SearchList,
  SortDiv,
  Arrow,
  SearchListTitle,
} from 'componenets/Sort/sort.styles';
/**
 * Render sort section element.
 *
 * @return {JSX.element}
 */
function Sort() {
  const [isClicked, setIsClicked] = useState(false);
  const [sortValue, setSortValue] = useState('popularity.desc');
  const [isDisabled, setIsDisabled] = useState(true);

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=3024cf700c94345aa84ec47dbf98f3a4&language=en-US&sort_by=${sortValue}&include_adult=false&include_video=false&page=1`;
  const sortCtx = useContext(UrlContext);

  /**
   * Handle Click event.
   */
  const clickHandler = () => {
    setIsClicked(!isClicked);
  };
  /**
   * Handle value Change event.
   *
   * @param {React.SyntheticEvent} event Event data.
   */
  const changeHandler = (event) => {
    setSortValue(event.target.value);
    setIsDisabled(false);
  };
  /**
   * Handle submit event
   *
   * @param {React.SyntheticEvent} event Event data.
   */
  const submitHandler = (event) => {
    event.preventDefault();
    sortCtx.sortUrl(url);
    setIsDisabled(true);
  };

  return (
    <SortDiv>
      <h2>Popular Moives</h2>
      <SearchList onClick={clickHandler} isClicked={isClicked}>
        <SearchListTitle>Sort</SearchListTitle>
        <Arrow isClicked={isClicked} />
      </SearchList>
      {isClicked && <Select onChange={changeHandler} />}
      <Button Click={submitHandler} disabled={isDisabled}>
        Search
      </Button>
    </SortDiv>
  );
}

export default Sort;
