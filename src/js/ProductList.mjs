import { renderListWithTemplate } from "./utils.mjs";


export default class ProductList {
    constructor(categeory, dataSource, listElement) {
        this.categeory = categeory;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const listProd = await this.dataSource.getData();
        this.renderList(listProd);
    }

    renderList(list) {
        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
}

function productCardTemplate(product) {
  return `
    <li class="product-card">
        <a href="product_pages/?product=${product.Id}">
            <img src="${product.Image}" alt="${product.Name}">
            <h2 class="card__brand">${product.Brand.Name}</h2>
            <h3 class="card__name">${product.Name}</h3>
            <p class="product-card__price">$${product.FinalPrice}</p>
        </a>
    </li>
    `;
}