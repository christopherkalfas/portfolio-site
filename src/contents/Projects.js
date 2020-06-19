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
                    <a href="https://radiant-wave-27873.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../img/sweatclause.png")} alt="sweatclause"  className="project-image"/>
                    </a>
                    <div className="card-content">
                        <h2 className="project-name">
                        <a href="https://radiant-wave-27873.herokuapp.com/" target="_blank" rel="noopener noreferrer">Sweat Clause</a>
                        </h2>
                        <p className="project-desc">
                        Rails web app that allows users a fun way to donate to charity through fitness competitions with friends
                        </p>
                        <p className="project-language">
                            Rails - bcrypt - Heroku
                        </p>
                        <p className="project-github">
                            <a href="https://github.com/christopherkalfas/sweatclause422" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://radiant-wave-27873.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live App</a>
                        </p>
                    </div>
                </div>

                <div className="project-card">
                    <a href="https://trivkalf.firebaseapp.com/playall" target="_blank" rel="noopener noreferrer">
                        <img src={require("../img/trivKalf.png")} alt="trivkalf" className="project-image" />
                    </a>
                    <div className="card-content">
                    <h2 className="project-name">
                        <a href="https://trivkalf.firebaseapp.com/playall" target="_blank" rel="noopener noreferrer">
                            TrivKalf 
                        </a>
                    </h2>
                

                        <p className="project-desc">
                            Trivia game with two modes of play. Random Play - allows users to answer questions from 24 different categories. Category Pick - allows user to answer questions from a topic of their choice. 
                        </p>
                        <p className="project-language">
                            React - Open Trivia Database - Firebase
                        </p>
                        <p className="project-github">
                            <a href="https://github.com/christopherkalfas/trivkalf" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://trivkalf.firebaseapp.com/playall" target="_blank" rel="noopener noreferrer">
                                Live App 
                            </a>
                        </p>
                    </div>
                </div>
                <div className="project-card">
                    <a href="https://determined-shockley-872086.netlify.app/">
                        <img src={require("../img/weatherkalf.png")} alt="weatherkalf" className="project-image" />
                    </a>
                    <div className="card-content">
                        <h2 className="project-name">
                        <a href="https://determined-shockley-872086.netlify.app/" target="_blank" rel="noopener noreferrer">WeatherKalf</a>
                        </h2>
                        <p className="project-desc">
                            Simple Weather forecast web application.
                        </p>
                        <p className="project-language">
                            React - openweatherAPI - Netlify
                        </p>
                        <p className="project-github">
                            <a href="https://github.com/christopherkalfas/weather-kalf-app" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://determined-shockley-872086.netlify.app/" target="_blank" rel="noopener noreferrer">Live App</a>
                        </p>
                    </div>
                </div>
                <div className="project-card">
                    <a href="https://christopherkalfas.github.io/gif-search-app/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../img/kalfigifs.png")} alt="kalfigifs" className="project-image" />
                    </a>
                    <div className="card-content">
                        <h2 className="project-name">
                        <a href="https://christopherkalfas.github.io/gif-search-app/" target="_blank" rel="noopener noreferrer">KalfiGifs</a>
                        </h2>
                        <p className="project-desc">
                            Gif Search Engine Web Application.
                        </p>
                        <p className="project-language">
                            React - GIHPYAPI - GitHub Pages
                        </p>
                        <p className="project-github">
                            <a href="https://github.com/christopherkalfas/gif-search-app" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://christopherkalfas.github.io/gif-search-app/" target="_blank" rel="noopener noreferrer">Live App</a>
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects