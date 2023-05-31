import React from 'react';
import {Link} from "react-router-dom";
import './styles/Navigation.scss'


//////4NnLoVJT_ZQaMJqqwW4XMGCWIlhRynZio6uYPXiCqOAJzQ-MPqh79A//////
const Navigations = () => {
    return (
        <div className='container'>
            <div className='navigation'>
                <Link to={'/'}>Главная</Link>
                <Link to={'/weapons'}>Оружие</Link>
                <Link to={'/maps'}>Карты</Link>
                <Link to={'/characters'}>Оперативники</Link>
                <Link to={'/mods'}>Режимы</Link>
            </div>
        </div>
    );
};

export default Navigations;