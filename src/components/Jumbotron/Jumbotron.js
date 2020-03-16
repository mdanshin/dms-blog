import React from "react";
// import './Jumbotron.scss'

export default function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid jumbotron-home pt-0 pb-0 mt-3 mb-2rem bg-lightblue position-relative">
            <div className="pl-4 pr-0 h-100 tofront">
                <div className="row justify-content-between">
                    <div className="col-md-6 pt-6 pb-6 pr-lg-4 align-self-center">
                        <h1 className="mb-3">Лекция Евгения Пескина о возможных последствиях эпидемии коронавируса</h1>
                        <p className="mb-3 lead">
                            Евгений Пескин, директор по стратегии в IBS, рассказал, как технологии помогают бороться с
                            эпидемией коронавируса.
                        </p>
                        <a href="/coronavirus/" className="btn btn-dark">Читать далее</a>
                    </div>
                    <div className="col-md-6 d-none d-md-block pr-0"
                         style={{
                             backgroundSize: 'cover',
                             backgroundImage: 'url(https://danshin.ms/assets/images/coronavirus.jpg)'}}>
                    </div>
                </div>
            </div>
        </div>
    )
}

