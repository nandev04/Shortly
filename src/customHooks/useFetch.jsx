import React from 'react';

const useFetch = () => {
  const [stateArray, setStateArray] = React.useState([]);

  let json;
  const postFetch = React.useCallback(async (url, inputState) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer 78IUTWMYCM3e1xlkKrVz03YZXUDO1ZUaLd44cbKYVz0GsOybORvy2PRQ14qL',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: inputState,
      }),
    });
    json = await response.json();
    localStorage.setItem(json.data.url, json.data.tiny_url);
  }, []);

  // Função para atualizar o stateArray com os itens do localStorage
  const newStateArray = [];
  const updateStateArrayFromLocalStorage = () => {
    // Constrói um novo array com todos os itens do localStorage
    for (let i = 0; i < localStorage.length; i++) {
      // Obtém a chave atual
      let key = localStorage.key(i);
      // Obtém o valor correspondente à chave atual
      let value = localStorage.getItem(key);
      // Adiciona o par chave-valor ao novo array
      newStateArray.push({ key: key, value: value });
    }
    // Atualiza o estado com o novo array contendo todos os itens do localStorage
    setStateArray(newStateArray);
  };

  // Atualiza o stateArray quando o componente é montado
  React.useEffect(() => {
    updateStateArrayFromLocalStorage();
  }, []);

  // Atualiza o stateArray sempre que um novo item é adicionado ao localStorage
  window.addEventListener('storage', () => {
    updateStateArrayFromLocalStorage();
  });

  return { postFetch, stateArray, json };
};

export default useFetch;
