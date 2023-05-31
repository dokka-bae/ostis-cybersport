import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

import './styles/Operator.scss'
import VIPERSTRIKE_img from './assets/imgs/VIPERSTRIKE.png'

const 
    characterTestDataWeap ={
        first: [
            {name: 'PARA-308', img: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6ub8y2Cs5EYhVPfDWuVVkW/82ca131a41ee4ba2e0b75f2dc52ed9e3/PARA-308.png'},
            {name: 'CAMRS', img: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4dBzqVVmnpv1DZi91LAnEN/e374b4ea289fc992280b943cdbb94d60/CAMRS.png'},
        ],
        second: [
            {name: 'USP40', img: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7FxemzWRtlpAhK9MyKp1Gp/817cc25b6b7c3575dc1ba53a6a8170a9/USP40.png'},
            {name: 'SUPER SHORTY', img: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7Dq8LDmIxAveRqXM17orUW/8169927dba6976cee92cc53c7b0960aa/r6-operator-weapon-sa-supershorty.png'}
        ],
        device: [
            {name: 'ДЫМОВАЯ ШАШКА', img: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3LaxoSLC49T5vgKnUAlTLT/c47c4636845a04478432c48be8c29aee/Smoke_Grenade.png'},
            {name: 'МИНА', img: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4T4H5EJgUxorucGVtU2pkm/74fef324b89c220ce6426e8097f915b9/Claymore.png'}
        ],
        spec: [
            {name: 'БОТ «KLUDGE»', img: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7CeEFqxBVGt3yXGCrE8TZq/9bd38a7211fdbbaea9c43794bd6f4925/r6s-operator-ability-brava.png'},
        ]
    }
    
const TodosContext = React.createContext({
    todos: [], fetchTodos: () => {}
})

export default function Operator() {
    let{id} = useParams();

    const [operator, setTodos] = useState()
    const [weapons, setWeapons] = useState(undefined)
    const fetchOpers = async () => {
        const response = await fetch("http://localhost:8000/characters/{id}?operator_name="+id)
        const operator = await response.json()
        setTodos(operator)
    }

    const fetchWapons = async () => {
        const response = await fetch("http://localhost:8000/character/{weap_id}?ologs="+id)
        const weapons = await response.json()
        if(weapons != null && weapons !== undefined)
        setWeapons(weapons)
        console.log(weapons)
    }

  useEffect(() => {
    fetchOpers()
    fetchWapons()
  }, [])

  if(operator === undefined || weapons === undefined)
    return (
    <div className='container'>
        <div>Loading...</div>
    </div>)
  else
    return (
    <div className='operator'>
        <div className='container'>
            <header className='operator-header'>
                <div className="operator-header-content">
                    <div className="operator-header-content-name">
                        <img alt='' src={operator.icon} className="operator-header-content-name-img"/>
                        <div className="operator-header-content-name-text">{operator.id}</div>
                    </div>
                    <div className="operator-header-content-specialties">
                        <div className='operator-header-content-specialties-text'>{operator.specialties}</div>
                    </div>
                    <div className="operator-header-content-stats">
                        <div className="operator-header-content-stats-title">
                            СТАТЫ
                        </div>
                        <div className="operator-header-content-stats-health">
                            <b>HP:</b> {operator.health}/3
                        </div>
                        <div className="operator-header-content-stats-speed">
                            <b>СКОРОСТЬ:</b> {operator.speed}/3
                        </div>
                    </div>

                </div>
                <img src={operator.img} alt="" className="operator-header-img" />
            </header>
            <div className="operator-loadout">
                    <div className="operator-loadout-title">
                    — Снаряжение —
                    </div>
                    <div className="operator-loadout-content">
                        <div className="operator-loadout-content-item">
                            <div className="operator-loadout-content-item-title">Основное</div>
                            <div className="operator-loadout-content-item-list">
                                {weapons.second !== null ? weapons.first.map(( item) => (
                                    <Link key={item.id} className='operator-loadout-content-item-list-itm' to={'/weapons/' + item.id}>
                                        <img src={item.icon} alt="" className="operator-loadout-content-item-list-itm-img" />
                                        <div className="operator-loadout-content-item-list-itm-name">{item.name}</div>
                                    </Link>
                                )): null}
                            </div>
                        </div>
                        <div className="operator-loadout-content-item">
                            <div className="operator-loadout-content-item-title">Вторичное</div>
                            <div className="operator-loadout-content-item-list">
                                {weapons.second[0] !== null ? weapons.second.map((item) => (
                                    <Link key={item.id} className='operator-loadout-content-item-list-itm' to={'/weapons/' + item.id}>
                                        <img src={item.icon} alt="" className="operator-loadout-content-item-list-itm-img" />
                                        <div className="operator-loadout-content-item-list-itm-name">{item.name}</div>
                                    </Link>
                                )) : null}
                            </div>
                        </div>
                        <div className="operator-loadout-content-item">
                            <div className="operator-loadout-content-item-title">Устройство</div>
                            <div className="operator-loadout-content-item-list">
                                {weapons.device[0] !== null ? weapons.device.map((item) => (
                                    <Link key={item.id} className='operator-loadout-content-item-list-itm' to={'/weapons/' + item.id}>
                                        <img src={item.icon} alt="" className="operator-loadout-content-item-list-itm-img" />
                                        <div className="operator-loadout-content-item-list-itm-name">{item.name}</div>
                                    </Link>
                                )) : null}
                            </div>
                        </div>
                        <div className="operator-loadout-content-item">
                            <div className="operator-loadout-content-item-title">ОСОБЫЙ НАВЫК</div>
                            <div className="operator-loadout-content-item-list">
                                {weapons.spec[0] !== null ? weapons.spec.map((item) => (
                                    <Link key={item.id}  className='operator-loadout-content-item-list-itm' to={'/weapons/' + item.name.split(' ').join('')}>
                                        <img src={item.hudIcon} style={{filter: 'invert(1)'}} alt="" className="operator-loadout-content-item-list-itm-img" />
                                        <div className="operator-loadout-content-item-list-itm-name">{item.name}</div>
                                    </Link>
                                )) : null}
                            </div>
                        </div>
                    </div>
                </div>
            <div className="operator-bio">
                <div className="operator-bio-title">— Биография —</div>
                <div className="operator-bio-info">
                <iframe className='operator-bio-info-video' src={operator.bio_video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <div className="operator-bio-info-stats">
                        <div className='operator-bio-info-stats-item'>
                            <div className="operator-bio-info-stats-item-title">Настоящее имя</div>
                            <div className="operator-bio-info-stats-item-value">{operator.real_name}</div>
                        </div>
                        <div className='operator-bio-info-stats-item'>
                        <div className="operator-bio-info-stats-item-title">Дата рождения</div>
                            <div className="operator-bio-info-stats-item-value">{operator.birtday}</div>
                        </div>
                        <div className='operator-bio-info-stats-item'>
                            <div className="operator-bio-info-stats-item-title">МЕСТО РОЖДЕНИЯ</div>
                            <div className="operator-bio-info-stats-item-value">{operator.birtplace}</div>
                        </div>
                    </div>
                    <div className="operator-bio-main">
                        <div className="operator-bio-main-title">БИОГРАФИЯ</div>
                        <div className="operator-bio-main-title-quote">"{operator.bio_quote}"</div>
                        <div className="operator-bio-main-title-text" dangerouslySetInnerHTML={{ __html: operator.bio_main }}></div>
                    </div>
                    <div className="operator-bio-psy">
                        <div className='operator-bio-psy-title'>ПСИХОЛОГИЧЕСКИЙ ПОРТРЕТ</div>
                        <div className="operator-bio-psy-text" dangerouslySetInnerHTML={{ __html: operator.bio_psy }}></div>
                        <div className="operator-bio-psy-outer">*{operator.bio_outer}*</div>
                    </div>
                </div>
            </div>

            {operator.elite.lenght !== 0 ? 
                operator.elite.map((item)=> (
                    <img src={item} alt="" className="" />
                ))
            : null}


        </div>
    </div>
  )
}
