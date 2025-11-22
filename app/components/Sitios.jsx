"use client";

export default function Sitios({ sitios }) {
  return (
    <div className="sitios">

      <h2>Lugares destacados</h2>

      <div className="sitios-grid">
        {sitios.map((sitio, index) => (
          <div key={index} className="sitio-card">
            <img src={sitio.img} alt={sitio.titulo} />

            <div className="info">
              <h3>{sitio.titulo}</h3>
              <p>{sitio.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ESTILOS */}
      <style jsx>{`
        .sitios {
          max-width: 1000px;
          margin: 3rem auto;
          padding: 2rem 1.5rem;
        }

        .sitios h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          border-bottom: 3px solid #ff7a00;
          display: inline-block;
          padding-bottom: 0.3rem;
          font-weight: 600;
        }

        .sitios-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2.5rem;
        }

        .sitio-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .sitio-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(255, 122, 0, 0.4);
        }

        .sitio-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .info {
          padding: 1rem;
        }

        .sitio-card h3 {
          color: #ff7a00;
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
        }

        .sitio-card p {
          font-size: 0.95rem;
          color: #555;
        }
      `}</style>
    </div>
  );
}
