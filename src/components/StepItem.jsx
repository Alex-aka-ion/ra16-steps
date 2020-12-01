import React from "react";

export default function StepItem({item: {date, distance}, onDelete}) {
    const dateFormatted = `${date.substring(8,10)}.${date.substring(5,7)}.${date.substring(0,4)}`;

    return (
        <div>
            <div>{dateFormatted}</div>
            <div>{distance}</div>
            <button onClick={onDelete}>X</button>
        </div>
    )
}
