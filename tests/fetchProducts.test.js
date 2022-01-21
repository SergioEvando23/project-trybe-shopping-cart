require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

describe('1 - Teste a função fetchProducts', () => {
  it("Testando o tipo primitivo de fetchProducts para saber se é uma função", () => {
    expect(typeof fetchProducts).toBe("function");
  });

  it("Chamando a função fetchProducts com o parametro 'computador' e testando se a requisição fetch foi chamada", async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalled();
  });

  it("Chamando a função fetchProducts com o parametro 'computador' e conferindo se a url requisitada está correta", async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it("Testando se o retorno da função fetchProducts com o parametro 'computador' é um objeto semelhante ao computadorSearch, que já está importado no arquivo de teste", async () => {
    expect(await fetchProducts("computador")).toEqual(computadorSearch);
  });

  it("Testando que ao chamar a função fetchProducts sem parametro, retorna um erro com a mensagem: You must provide an url", async () => {
    await expect(fetchProducts()).rejects.toThrow("You must provide an url");
  });
});
  