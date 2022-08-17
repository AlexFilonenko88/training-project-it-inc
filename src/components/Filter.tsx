import React, {useState} from "react";
import {NewComponent1} from "./NewComponent1";

type FilterType = 'all' | "RUBLS" | "Dollars";

export const Filter = () => {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890', id:1 },
        { banknots: 'Dollars', value: 50, number: ' z1234567890', id:2 },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890', id:3 },
        { banknots: 'Dollars', value: 100, number: ' e1234567890', id:4 },
        { banknots: 'Dollars', value: 50, number: ' c1234567890', id:5 },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890', id:6 },
        { banknots: 'Dollars', value: 50, number: ' x1234567890', id:7 },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890', id:8 },
    ])

    const[filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;

    if(filter === "Dollars"){
        currentMoney = money.filter((filtereMoney) => filtereMoney.banknots === "Dollars");
    }
    if(filter === "RUBLS"){
        currentMoney = money.filter((filtereMoney) => filtereMoney.banknots === "RUBLS");
    }

    const  onClickFilterHandler = (nameBtn: FilterType) => {
        setFilter(nameBtn);
    }

    return (
        <>
            <NewComponent1 />

            {/*<ul>*/}
            {/*    {currentMoney.map((item) => {*/}
            {/*        return (*/}
            {/*            <li key={item.id}>*/}
            {/*                <span>{item.banknots}</span>*/}
            {/*                <span>{item.value}</span>*/}
            {/*                <span>{item.number}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
            {/*<div style={{marginLeft: '35px'}}>*/}
            {/*    <button onClick={() => onClickFilterHandler("all")}>all</button>*/}
            {/*    <button onClick={()=> onClickFilterHandler("RUBLS")}>ruables</button>*/}
            {/*    <button onClick={()=> onClickFilterHandler("Dollars")}>dallars</button>*/}
            {/*</div>*/}
        </>

    )
}
