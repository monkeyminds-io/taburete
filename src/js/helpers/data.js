/**
 * data.js
 * ----------------
 * DESCRIPTION:
 * This file contains a collection of handy functions related to data manipulation
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 22/04/2023
 * LAST UPDATE: 22/04/2023
 */
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
