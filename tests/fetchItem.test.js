require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');
const url = 'https://api.mercadolibre.com/items/MLB1615760527';

describe('2 - Teste a função fetchItem', () => {
  it("Testando o tipo primitivo de fetchItem  para saber se é uma função", () => {
    expect(typeof fetchItem).toBe("function");
  });

  it("Chamando a função fetchItem com o parametro de id 'MLB1615760527' e testando se a requisição fetch foi chamada", async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it("Chamando a função fetchItem com o argumento de id 'MLB1615760527' e testando se a requisição fetch foi chamada com a url correta", async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it("Testando se o retorno da função fetchItem com o parametro de id 'MLB1615760527' é uma estrutura de dados igual ao objeto item que já está importado no arquivo", async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });

  it("Testando que ao chamar a função fetchItem sem parametros, ela retorna um erro com a mensagem: You must provide an url", async () => {
    await expect(fetchItem()).rejects.toThrow('You must provide an url');
  });
});
