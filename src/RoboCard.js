import React from 'react';
import './css/Robcard.css';


export default function RoboCard({name , email , id}) {
    return (
    <div className="card">
        <img src={`https://robohash.org/${id}`} className='img' alt="Robots" />
        <div className="container">
            <div className="name" >{name}</div>
            <div className="email" >{email}</div>
        </div>
    </div>
    );
  }
