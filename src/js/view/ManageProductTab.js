import selectDom from '../utils/selectDom';
import { manageProductTemplate, productTableRow, updateProductTableRow } from './template';

export default class ManageProductTab {
  #vendingMachine;
  #manageContainer;
  #addProductForm;
  #addProductNameInput;
  #addProductPriceInput;
  #addProductStockInput;
  #productStatusTable;

  constructor(machine) {
    this.#vendingMachine = machine;

    this.#manageContainer = document.createElement('main');
    this.#manageContainer.insertAdjacentHTML('beforeend', manageProductTemplate);
    this.#addProductForm = selectDom('#add-product-form', this.#manageContainer);
    this.#addProductNameInput = selectDom('#add-product-name-input', this.#manageContainer);
    this.#addProductPriceInput = selectDom('#add-product-price-input', this.#manageContainer);
    this.#addProductStockInput = selectDom('#add-product-stock-input', this.#manageContainer);
    this.#productStatusTable = selectDom('#product-status-table', this.#manageContainer);

    this.#addProductForm.addEventListener('submit', this.#handleAddProductForm);
    this.#productStatusTable.addEventListener('click', this.#handleProductStatus);
  }

  #handleAddProductForm = (e) => {
    e.preventDefault();
    const name = this.#addProductNameInput.value;
    const price = this.#addProductPriceInput.valueAsNumber;
    const stock = this.#addProductStockInput.valueAsNumber;

    try {
      const id = this.#vendingMachine.addProduct({ name, price, stock });

      this.#productStatusTable.insertAdjacentHTML(
        'beforeend',
        productTableRow({ name, price, stock, id })
      );
      this.#resetInput();
    } catch ({ message }) {
      alert(message);
    }
  };

  #resetInput() {
    this.#addProductNameInput.value = '';
    this.#addProductPriceInput.value = '';
    this.#addProductStockInput.value = '';
    this.#addProductNameInput.focus();
  }

  #handleProductStatus = ({ target }) => {
    if (target.classList.contains('update-product-button')) {
      this.#handleProductUpdate(target);
    }

    if (
      target.classList.contains('remove-product-button') &&
      window.confirm('정말 삭제하겠습니까?')
    ) {
      this.#handleProductRemove(target);
    }

    if (target.classList.contains('confirm-update-button')) {
      this.#handleProductUpdateConfirm(target);
    }
  };

  #handleProductUpdate = (target) => {
    const targetTableRow = target.closest('tr');
    const name = selectDom('.product-name', targetTableRow).textContent;
    const price = selectDom('.product-price', targetTableRow).textContent;
    const stock = selectDom('.product-stock', targetTableRow).textContent;
    targetTableRow.insertAdjacentHTML(
      'afterend',
      updateProductTableRow({
        name,
        price,
        stock,
        id: target.dataset.productId,
      })
    );
    targetTableRow.remove();
  };

  #handleProductUpdateConfirm = (target) => {
    const targetTableRow = target.closest('tr');

    const name = selectDom('.update-product-name-input', targetTableRow).value;
    const price = selectDom('.update-product-price-input', targetTableRow).valueAsNumber;
    const stock = selectDom('.update-product-stock-input', targetTableRow).valueAsNumber;

    const { productId } = target.dataset;
    try {
      this.#vendingMachine.updateProduct(productId, { name, price, stock });
      targetTableRow.insertAdjacentHTML(
        'afterend',
        productTableRow({ name, price, stock, id: productId })
      );
      targetTableRow.remove();
    } catch ({ message }) {
      alert(message);
    }
  };

  #handleProductRemove = (target) => {
    const { productId } = target.dataset;
    try {
      this.#vendingMachine.removeProduct(productId);
      target.closest('tr').remove();
    } catch ({ message }) {
      alert(message);
    }
  };

  get tabElements() {
    return this.#manageContainer;
  }
}
