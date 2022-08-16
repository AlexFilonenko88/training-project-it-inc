import React from "react";

type NewComponentsType = {
    cars: Array<TopCarsType>
}

type TopCarsType = {
    manufacturer: string
    model:string
    id: number
}

export const NewComponents = (props: NewComponentsType) => {
    return (
        <ul>
            {props.cars.map((elem) => {
                return (
                    <li key={elem.id}>
                        <span>{elem.manufacturer}</span>
                        <span>   Model: {elem.model}</span>
                    </li>
                )
            })}
        </ul>
    )
}