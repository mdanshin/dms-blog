import React from "react";
import './CardBig.scss'

export default function CardBig() {
    return (
        <div className={"CardBig"}>
            <a href="#h">
                <div className="topfirstimage"
                     style={{
                         backgroundImage: 'url(https://danshin.ms/assets/images/Deploy-squid-in-azure/0.png)',
                         height: '200px',
                         backgroundSize: 'cover',
                         backgroundRepeat: 'no-repeat'
                     }}>
                </div>
            </a>
            <div className={"card-body"}>
                <h2 className={"card-head"}>
                    Развёртывание и настройка Squid Proxy в Microsoft Azure
                </h2>
                <p className={"excerpt"}>
                    В этой статье Вы узнаете о том, как развернуть и настроить свой proxy сервер на основе популярного
                    продукта Squid, в облачном сервисе...
                </p>
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