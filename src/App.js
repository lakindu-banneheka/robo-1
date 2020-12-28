/* eslint-disable no-unused-vars */
import React from 'react';
import CardList from './CardList';
import { robots } from "./robots";
import SearchBox from "./SearchBox";

export default function App() {
    return (
        <div>
            <h1>Robo Friends</h1>
            <SearchBox />
            <CardList robots={robots}/>
        </div>
    );
}