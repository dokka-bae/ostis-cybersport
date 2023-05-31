import React, {useState, useEffect} from 'react';
import './styles/Characters.scss'
import { Link } from 'react-router-dom';

const Characters = () => {
    const[characters, setCharacters] = useState();

    const fetchAllWeapons = async () =>{
        const response = await fetch("http://localhost:8000/characters");
        const characters = await response.json();
        setCharacters(characters)
        console.log(characters)
    }

    useEffect(()=>{
        fetchAllWeapons()
    }, [])

    if(characters === undefined)
        return(null)
    else
    return (
        <div className='characters'>
            <div className='container'>
                <div></div>
                <div className='characters-title' style={{textAlign: "center", marginTop: '48px', fontSize: '36px', fontWeight: '600', marginBottom: "24px"}}>ПЕРСОНАЖИ</div>
                <div>
                    <div style={{textAlign: "center", marginTop: '48px', fontSize: '24px', fontWeight: '600', marginBottom: "24px"}}>АТАКА</div>
                    <div className='characters-items'>
                        {characters.map((item) => (
                            item.side === 'Атака' ? 
                            <Link key={item.id} to={item.id}>
                            <div className='characters-items-card'>

                                    <img className='characters-items-card-preview-img' src={item.img} alt=''/>
                                <div className='characters-items-card-name'>{item.name}</div>
                            </div>
                        </Link> : null 
                        ))}
                    </div>
                </div>
                <div>
                    <div style={{textAlign: "center", marginTop: '48px', fontSize: '24px', fontWeight: '600', marginBottom: "24px"}}>ЗАЩИТА</div>
                    <div className='characters-items'>
                        {characters.map((item) => (
                            item.side === 'Защита' ? 
                            <Link key={item.id} to={item.id}>
                            <div className='characters-items-card'>

                                    <img className='characters-items-card-preview-img' src={item.img} alt=''/>
                                <div className='characters-items-card-name'>{item.name}</div>
                            </div>
                        </Link> : null 
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Characters;