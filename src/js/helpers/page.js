/**
 * page.js
 * ----------------
 * DESCRIPTION:
 * This file contains a collection of handy functions related to page manipilation.
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 22/04/2023
 * LAST UPDATE: 22/04/2023
 */
/**
 * Used to get the page name from the url
 * @returns
 */
const getPageFromUrl = () => {
  const url = window.location.href;
  const page = url.split("/")[url.split("/").length - 1].split(".")[0];
  return page;
};

/**
 * Used to get the URL params
 * @returns
 */
const getSearchParams = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams;
};

export { getPageFromUrl, getSearchParams };
