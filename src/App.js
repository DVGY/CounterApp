import React from 'react';
import './App.css';
import CartBar from '../src/components/CartBar';
import CartTotalCount from './components/CartTotalCount';
function App() {
  return (
    <div className="App d-flex flex-column justify-content-center">
      <CartTotalCount />
      <CartBar />
    </div>
  );
}

export default App;
