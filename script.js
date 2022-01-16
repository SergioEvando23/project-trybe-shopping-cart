const itemProduct = document.querySelector('.items');
const listCartItems = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.target.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function cardItem(arrayItems) {
  const listItems = document.querySelector('.items');
  arrayItems.forEach((element) => {
    const product = {
      name: element.title,
      image: element.thumbnail,
      sku: element.id,
    };
    listItems.appendChild(createProductItemElement(product));
  });
}

function verifyStorage(item) {
  if (localStorage.getItem('cartItems') === null) {
    saveCartItems([item]);
  } else {
    const cartItems = JSON.parse(getSavedCartItems());
    saveCartItems([...cartItems, item]);
  }
}

function loadStorage() {
  if (getSavedCartItems() !== null) {
    const cartItems = JSON.parse(getSavedCartItems());
    cartItems.forEach((item) => {
      const productItem = createCartItemElement(item);
      listCartItems.appendChild(productItem);
    });
  }
}

async function addToCart(id) {
  const itemFetch = await fetchItem(id);
  const productToCart = {
    name: itemFetch.title,
    salePrice: itemFetch.price,
    sku: itemFetch.id,
  };

  const productAdded = createCartItemElement(productToCart);
  listCartItems.appendChild(productAdded);
  verifyStorage(productToCart);
}

itemProduct.addEventListener('click', (event) => {
  if (event.target.className === 'item__add') {
    addToCart(getSkuFromProductItem(event.target.parentElement));
  }
});

async function init() {
  const resultFetch = await fetchProducts('computador');
  cardItem(resultFetch);
  loadStorage();
}

window.onload = () => { init(); };
