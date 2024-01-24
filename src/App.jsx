import React from 'react';
import Header from './Components/Header';
import './App.css';
import Main from './Components/Main';
import Input from './Components/Input';

function App() {
  return (
    <div className="contentLimit">
      <Header />
      <Main />
      <Input />
    </div>
  );
}

export default App;
