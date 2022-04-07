import React, { useContext, useEffect, useState } from "react";
import DotButton from "components/DotsButton/DotButton";
import HiddenMenu from "components/HiddenMenu/HiddenMenu";
import UrlContext from "components/store/url-context";
import {
  CardContainer,
  Image,
  Info,
  MainContainer,
  Title,
  ReleasedDate,
  OverView,
} from "components/Card/card.styles";
import Circle from "components/UI/Circle/Circle";
import getAllMovies from "components/service/getAllMovies";

/**
 * Render Card element.
 *
 * @return {JSX.element}
 */
function Card() {
  const [responseData, setResponseData] = useState([]);
  const [hideMenu, setHideMenu] = useState({ id: null, isShown: false });
  const sortedUrl = useContext(UrlContext);

  /**
   * Handle showing hidden div
   */
  const clickFun = (id) => {
    setHideMenu({ id, isShown: true });
  };

  /**
   * Handle calculating the progress.
   *
   * @param {Number} vote vote rate.
   *
   * @return {Number}
   */
  const progressHandler = (vote) => {
    vote /= 10;
    const percentage = 116 - vote * 116;
    return Math.ceil(percentage);
  };

   /**
   * Handle showing hidden div
   */
  const hideMenuHandler = () => {
    setHideMenu({ id: null, isShown: false });
  };

  useEffect(() => {
    (async () => {
      const response = await getAllMovies("en-Us", 1, sortedUrl.url);
      setResponseData(response);
    })();
  }, [sortedUrl.url]);

  return (
    <MainContainer>
      {responseData.length > 0 &&
        responseData.map((item) => (
          <CardContainer key={item.id}>
            {item.poster_path && (
              <Image
                img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              />
            )}
            {!item.poster_path && (
              <Image src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg" />
            )}
            <DotButton
              onClick={() => {
                clickFun(item.id);
              }}
            />
            <Circle
              rate={progressHandler(item.vote_average)}
              fill={item.vote_average * 10}
            />
            <Info>
              <Title>{item.original_title}</Title>
              <ReleasedDate>{item.release_date}</ReleasedDate>
              <OverView>{item.overview}</OverView>
            </Info>
            <HiddenMenu
              isClicked={hideMenu}
              id={item.id}
              hide={hideMenuHandler}
            />
          </CardContainer>
        ))}
    </MainContainer>
  );
}

export default Card;
