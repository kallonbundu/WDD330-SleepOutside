import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

const productData = new ProductData("tents");

const element = document.querySelector(".product-list");

const productList = new ProductList("tents", productData, element);

productList.init();
loadHeaderFooter();
