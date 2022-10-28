import React from 'react'
import'./Card.css'

export default function Card({emoji , heading, Details}) {
  return (
    <div>
          <div className="card">
              <img src={emoji} alt="" />
              <span>{heading}</span>
              <span>{Details}</span>
              <button className="c-btn">LEARN MORE</button>
      </div>
    </div>
  )
}
