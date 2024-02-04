import React from 'react';

const useFetch = () => {
  const [itemLocalStorage, setitemLocalStorage] = React.useState([]);

  const postFetch = React.useCallback(async (url, inputState) => {
    let json;
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
    const arrayItems = [json.data.url, json.data.tiny_url];

    setitemLocalStorage((prevState) => [...prevState, arrayItems]);
    return json;
  }, []);

  return { postFetch, itemLocalStorage };
};

export default useFetch;
