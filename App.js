import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Explore from './components/Explore';
import AddItem from './components/AddItem';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  useEffect(() => {
    axios.get('https://run.mocky.io/v3/200998b7-f48d-4456-a639-0b5d2d275c12')
      .then(response => {
        if (response.data) {
          setItems(response.data);
        } else {
          setError('Invalid data format');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      });
  }, []);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const filteredItems = items.filter(item =>
    item.item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Header setSearchQuery={setSearchQuery} />
      <div className="container">
        <button className="filter-button" onClick={() => setIsFilterVisible(!isFilterVisible)}>
          {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
        </button>
        {isFilterVisible && <AddItem addItem={addItem} />}
        {error ? (
          <p>{error}</p>
        ) : (
          <Explore items={filteredItems} />
        )}
      </div>
    </div>
  );
};

export default App;
