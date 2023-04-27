import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './styles/Maps.scss'
export default function Maps() {
    const[maps, setMaps] = useState();

    const fetchAllWeapons = async () =>{
        const response = await fetch("http://localhost:8000/maps");
        const maps = await response.json();
        setMaps(maps)
        console.log(maps)
    }

    useEffect(()=>{
        fetchAllWeapons()
    }, [])

    if(maps === undefined)
        return(null)
    else
  return (
    <div className='container'>
        <div className="maps">
            <div className="maps-title">КАРТЫ</div>
            <div className="maps-list">
                {maps.map((item) => (
                    <Link to={item.id}>
                        <div className='maps-list-item'>
                            <img src={item.img} alt="" />
                            <div className='maps-list-item-name'>{item.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}
