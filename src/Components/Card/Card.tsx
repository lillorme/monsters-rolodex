import React from 'react';
import './Card.css';

const Card = (props: any) => {


    return(
        <div className="card-container" >
            <img alt={props.monster.name} src={`https://robohash.org/${props.monster.id}?set=set2`}/>
            <h2>{props.monster.name}</h2>
            <p><h4>{props.monster.email}</h4></p>
        </div>
    )
}

export default Card;