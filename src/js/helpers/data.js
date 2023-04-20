/**
 * Used to fetch json data from a url
 * @param {String} url
 * @param {Object} body
 * @returns {Promise} json
 */
const fetchJson = async function (url, body = {}) {
  const response = await fetch(url, body);
  const json = await response.json();
  return json;
};

export { fetchJson };
