import React from 'react';
import Header from './Components/Header';
import './App.css';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="contentLimit">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
