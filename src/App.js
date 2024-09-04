// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Ensure Navbar component is imported
import CardList from './components/CardList'; // Ensure CardList component is imported
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1 className='main-text'>Store Items</h1>
        <CardList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
