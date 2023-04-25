/**
 * shop-page.js
 * ----------------
 * DESCRIPTION:
 * This file contains specific functionality for the page /shop.html
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 24/04/2023
 * LAST UPDATE: 24/04/2023
 */
// IMPORTS ////////////////
import { clone } from "./helpers/element.js";
import { fetchJson } from "./helpers/data.js";
import { getSearchParams } from "./helpers/page.js";

// DOM Elements ////////////////
const templateCard = document.querySelector('[data-template="true"]');

// FUNCTIONS ////////////////
/**
 * Used to set the product cards with the data from API
 * @param {Object} product
 */
const setProductCard = (product) => {
  const cloneCard = clone(templateCard);
  const productLink = cloneCard.querySelector('[data-element="product-link"]');
  const image = productLink.querySelector("img");
  productLink.href = `./shop/product.html?name=${product.name
    .toLowerCase()
    .replace(" ", "")}`;
  image.src = product.images.image_1;
  image.alt = product.shortDescription;
  cloneCard.querySelector('[data-element="product-name"').textContent =
    product.name;
  cloneCard.querySelector(
    '[data-element="product-price"'
  ).textContent = `€ ${product.price}`;
  cloneCard.querySelector('[data-element="product-category"').textContent =
    product.category.replace("-", " ");
};

/**
 * Used to sort the products by popularity
 * @param {Array} products
 * @returns {Array}
 */
const sortByPopularity = (products) => {
  const productsByRate = products.sort((a, b) => a.rate - b.rate).reverse();
  return productsByRate;
};

/**
 * Used to sort the products by name A-Z
 * @param {Array} products
 * @returns {Array}
 */
const sortByNameAZ = (products) => {
  const productsByNameAZ = products.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return productsByNameAZ;
};

/**
 * Used to sort the products by name Z-A
 * @param {Array} products
 * @returns {Array}
 */
const sortByNameZA = (products) => {
  const productsByNameAZ = products.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    return 0;
  });
  return productsByNameAZ;
};

/**
 * Used to sort the products by price lower first
 * @param {Array} products
 * @returns {Array}
 */
const sortByLowerPrice = (products) => {
  const productsByLowerPrice = products.sort((a, b) => a.price - b.price);
  return productsByLowerPrice;
};

/**
 * Used to sort the products by price higher first
 * @param {Array} products
 * @returns {Array}
 */
const sortByHigherPrice = (products) => {
  const productsByHigherPrice = products
    .sort((a, b) => a.price - b.price)
    .reverse();
  return productsByHigherPrice;
};

// LOGIC ////////////////
// fetchJson("https://taburete.minimaldesigns.ie/data/products.json").then(
fetchJson("/dist/data/products.json").then((response) => {
  let products = response.data.products;
  const params = getSearchParams();
  if (params.has("order")) {
    switch (params.get("order")) {
      case "most-popular":
        products = sortByPopularity(products);
        break;
      case "a-z":
        products = sortByNameAZ(products);
        break;
      case "z-a":
        products = sortByNameZA(products);
        break;
      case "lower-price":
        products = sortByLowerPrice(products);
        break;
      case "higher-price":
        products = sortByHigherPrice(products);
        break;
    }
  } else {
    products = sortByPopularity(products);
  }
  products.forEach((product) => {
    if (params.has("category")) {
      switch (params.get("category")) {
        case "all":
          setProductCard(product);
          break;
        case "bedroom":
          if (product.category === "bedroom") setProductCard(product);
          break;
        case "living-room":
          if (product.category === "living-room") setProductCard(product);
          break;
        case "garden":
          if (product.category === "garden") setProductCard(product);
          break;
        case "dining":
          if (product.category === "dining") setProductCard(product);
          break;
      }
    } else {
      setProductCard(product);
    }
  });
});
