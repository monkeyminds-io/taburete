// TEST
import { test } from "./module-text.js";
test();

// NAVBAR FUNCTIONALITY
import { nav } from "./components/navbar.js";
const navbar = document.querySelector('[data-component="navbar"]');

nav(navbar); // Testing conection to navbar.js
