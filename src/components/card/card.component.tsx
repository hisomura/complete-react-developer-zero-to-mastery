import React from "react";
import {Monster} from "../../App";
import './card.styles.css'

type Props = {
  monster: Monster
}

export const Card = (props: Props) => (
  <div className="card-container">
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
    <h1> {props.monster.name} </h1>
    <p> {props.monster.email}</p>
  </div>
)