const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it("Testando que ao chamar getSavedCartItems, o método 'localStorage.getItem' é chamado corretamente", () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  })

  it("Testando que ao chamar getSavedCartItems, o método 'localStorage.getItem' é chamado corretamente com o parametro 'cartItems'", () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  })
});

// testes elaborados com ajuda do aluno laecio silva - turma-xp-b
