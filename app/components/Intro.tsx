'use client'
import React, { ReactNode } from 'react'

interface IntroProps {
  children: ReactNode
}

export default function Intro({ children }: IntroProps) {
  return (
    <section className="intro">
      <div className="content">{children}</div>

      <style jsx>{`
        .intro {
          max-width: 1000px;
          margin: 3rem auto;
          padding: 2rem 1.5rem;
          text-align: center;
          background: #fff6e5;
          border-radius: 20px;
          box-shadow: 0 5px 20px rgba(255, 122, 0, 0.2);
        }

        
      `}</style>
    </section>
  )
}
