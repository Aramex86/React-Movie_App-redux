import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footerwrapp'>
                <div className='footerwrapp__movies'>
                    <h3>Movies</h3>
                    <ul className='list'>
                        <li className='list__item'>
                            <a href="#" className='list__link'>Popular</a>
                        </li>
                        <li className='list__item'>
                            <a href="#" className='list__link'>Now Playing</a>
                        </li>
                        <li className='list__item'>
                            <a href="#" className='list__link'>Upcoming</a>
                        </li>
                        <li className='list__item'>
                            <a href="#" className='list__link'>Top Rated</a>
                        </li>
                    </ul>
                </div>
                <div className='footerwrapp__tv'>
                <h3>TV Shows</h3>
                    <ul className='list'>
                        <li className='list__item'>
                            <a href="#" className='list__link'>Popular</a>
                        </li>
                        <li className='list__item'>
                            <a href="#" className='list__link'>Airing Today</a>
                        </li>
                        <li className='list__item'>
                            <a href="#" className='list__link'>On Tv</a>
                        </li>
                        <li className='list__item'>
                            <a href="#" className='list__link'>Top Rated</a>
                        </li>
                    </ul>
                </div>
                <div className='footerwrapp__people'>
                <h3>People</h3>
                    <ul className='list'>
                        <li className='list__item'>
                            <a href="#" className='list__link'>Popular People</a>
                        </li>
                    </ul>
                </div>
                <div className='footerwrapp__more'>
                <h3>More</h3>
                    <ul className='list'>
                        <li className='list__item'>
                            <a href="#" className='list__link'>Discutions</a>
                        </li>
                        <li className='list__item'>
                            <a href="#" className='list__link'>Leaderboard</a>
                        </li>
                        <li className='list__item'>
                            <a href="#" className='list__link'>Suport</a>
                        </li>
                    </ul>
                </div>
            </div>
           <Link to="/" className='logo'>MOVIE-APP</Link> 
        </footer>
    )
}

export default Footer
