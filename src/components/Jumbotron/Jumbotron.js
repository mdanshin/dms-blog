import React from "react";
import './Jumbotron.scss'

export default function Jumbotron() {
    return (
        <div className="Jumbotron">
            <div className="tofront">
                <div className="content">
                    <div className="col-center">
                        <h1 className="h1-jumbotron">Лекция Евгения Пескина о возможных последствиях эпидемии коронавируса</h1>
                        <p className="p">
                            Евгений Пескин, директор по стратегии в IBS, рассказал, как технологии помогают бороться с эпидемией
                            коронавируса.
                        </p>
                        <a className="btn" href="/coronavirus/">Читать далее</a>
                    </div>
                    <div className="col-jumbotron"
                         style={{
                             backgroundImage: 'url(https://danshin.ms/assets/images/coronavirus.jpg)',
                             backgroundSize: 'cover'
                         }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

