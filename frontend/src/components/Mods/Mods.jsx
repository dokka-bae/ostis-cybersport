import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import "./styles/Mods.scss"

function Mods() {
  const[mods, setMods] = useState();

    const fetchAllWeapons = async () =>{
        const response = await fetch("http://localhost:8000/mods");
        const mods = await response.json();
        setMods(mods)
        console.log(mods)
    }

    useEffect(()=>{
        fetchAllWeapons()
    }, [])

    if(mods === undefined)
        return(null)
    else

  return (
    <div className='container'>
      <div className='mods'>
        <div className='mods-title'>Режимы игры</div>
            {/* <div className="mods-pvp-title"></div> */}
              <div className="mods-items">
                  {mods.map((item) => (
                    <Link to={item.id}>
                      <div className='mods-items-card'>

                        <img className='mods-items-card-img' src={item.preview} alt=''/>
                        <div className='mods-items-card-name'>{item.name}</div>
                      </div>
                    </Link>
                  ))}
                </div>
          </div>
      </div>
  )
}

export default Mods;
