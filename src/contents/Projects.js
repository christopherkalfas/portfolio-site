import React from 'react'

const Projects = () => {
    return(
        <div className="condiv">
            <div className="project-header">
                <h1>
                    Technical Projects
                </h1>
            </div>
            <div className="project-container">
            <div className="project-card">
                    <a href="https://radiant-wave-27873.herokuapp.com/">
                        <img src={require("../img/sweatclause.png")} alt="sweatclause"  className="project-image"/>
                    </a>
                    <div className="card-content">
                        <h2 className="project-name">
                            Sweat Clause
                        </h2>
                        <p className="project-desc">
                        Rails web app that allows users a fun way to donate to charity through fitness competitions with friends
                        </p>
                        <p className="project-language">
                            Rails - bcrypt - Heroku
                        </p>
                    </div>
                </div>
                <div className="project-card">
                    <a href="https://determined-shockley-872086.netlify.app/">
                        <img src={require("../img/weatherkalf.png")} alt="weatherkalf" className="project-image" />
                    </a>
                    <div className="card-content">
                        <h2 className="project-name">
                            WeatherKalf
                        </h2>
                        <p className="project-desc">
                            Simple Weather forecast web application.
                        </p>
                        <p className="project-language">
                            React - openweatherAPI - Netlify
                        </p>
                    </div>
                </div>
                <div className="project-card">
                    <a href="https://christopherkalfas.github.io/gif-search-app/">
                        <img src={require("../img/kalfigifs.png")} alt="kalfigifs" className="project-image" />
                    </a>
                    <div className="card-content">
                        <h2 className="project-name">
                            KalfiGifs
                        </h2>
                        <p className="project-desc">
                            Gif Search Engine Web Application.
                        </p>
                        <p className="project-language">
                            React - GIHPYAPI - GitHub Pages
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects