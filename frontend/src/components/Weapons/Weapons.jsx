import React, { useEffect, useState } from 'react'
import './styles/Weapons.scss'
import { Link } from 'react-router-dom';

export default function Weapons() {
    const[weapons, setWeapons] = useState();

    const fetchAllWeapons = async () =>{
        const response = await fetch("http://localhost:8000/weapons");
        const weapons = await response.json();
        setWeapons(weapons)
    }

    useEffect(()=>{
        fetchAllWeapons()
    }, [])

    if(weapons === undefined)
        return(null)
    else
        return (
    <div className='weapons'>
        <div className='container'>
        <div className='weapons-list-title'>ОСНОВНОЕ</div>
            <div className="weapons-list">
                {weapons.first.map((item) => (
                    <Link to={'/weapons/'+item.id}>
                    <div className='weapons-list-card'>
                        <img src={item.icon} alt="" className="weapons-list-card-icon" />
                        <div className="weapons-list-card-name">{item.name}</div>
                    </div>
                    </Link>
                ))}
            </div>
            <div className='weapons-list-title'>ВТОРИЧНОЕ</div>
            <div className="weapons-list">
                {weapons.second.map((item) => (
                    <Link to={'/weapons/' + item.id}>
                    <div className='weapons-list-card'>
                        <img src={item.icon} alt="" className="weapons-list-card-icon" />
                        <div className="weapons-list-card-name">{item.name}</div>
                    </div>
                    </Link>
                ))}
            </div>
            <div className='weapons-list-title'>ГАДЖЕТЫ</div>
            <div className="weapons-list">
                {weapons.gadgets.map((item) => (
                    <Link to={'/weapons/'+item.id}>
                    <div className='weapons-list-card'>
                        <img src={item.icon} alt="" className="weapons-list-card-icon" />
                        <div className="weapons-list-card-name">{item.name}</div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}
