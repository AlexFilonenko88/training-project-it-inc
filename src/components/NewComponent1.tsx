import React from "react";

export const NewComponent1 = () => {
    return (
        <>
            <ul>
                {currentMoney.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.banknots}</span>
                            <span>{item.value}</span>
                            <span>{item.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler("all")}>all</button>
                <button onClick={()=> onClickFilterHandler("RUBLS")}>ruables</button>
                <button onClick={()=> onClickFilterHandler("Dollars")}>dallars</button>
            </div>
        </>
    )
}