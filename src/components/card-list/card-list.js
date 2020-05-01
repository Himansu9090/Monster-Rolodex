import React from 'react';
import './card-list.css';
import Card from '../card/Card';


const CardList = (props) => {

  console.log(props)
  return (
    <div className="card-list">
   
      {props.monsters.map(monster => {
        console.log(monster)
        // return( <h1 key={monster.id}>{monster.name}</h1>)
          return (<Card key={monster.id} monster={monster}/>)
        })
      }
    </div>
  )
}

export default CardList;