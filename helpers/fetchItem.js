const fetchItem = (key) => fetch(`https://api.mercadolibre.com/items/${key}`)
  .then((response) => response.json())
  .catch(() => { throw new Error('You must provide an url'); });

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
