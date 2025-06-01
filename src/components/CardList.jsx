import React from 'react';
import Card from './Card';

//for future refernce, you can directly return robots.map without storing it in a variable first
const CardList = ({ robots }) => {
    const cardArray = robots.map((user, i) => {
        return <Card key={ i } id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return (
        <div>
            { cardArray }
        </div>
    )
}

export default CardList