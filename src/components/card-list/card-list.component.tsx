import React from "react";
import './card-list.styles.css'
import {Monster} from "../../App";
import {Card} from "../card/card.component";

type Props = {
  monsters: Monster[]
}

export const CardList = (props: Props) => {
  console.log(props)
  return (<div className='card-list'>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster}/>
    ))}
  </div>)
}