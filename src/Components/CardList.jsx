import React from "react";
import Card from "./Card";

const CardList = ({characters}) =>{
    return(
        <div>
            {
                characters.map((character) => {
                    return(<Card
                        key = {character.id}
                        id = {character.id}
                        name = {character.name}
                        bounty = {character.bounty}
                        job = {character.job}
                        />
                    )
                })
            }
        </div>
    )
}
export default CardList;