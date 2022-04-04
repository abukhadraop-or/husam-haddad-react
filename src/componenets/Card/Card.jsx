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
import getRequest from 'componenets/service/http';
/**
 * Render Card element.
 *
 * @return {JSX.element}
 */
function Card() {
  let url = `https://api.themoviedb.org/3/movie/popular?api_key=3024cf700c94345aa84ec47dbf98f3a4&language=en-US&page=1`;
  const [responseData, setResponseData] = useState([]);
  const [hideMenu, setHideMenu] = useState({ isShown: false, id: null });
  const sortedUrl = useContext(UrlContext);

  /**
   * Handle showing hidden div
   */
  const clickFun = (id) => {
    setHideMenu({ isShown: true, id });
  };

  if (sortedUrl.url !== '') {
    url = sortedUrl.url;
  }

  const hideMenuHandler = () => {
    setHideMenu({ isShown: false, id: null });
  };

  useEffect(() => {
    (async () => {
      const response = await getRequest(url);
      setResponseData(response);
    })();
  }, [url]);

  return (
    <CardContainer>
      {responseData.length > 0 &&
        responseData.map((item) => (
          <CardDiv>
            {item.poster_path && (
              <CardImage
                img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              />
            )}

            {!item.poster_path && (
              <CardImage src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg" />
            )}
            <DotButton
              onClick={() => {
                clickFun(item.id);
              }}
            />
            <CardInfo>
              <Title>{item.original_title}</Title>
              <ReleasedDate>{item.release_date}</ReleasedDate>
              <OverView>{item.overview}</OverView>
            </CardInfo>
            <HiddenMenu
              isClicked={hideMenu}
              id={item.id}
              hide={hideMenuHandler}
            />
          </CardDiv>
        ))}
    </CardContainer>
  );
}

export default Card;
