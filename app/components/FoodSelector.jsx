'use client';

import { useState } from 'react';

export default function FoodSelector({ foods }) {
  const [activeFood, setActiveFood] = useState(Object.keys(foods)[0]);

  const currentFood = foods[activeFood];

  return (
    <div >
      <h2>Comida típica</h2>
      <div >
        {Object.keys(foods).map(foodKey => (
          <button
            key={foodKey}
            
            onClick={() => setActiveFood(foodKey)}
          >
            {foods[foodKey].titulo}
          </button>
        ))}
      </div>
      <div >
        <div >
          <img 
            src={currentFood.img} 
            alt={currentFood.alt}
          />
        </div>
        <div >
          <h3>{currentFood.titulo}</h3>
          <p>{currentFood.desc}</p>
        </div>
      </div>
    </div>
  );
}