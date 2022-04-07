import React, { useContext, useState } from "react";
import UrlContext from "components/store/url-context";
import Button from "components/UI/Button/Button";
import Select from "components/UI/Select/Select";
import {
  SearchList,
  Container,
  Arrow,
  SearchListTitle,
} from "components/Sort/sort.styles";

/**
 * Render sort section element.
 *
 * @return {JSX.element}
 */
function Sort() {
  const [isClicked, setIsClicked] = useState(false);
  const [sortValue, setSortValue] = useState("popularity.desc");
  const [isDisabled, setIsDisabled] = useState(true);

  const sortCtx = useContext(UrlContext);
  if (sortCtx.url === "") {
    sortCtx.sortUrl("popularity.desc");
  }

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
    sortCtx.sortUrl(sortValue);
    setIsDisabled(true);
  };

  return (
    <Container>
      <h2>Popular Movies</h2>
      <SearchList onClick={clickHandler} isClicked={isClicked}>
        <SearchListTitle>Sort</SearchListTitle>
        <Arrow isClicked={isClicked} />
      </SearchList>
      {isClicked && <Select onChange={changeHandler} />}
      <Button Click={submitHandler} disabled={isDisabled} buttonText="Search" />
    </Container>
  );
}

export default Sort;
