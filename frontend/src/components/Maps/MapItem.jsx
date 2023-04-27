import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './styles/MapItem.scss'
import { Link } from 'react-router-dom';

export default function MapItem() {
    let{mapId} = useParams();

    const [map, setMap] = useState();

    const fetchGetMap = async () => {
        const response = await fetch('http://localhost:8000/maps/{id}?map_id=' + mapId)
        const map = await response.json()
        console.log(map)
        setMap(map)
    }

    useEffect(()=>{
        fetchGetMap()
    }, [])

    if(map === undefined)
    return null;
    else
  return (
    <div className="container">
        <div className="map">
            <div className="map-header">
                <img src={map.img} alt="" className="map-header-privew" />
                <div className="map-header-content">
                    <div className="map-header-content-name">{map.name}</div>
                    <div className="map-header-content-item">
                        <div className="map-header-content-item-title">ЛОКАЦИЯ:</div>
                        <div className="map-header-content-item-value">{map.location}</div>
                    </div>
                    <div className="map-header-content-item">
                        <div className="map-header-content-item-title">МЕСТНОСТЬ: </div>
                        <div className="map-header-content-item-value">{map.terrain}</div>
                    </div>
                    <div className="map-header-content-item_play">
                        <div className="map-header-content-item_play-title">РЕЖИМЫ: </div>
                        <div className="map-header-content-item_play-value">{map.playlists.map((item) => (<Link to={"/gamemodes/" + Object.keys(item) }>{Object.values(item)}</Link>))}</div>
                    </div>
                </div>
            </div>

            <div className="map-overview">
                <div className="map-overview-title">ОПИСАНИЕ</div>
                <div className='map-overview-text' dangerouslySetInnerHTML={{ __html: map.overview }}></div>
            </div>

            <div className="map-blueprints">
                <div className="map-blueprints-title">ЧЕРТЕЖИ</div>
                <div className='map-blueprints-img'>
                    {map.layers.map((item) => (<img src={item}/>))}
                </div>
            </div>
        </div>
    </div>
  )
}
