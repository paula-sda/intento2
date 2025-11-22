'use client';

import { useState, useEffect } from 'react';

export default function Carousel({ galeria }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [lightboxActive, setLightboxActive] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  // Ajuste responsive
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 600) setItemsToShow(1);
      else if (window.innerWidth < 900) setItemsToShow(2);
      else setItemsToShow(3);
    };

    updateItems();
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, []);

  const next = () => {
    setCurrentIndex((prev) =>
      prev >= galeria.length - itemsToShow ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? galeria.length - itemsToShow : prev - 1
    );
  };

  const openImg = (foto) => {
    setLightboxImage(foto.img);
    setLightboxActive(true);
  };

  const closeLightbox = () => setLightboxActive(false);

  return (
    <div className="carousel-wrapper">
      <h2>Galería de Fotos</h2>

      <div className="carousel-container">
        <button className="btn left" onClick={prev}>
          &#10094;
        </button>

        <div className="carousel">
          <div
            className="track"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {galeria.map((foto, i) => (
              <div key={i} className="item" onClick={() => openImg(foto)}>
                <div className="image-container">
                  <img src={foto.img} alt={foto.alt} />
                  <div className="image-caption">
                    {foto.name || foto.alt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="btn right" onClick={next}>
          &#10095;
        </button>
      </div>

      {lightboxActive && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={lightboxImage} alt="" />
          </div>
        </div>
      )}

      <style jsx>{`
        .carousel-wrapper {
          max-width: 1000px;
          margin: 3rem auto;
          padding: 0 1.5rem;
          text-align: left;
          position: relative;
        }

        h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          border-bottom: 3px solid #ff7a00;
          display: inline-block;
          padding-bottom: 0.3rem;
          font-weight: 600;
        }

        .carousel-container {
          position: relative;
        }

        .carousel {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
        }

        .track {
          display: flex;
          transition: transform 0.4s ease;
        }

        .item {
          flex: 0 0 calc(100% / ${itemsToShow});
          padding: 0.5rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .item:hover {
          transform: scale(1.03);
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 250px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 0.8rem;
          text-align: center;
          font-weight: 600;
          font-size: 1rem;
        }

        .btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #ff7a00 !important;
          color: white !important;
          border: none !important;
          padding: 0.8rem 1rem;
          border-radius: 50%;
          cursor: pointer;
          transition: 0.3s ease;
          z-index: 1000;
          font-size: 1.2rem;
          font-weight: bold;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
          opacity: 1 !important;
          visibility: visible !important;
        }

        .btn:hover {
          background: #ff944d !important;
          transform: translateY(-50%) scale(1.1);
        }

        .left {
          left: 10px;
        }

        .right {
          right: 10px;
        }

        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .lightbox-content img {
          max-width: 90%;
          max-height: 90%;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 900px) {
          .item {
            flex: 0 0 calc(100% / 2);
          }
          
          .btn {
            width: 45px;
            height: 45px;
            padding: 0.7rem;
          }
        }

        @media (max-width: 600px) {
          .item {
            flex: 0 0 100%;
          }
          
          .btn {
            width: 40px;
            height: 40px;
            padding: 0.6rem;
            font-size: 1rem;
          }
          
          .left {
            left: 5px;
          }
          
          .right {
            right: 5px;
          }
        }
      `}</style>
    </div>
  );
}