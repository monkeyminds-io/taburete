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
const getPageFromUrl = function () {
  const url = window.location.href;
  const page = url.split("/")[url.split("/").length - 1].split(".")[0];
  return page;
};

export { getPageFromUrl };
