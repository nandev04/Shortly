import React from 'react';
import Header from './Components/Header';
import './App.css';
import Main from './Components/Main';
import SloganFooter from './Components/sloganFooter';

function App() {
  return (
    <div className="contentLimit">
      <Header />
      <Main />
    </div>
  );
}

export default App;
