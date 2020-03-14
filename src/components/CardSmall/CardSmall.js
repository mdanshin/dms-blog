import React from "react";
import './CardSmall.scss'

export default function CardSmall() {
    return (
        <div className={"CardSmall"}>
            <div className={"card-image"}>
                <a href="#h">
                    <img className={"image"} src="https://danshin.ms/assets/images/UserPasswordExpiryTimeComputed/0.jpg" alt=""/>
                </a>
            </div>
            <div>
                <h2 className={"card-head-small"}>
                    Развёртывание и настройка Squid Proxy в Microsoft Azure
                </h2>
                <div>
                    <small className={"category"}>
                        Категория
                        <span>
                            <a className={"category-anchor"} href="#Home"> Администрирование</a>
                        </span>
                        <span className={"sep"}>,</span>
                    </small>
                    <small className={"date"}>
                        Feb 28, 2020
                    </small>
                </div>
            </div>
        </div>
    )
}