import React from 'react';
import './css/SearchField.css';

export default function SearchBox({searchfeild , SearchChange}){
    return(
            <form className="wrap" action="">
                <div class="search">
                <input type="text" onChange={SearchChange} class="searchTerm" placeholder="Search Robots" />
                <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                </button>
            </div>
            </form>
    );
}