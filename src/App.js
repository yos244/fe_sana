import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleCardAdded = () => {
    setRefresh(prev => !prev); // Toggle refresh state
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1 className='main-text'>Store Items</h1>
        <CardList refresh={refresh} /> {/* Pass refresh state */}
        <Form onCardAdded={handleCardAdded} /> {/* Pass refresh function */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
