const { default: get } = require("components/service/http");

const baseUrl = `https://api.themoviedb.org`;
const ApiKey = `3024cf700c94345aa84ec47dbf98f3a4`;

/**
 * Make get request.
 *
 * @param {string} language The requested movies language.
 * @param {string} page     The page number.
 * @param {string} sortedBy The sort by value.
 *
 * @return {Promise<Object>}      Promise fulfilled with response data.
 */
const getAllMovies = (language, page, sortedBy) => {
  const response = get(
    `${baseUrl}/3/discover/movie?api_key=${ApiKey}&language=${language}&sort_by=${sortedBy}&include_adult=false&include_video=false&page=${page}`
  );
  return response;
};

export default getAllMovies;
