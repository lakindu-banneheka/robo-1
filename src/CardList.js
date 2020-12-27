import React from 'react';
import './css/Robcard.css';
import RoboCard from './RoboCard';
import {robots, } from './robots'

export default function CardList() {
    return (
        <div>
            <RoboCard id={robots[0].id} name={robots[0].name} email={robots[0].email} />
            <RoboCard id={robots[1].id} name={robots[1].name} email={robots[1].email} />
            <RoboCard id={robots[2].id} name={robots[2].name} email={robots[2].email} />
            <RoboCard id={robots[3].id} name={robots[3].name} email={robots[3].email} />
            <RoboCard id={robots[4].id} name={robots[4].name} email={robots[4].email} />
            <RoboCard id={robots[5].id} name={robots[5].name} email={robots[5].email} />
            <RoboCard id={robots[6].id} name={robots[6].name} email={robots[6].email} />
        </div>
    );
}