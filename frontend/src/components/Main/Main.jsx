import React, {useState} from 'react';
import './styles/Main.scss'
import searchIcon from './assets/search_icon.svg'
import {Link} from "react-router-dom";
import gameMods from './assets/imgs/mods.jpg'

const Main = () => {
    const[category, setCategory] = useState([
        {
            name: 'Game modes',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            path: '/mods'
        },
        {
            name: 'Weapons',
            description: 'Оружие в игре представлено разнообразным арсеналом из более чем 50 видов стрелкового и огнестрельного оружия, включая пистолеты, автоматические винтовки, пулеметы,дробовики и снайперские винтовки',
            path: '/weapons'
        },
        {
            name: 'Operators',
            description: 'В игре представлен широкий спектр оперативников или персонажей, которых игроки используют для выполнения задач и победы в матче. В настоящее время в Rainbow Six Осада доступно 54 оператора, что дает игрокам широкий выбор персонажей на выбор во время игры',
            path: '/characters'
        },
        {
            name: 'Maps',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            path: '/maps'
        },
        
    ])
    return (
        <div>
            <div className="container">
                <div className="search_box">
                    <h1 className='search_box-title'>Rainbow Six Siege</h1>
                    {/*<desc>Кочурко В.В. Довидович Т.М. Залевский А.С. Свяцкий В.А.</desc>*/}
                    <div className='search_box-input_box'>
                        <input placeholder="Поиск" className='search_box-input_box-input'/>
                        <button className='search_box-input_box-button'>
                            <img className='search_box-input_box-button-icon' src={searchIcon} width='24px' height='24px' alt=""/>
                        </button>
                    </div>
                </div>
                {/* <div className='status-info'>
                    <div className='status-info-players_online'>Online</div>
                    <div className='status-info-downdetector'>Downdetector Status</div>
                    <div className='status-info-ubisoft_server'>Service Status</div>
                </div> */}
                <h1 className='categories-title'>Категории</h1>
                <div className='categories'>
                    {category.map((item)=>(
                        <Link to={item.path}>
                        <div className='categories-item'>
                            <img src={gameMods} alt="" className="categories-item-img"/>
                            <div className="categories-item-content">
                                <div className="categories-item-content-title">
                                    {item.name}
                                </div>
                                <div className="categories-item-content-description">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Main;