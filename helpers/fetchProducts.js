const fetchProducts = async (key) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${key}`);
  const data = await response.json();
  return data.results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
