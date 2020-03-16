import React from "react";
import './Favorites.scss'

export default function Favorites() {
    return (
        <div className={"other-posts-favorites"}>
            <div className={"top-offset"}>
                <h4 className={"other-spanborder"}>
                    <span>Избранное</span>
                </h4>
                <ol className={"list-featured"}>
                    <li className={"mb-4"}>
                                <span>
                                    <h6 className={"font-weight-bold"}>
                                        <a className={"text-dark"} href="#home">Фоторафии в Exchnage. Откуда Outlook берёт фото пользователей?</a>
                                    </h6>
                                    <span className={"text-muted"}>
                                        Категория
                                        <span className={"catlist"}>
                                            <a className={"smoothscroll"} href="#home">Администрирование</a>
                                            <span className={"sep"}>,</span>
                                        </span>
                                    </span>
                                </span>
                    </li>
                    <li className={"mb-4"}>
                                <span>
                                    <h6 className={"font-weight-bold"}>
                                        <a className={"text-dark"} href="#home">Фоторафии в Exchnage. Откуда Outlook берёт фото пользователей?</a>
                                    </h6>
                                    <span className={"text-muted"}>
                                        Категория
                                        <span className={"catlist"}>
                                            <a className={"smoothscroll"} href="#home">Администрирование</a>
                                            <span className={"sep"}>,</span>
                                        </span>
                                    </span>
                                </span>
                    </li>
                    <li className={"mb-4"}>
                                <span>
                                    <h6 className={"font-weight-bold"}>
                                        <a className={"text-dark"} href="#home">Фоторафии в Exchnage. Откуда Outlook берёт фото пользователей?</a>
                                    </h6>
                                    <span className={"text-muted"}>
                                        Категория
                                        <span className={"catlist"}>
                                            <a className={"smoothscroll"} href="#home">Администрирование</a>
                                            <span className={"sep"}>,</span>
                                        </span>
                                    </span>
                                </span>
                    </li>
                </ol>

            </div>
        </div>
    )
}