import React, { useContext, useEffect, useState } from 'react';
import DotButton from 'componenets/DotsButton/DotButton';
import HiddenMenu from 'componenets/HiddenMenu/HiddenMenu';
import UrlContext from 'componenets/store/url-context';

import {
  CardDiv,
  CardImage,
  CardInfo,
  CardContainer,
  Title,
  ReleasedDate,
  OverView,
} from 'componenets/Card/card.styles';

function Card() {
  let url = `https://api.themoviedb.org/3/movie/popular?api_key=3024cf700c94345aa84ec47dbf98f3a4&language=en-US&page=1`;
  const [responseData, setResponseData] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const sortedUrl = useContext(UrlContext);

  /**
   * Handle showing hidden div
   */
  const clickFun = () => {
    setIsShown(!isShown);
  };

  if (sortedUrl.url !== '') {
    url = sortedUrl.url;
  }
  /**
   * Make get request.
   *
   * @param {string} url            Request URl.
   * @param {Object} [headers=null] Object contains request headers.
   *
   * @return {Promise<Object>} Promise fulfilled with response data.
   */

  useEffect(() => {
    fetch(url, {
      dataType: 'json',
      headers: { 'Content-Type': 'application/json' },
      method: 'get',
    })
      .then((result) => result.json())
      .then((result) => result.results)
      .then((result) => {
        setResponseData(result);
        return responseData;
      });
  }, [url]);

  return (
    <CardContainer>
      {responseData.map((item) => (
        <CardDiv>
          <CardImage
            img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          />
          <DotButton onClick={clickFun} />
          <CardInfo>
            <Title>{item.original_title}</Title>
            <ReleasedDate>{item.release_date}</ReleasedDate>
            <OverView>{item.overview}</OverView>
          </CardInfo>
          <HiddenMenu isClicked={isShown} />
        </CardDiv>
      ))}
    </CardContainer>
  );
}

export default Card;
