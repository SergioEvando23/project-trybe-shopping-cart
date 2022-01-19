require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

describe('1 - Teste a função fetchProducts', () => {
  it("Teste o tipo primitivo de fetchProducts para saber se é uma função", () => {
    expect(typeof fetchProducts).toBe("function");
  });
  it("Chame a função fetchProducts com o parametro 'computador' e veja se a fetch foi chamada", async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalled();
  });

  it("Chame a função fetchProducts com o argumento 'computador' e veja se a url requisitada está correta", async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalledWith(url);
  })

  it("Teste se o retorno da função fetchProducts com o parametro 'computador' é um objeto semelhante ao computadorSearch, que já está importado no arquivo de teste", async () => {
    expect(await fetchProducts("computador")).toEqual(computadorSearch);
  })

  it("Teste se, ao chamar a função fetchProducts sem parametro, retorna um erro com a mensagem: You must provide an url", async () => {
    await expect(fetchProducts()).rejects.toThrow("You must provide an url");
  })
});
  