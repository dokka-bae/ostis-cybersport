import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import './styles/ModItem.scss'

export default function ModItem() {
    let{modId} = useParams();

    const [mod, setMod] = useState()
    const fetchOpers = async () => {
        const response = await fetch("http://localhost:8000/mods/{id}?mod_id="+modId)
        const mod = await response.json()
        setMod(mod)
        console.log(mod)
    }

  useEffect(() => {
    fetchOpers()
  }, [])

  if(mod === undefined)
    return(null)
  else
    return (
    <div className="container">
      <div className="mod-item">
        <div className="mod-item-header">
          <img src={mod.preview} alt="" className="mod-item-header-img" />
          <div className="mod-item-header-content">
            <div className="mod-item-header-content-title">Название</div>
            <div className="mod-item-header-content-name">{mod.name}</div>
            <div className="mod-item-header-content-title">Доступные вариации</div>
            <div className="mod-item-header-content-types">{mod.modeType.map((item) => (<div>{item}</div>))}</div>
          </div>
        </div>
        <div className="mod-item-overview">
          <div className="mod-item-overview-title">ОПИСАНИЕ</div>
          <div className="mod-item-overview-content" dangerouslySetInnerHTML={{ __html: mod.overview }}>
          </div>
        </div>
      </div>
    </div>
  )
}
