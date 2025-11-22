'use client'
import React, { ReactNode } from 'react'

interface CuriosidadesProps {
  children: ReactNode
}

export default function Curiosidades({ children }: CuriosidadesProps) {
  return (
    <section className="curiosidad">
      <div className="content">{children}</div>

      <style jsx>{`
        .curiosidad {
          background: linear-gradient(135deg, #ffe5cc 0%, #fff5ec 100%);
          padding: 3rem 2rem;
          margin: 0 auto;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          max-width: 1000px;
          position: relative;
        }

        .curiosidad::before {
          content: "★";
          font-size: 3rem;
          color: #ff7a00;
          position: absolute;
          top: 15px;
          left: 15px;
          opacity: 0.15;
        }
      `}</style>
    </section>
  )
}
