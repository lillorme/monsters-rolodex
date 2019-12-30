import React from 'react';
import './card-list-styles.css';
import Card from '../Card/Card';

const CardList = (props: any) =>{
    return(
        <div className='card-list'>
             { 
                props.monsters.map((monster: any, i: number) => (
                        <Card monster={monster} key={monster.id}/>
                ))
            }
        </div>
    )
};

export default CardList;