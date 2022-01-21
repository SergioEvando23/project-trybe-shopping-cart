const fetchProducts = (key) => fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${key}`)
  .then((response) => response.json())
  .catch(() => { throw new Error('You must provide an url'); });

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
