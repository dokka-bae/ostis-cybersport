import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import './styles/WeaponsItem.scss'

export default function WeaponsItem() {
    const{weapId} = useParams();
    const [weapon, setWeapons] = useState();

    const fetchGetWeapon = async () => {
        const response = await fetch('http://localhost:8000/weapons/{id}?weap_id=' + weapId)
        const weap = await response.json()
        console.log(weap)
        setWeapons(weap)
    }

    useEffect(()=>{
        fetchGetWeapon()
    }, [])

    if(weapon === undefined)
    return null;
    else
    return (
    <div className='container'>
        <div className="weapons_item">
            <header className='weapons_item-header'>
                <div className='weapons_item-header-left_box'>
                    <div className="weapons_item-header-left_box-info">
                        <div className="weapons_item-header-left_box-info-item">
                            <div className="weapons_item-header-left_box-info-item-title">НАЗВАНИЕ</div>
                            <div className="weapons_item-header-left_box-info-item-value">{weapon.weapon.name}</div>
                        </div>
                        { weapon.weapon.fire_modes !== undefined ? <div className="weapons_item-header-left_box-info-item">
                            <div className="weapons_item-header-left_box-info-item-title">РЕЖИМЫ ОГНЯ</div>
                            <div className="weapons_item-header-left_box-info-item-value">{weapon.weapon.fire_modes.map((item)=> (<div>{item}</div>))}</div>
                        </div> : null}
                        <div className="weapons_item-header-left_box-info-item">
                            <div className="weapons_item-header-left_box-info-item-title">ТИП</div>
                            <div className="weapons_item-header-left_box-info-item-value">{weapon.weapon.type}</div>
                        </div>
                        { weapon.weapon.damage_st !== undefined ? <div className="weapons_item-header-left_box-info-item">
                            <div className="weapons_item-header-left_box-info-item-title">УРОН</div>
                            <div className="weapons_item-header-left_box-info-item-value">{weapon.weapon.damage_st.map((item) => (<div>{item}</div>))}</div>
                        </div> : null }
                        <div className="weapons_item-header-left_box-info-item">
                            <div className="weapons_item-header-left_box-info-item-title">ИСПОЛЬЗУЮТ</div>
                            <div className="weapons_item-header-left_box-info-item-value">
                            {weapon.used.map((item)=>(
                                <Link className='weapons_item-header-left_box-used-item' to={item !== null ? '/characters/' + item.id : ''}>
                                    <img src={item !== null ? item.icon : ''} title={item !== null ? item.name : ''} alt={item !== null ? item.name : ''} />   
                                </Link>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='weapons_item-header-right_box'>
                    <img src={weapon.weapon.icon} alt="" />
                </div>
            </header>
            <div className="weapons_item-overview">
                <div className="weapons_item-overview-title">
                    ОПИСАНИЕ
                </div>
                <div className='weapons_item-overview-text' dangerouslySetInnerHTML={{ __html: weapon.weapon.overview }}></div>
            </div>
            <div className="weapons_item-game_desc">
                <div className="weapons_item-game_desc-title">Описание в игре</div>
                <div className="weapons_item-game_desc-text">`{weapon.weapon.in_game_desc}`</div>
            </div>
            { weapon.weapon.type !== "гаджет" ? 
            <>
            <div className="weapons_item-stats-title">
                    ПАРАМЕТРЫ
                </div>
            <div className="weapons_item-stats">
                <div className="weapons_item-stats-item">
                    <div className="weapons_item-stats-item-title">Размер обоймы</div>
                    <div className="weapons_item-stats-item-value">{weapon.weapon.magazine_size}</div>
                </div>
                <div className="weapons_item-stats-item">
                    <div className="weapons_item-stats-item-title">Cкорострельность</div>
                    <div className="weapons_item-stats-item-value">{weapon.weapon.rate_of_fire}</div>
                </div>
                <div className="weapons_item-stats-item">
                    <div className="weapons_item-stats-item-title">Мобильность</div>
                    <div className="weapons_item-stats-item-value">{weapon.weapon.mobility}</div>
                </div>
                <div className="weapons_item-stats-item">
                <div className="weapons_item-stats-item-title">ADS</div>
                    <div className="weapons_item-stats-item-value">{weapon.weapon.ads}</div>
                    </div>
            </div></> : null}
        </div>
    </div>
  )
}
