import React from "react";
// import './Favorites.scss'

export default function Favorites() {
    return (
        <div className="col-md-4">
            <div className="sticky-top sticky-top-offset">
                <h4 className="font-weight-bold spanborder"><span>Избранные</span></h4>
                <ol className="list-featured">

                    <li className="mb-4">
            <span>
                <h6 className="font-weight-bold">
                    <a href="/Exchange-Photos/" className="text-dark">Фоторафии в Exchnage. Откуда Outlook берёт фото пользователей?</a>
                </h6>
                <span className="d-block text-muted">
                    Категория <span className="catlist">

                    <a className="text-capitalize text-muted smoothscroll"
                       href="/categories.html#администрирование">Администрирование</a><span className="sep">, </span>

                    </span>
                </span>
            </span>
                    </li>

                    <li className="mb-4">
            <span>
                <h6 className="font-weight-bold">
                    <a href="/powershell-arrays-and-hashtables/" className="text-dark">Базовые сведения о массивах и хеш-таблицах в Powershell</a>
                </h6>
                <span className="d-block text-muted">
                    Категория <span className="catlist">

                    <a className="text-capitalize text-muted smoothscroll"
                       href="/categories.html#программирование">Программирование</a><span className="sep">, </span>

                    </span>
                </span>
            </span>
                    </li>

                    <li className="mb-4">
            <span>
                <h6 className="font-weight-bold">
                    <a href="/2009/11/blog-post_20.html" className="text-dark">Решаем проблему внезапной блокировки учетной записи </a>
                </h6>
                <span className="d-block text-muted">
                    Категория <span className="catlist">

                    <a className="text-capitalize text-muted smoothscroll"
                       href="/categories.html#администрирование">Администрирование</a><span className="sep">, </span>

                    </span>
                </span>
            </span>
                    </li>

                </ol>
            </div>
        </div>
    )
}