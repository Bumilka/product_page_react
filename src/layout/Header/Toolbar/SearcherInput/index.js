import React, { Component } from 'react';
import Search from '../../../../image/top/search.png';
import './style.scss'


class SearcherInput extends Component {
    render() {
        return (
            <div>
                <form className="menuSearch">
                    <input className="searcherInput" placeholder="Wpisz czego szukasz..." />
                    <button className="searchButton" type="submit">
                        <img src={Search} className='searchIcon' />
                    </button>
                </form>
            </div>
        );
    }
}

export default SearcherInput;