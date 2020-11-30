import React from "react";

export default function StepItem({item: {date, distance}, onSubmit}) {
    return (
        <div>
            <div>{date}</div>
            <div>{distance}</div>
            <button onClick={onSubmit}>X</button>
        </div>
    )
}
