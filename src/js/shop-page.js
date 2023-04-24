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
import { reveal, hide, clone } from "./helpers/element.js";
import { fetchJson } from "./helpers/data.js";

// DOM Elements ////////////////
const templateCard = document.querySelector('[data-template="true"]');

// FUNCTIONS ////////////////
const setProductCards = (product) => {
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
    product.category;
};

// LOGIC ////////////////
fetchJson("https://taburete.minimaldesigns.ie/data/products.json").then(
  (response) => {
    const products = response.data.products;
    products.forEach((product) => {
      setProductCards(product);
    });
  }
);
