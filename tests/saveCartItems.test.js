const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it("Testando que ao chamar saveCartItems com o parametro '<ol><li>Item</li></ol>', o método 'localStorage.setItem' está corretamente chamado.", () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  })

  it("Testando se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro 'cartItems' e o segundo sendo o valor passado como argumento para saveCartItems", () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', JSON.stringify('<ol><li>Item</li></ol>'));
  } )
});
 