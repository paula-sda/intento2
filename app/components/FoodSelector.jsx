'use client';

import { useState } from 'react';

export default function FoodSelector({ foods }) {
  const [activeFood, setActiveFood] = useState(Object.keys(foods)[0]);

  const currentFood = foods[activeFood];

  return (
    <div className="comida">
      <h2>Comida típica</h2>

      <div className="comida-buttons">
        {Object.keys(foods).map(foodKey => (
          <button
            key={foodKey}
            className={foodKey === activeFood ? 'active' : ''}
            onClick={() => setActiveFood(foodKey)}
          >
            {foods[foodKey].titulo}
          </button>
        ))}
      </div>

      <div className="comida-content">
        <div className="comida-img">
          <img src={currentFood.img} alt={currentFood.alt} />
        </div>

        <div className="comida-text">
          <h3>{currentFood.titulo}</h3>
          <p>{currentFood.desc}</p>
        </div>
      </div>

      <style jsx>{`
        .comida {
          max-width: 1000px;
          margin: 3rem auto;
          padding: 0rem 1.5rem;
        }

        .comida h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          border-bottom: 3px solid #ff7a00;
          display: inline-block;
          padding-bottom: 0.3rem;
          font-weight: 600;
        }

        .comida-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 1.5rem;
        }

        .comida-buttons button {
          padding: 0.6rem 1.2rem;
          border: none;
          border-radius: 8px;
          background: #ddd;
          cursor: pointer;
          transition: 0.3s ease, transform 0.2s ease;
          font-size: 1rem;
        }

        .comida-buttons button:hover {
          background: #ffb366;
        }

        .comida-buttons button.active {
          background: #ff7a00;
          color: white;
          font-weight: 600;
        }

        .comida-content {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          align-items: center;
        }

        .comida-img {
          flex: 0 1 50%;
        }

        .comida-img img {
          width: 90%;
          height: 400px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          object-fit: cover;
          display: block;
        }

        .comida-text {
          flex: 1 1 350px;
          align-self: flex-start;
        }

        .comida-text h3 {
          color: #ff7a00;
          margin-bottom: 0.8rem;
          font-size: 1.5rem;
        }

        .comida-text p {
          font-size: 1rem;
          line-height: 1.6;
          color: #555;
        }
      `}</style>
    </div>
  );
}
