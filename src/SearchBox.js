import React from 'react';
import './css/SearchBox.css';
// import App from './App'


export default function SearchBox({searchfeild , SearchChange}){
    return(
        <div className="SearchField">
            <input className="SearchBox" 
            onChange={SearchChange} 
            type="search" 
            placeholder="Search Robots" />
        </div>
    );
}