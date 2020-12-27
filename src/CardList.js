import React from 'react';
import './css/Robcard.css';
import RoboCard from './RoboCard';
// import {robots, } from './robots';

export default function CardList({robots}) {
    return (
        <div>
            {
                robots.map((user , i)=>{
                    return (<RoboCard 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                    />
                    );
                })
            }
        </div>
    );
}