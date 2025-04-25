import React from "react";
import Card from "./Card";

const CardList = ({characters}) =>{
    return(
        <div>
            {
                characters.map((user, i) => {
                    return(<Card
                        key = {i}
                        name = {characters[i].name}
                        bounty = {characters[i].bounty}
                        // fruit = {characters[i].fruit.name}
                        job = {characters[i].job}
                        />
                    )
                })
            }
        </div>
    )
}
export default CardList;