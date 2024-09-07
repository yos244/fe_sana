import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import Footer from './components/Footer';
import Form from './components/Form.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1 className='main-text'>Store Items</h1>
        <CardList />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;
