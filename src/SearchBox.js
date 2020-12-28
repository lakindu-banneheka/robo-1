import React from 'react';
import './css/SearchBox.css'


export default function SearchBox(){
    return(
        <div className="SearchBoxBackground">
            <input className="SearchBox" type="search" placeholder="Search Robots" />
        </div>
    );
}