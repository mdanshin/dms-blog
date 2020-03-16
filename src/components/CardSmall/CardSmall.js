import React from "react";
// import './CardSmall.scss'

export default function CardSmall() {
    return (


        <div className="mb-3 d-flex align-items-center">

            <div className="col-md-4">
                <a href="/UserPasswordExpiryTimeComputed/">
                    <img className="w-100" src="https://danshin.ms/assets/images/UserPasswordExpiryTimeComputed/0.jpg"
                         alt="Как посмотреть когда истечёт пароль пользователя в Active Directory"/>
                </a>
            </div>

            <div>
                <h2 className="mb-2 h6 font-weight-bold">
                    <a className="text-dark" href="/UserPasswordExpiryTimeComputed/">Как посмотреть когда истечёт пароль
                        пользователя в Active Directory</a>
                </h2>
                <small className="d-block text-muted">
                    Категория <span className="catlist">

                        <a className="text-capitalize text-muted smoothscroll"
                           href="/categories.html#администрирование">Администрирование</a><span
                    className="sep">, </span>

                        </span>
                </small>
                <small className="text-muted">
                    Dec 30, 2019
                </small>
            </div>
        </div>


        // <div className={"CardSmall"}>
        //     <div className={"card-image"}>
        //         <a href="#h">
        //             <img className={"image"} src="https://danshin.ms/assets/images/UserPasswordExpiryTimeComputed/0.jpg" alt=""/>
        //         </a>
        //     </div>
        //     <div>
        //         <h2 className={"card-head-small"}>
        //             Развёртывание и настройка Squid Proxy в Microsoft Azure
        //         </h2>
        //         <div>
        //             <small className={"category"}>
        //                 Категория
        //                 <span>
        //                     <a className={"category-anchor"} href="#Home"> Администрирование</a>
        //                 </span>
        //                 <span className={"sep"}>,</span>
        //             </small>
        //             <small className={"date"}>
        //                 Feb 28, 2020
        //             </small>
        //         </div>
        //     </div>
        // </div>
    )
}