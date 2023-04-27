import React from 'react';
import './styles/Characters.scss'
import { Link } from 'react-router-dom';

const attackers = [
    {name: 'brava', weapon: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7piw6czbaAsv6NnYXtJZay/02683e035ab9481bbe8cbf669113c84d/r6s-operators-list-brava.png', path: '/brava'},
    {name: 'OSA', weapon: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7fwxcTrdNLQbXkfBJglLaN/38d901042d7debc709c266a46f856d7e/r6s-operators-list-grim.png', path: '/brava'},
    {name: 'brava', weapon: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ieRqIy6e47QH48sTp1W4a/59f8188d94ae610bf76da26b4fef0b92/r6s-operators-list-sens.png', path: '/brava'},
    {name: 'brava', weapon: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3Dg95rvyhPtw588r60vIPM/75e609068a0b205cc4dbc7bf3e517f51/r6s-operators-list-osa.png', path: '/brava'},
    {name: 'brava', weapon: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3hXRjYHsrlFOocJjyxyYZY/29eb8f1ad9eab150518a053b775c336f/r6s-operators-list-flores.png', path: '/brava'},
    {name: 'brava', weapon: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7piw6czbaAsv6NnYXtJZay/02683e035ab9481bbe8cbf669113c84d/r6s-operators-list-brava.png', path: '/brava'},
    {name: 'brava', weapon: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7piw6czbaAsv6NnYXtJZay/02683e035ab9481bbe8cbf669113c84d/r6s-operators-list-brava.png', path: '/brava'},
    {name: 'brava', weapon: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7piw6czbaAsv6NnYXtJZay/02683e035ab9481bbe8cbf669113c84d/r6s-operators-list-brava.png', path: '/brava'},
    {name: 'brava1', weapon: 'sig', path: '/brava1'},
    {name: 'brav2a', weapon: 'sig', path: '/brava2'},
    {name: 'brav3a', weapon: 'sig', path: '/brava3'}
]

const Characters = () => {
    return (
        <div className='characters'>
            <div className='container'>
                <div></div>
                <div className='characters-title'>ПЕРСОНАЖИ</div>
                <div>
                    <div>АТАКА</div>
                    <div className='characters-items'>
                        {attackers.map((item) => (
                        <Link to={'.' + item.path}>
                            <div className='characters-items-card'>

                                    <img className='characters-items-card-preview-img' src={item.weapon} alt=''/>
                                <div className='characters-items-card-name'>{item.name}</div>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <div>ЗАЩИТА</div>
                    <div className='characters-items'>
                        {attackers.map((item) => (
                        <Link to={'.' + item.path}>
                            <div className='characters-items-card'>

                                    <img className='characters-items-card-preview-img' src={item.weapon} alt=''/>
                                <div className='characters-items-card-name'>{item.name}</div>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Characters;