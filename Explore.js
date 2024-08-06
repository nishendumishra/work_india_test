import React from 'react';
import './Explore.css';

const Explore = ({ items }) => {
  return (
    <div className="explore-container">
      {items.length > 0 ? (
        items.map(item => (
          <div key={item.id} className="item-card">
            <div className="item-image">
              <img src={item.image_url} alt={item.item} />
            </div>
            <div className="item-details">
              <h2>{item.item}</h2>
              <p><strong>MRP:</strong> {item.price}</p>
              <p><strong>Shipping:</strong> {item.shipping_method || 'None'}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No items match your search</p>
      )}
    </div>
  );
};

export default Explore;
