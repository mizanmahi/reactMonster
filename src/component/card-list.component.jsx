import React from 'react';
import './card-list.style.css';

import { Card } from './card.component'

export const CardList = props => {
    return (<div className='cardList'>
       {
            props.monsterList.map(monster => {
                return <Card monster = {monster} key={monster.id}/>
            })
       }
    </div>)
}