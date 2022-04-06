/**
 * Make get request.
 *
 * @param {string} url            Request URl.
 * @param {Object} [headers=null] Object contains request headers.
 *
 * @return {Promise<Object>}      Promise fulfilled with response data.
 */
const getRequest = (url) => {
  const response = fetch(url, {
    dataType: 'json',
    headers: { 'Content-Type': 'application/json' },
    method: 'get',
  })
    .then((result) => result.json())
    .then((result) => result.results);
  return response;
};

export default getRequest;
