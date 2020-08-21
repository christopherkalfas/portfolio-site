import React from 'react'
import projectPic1 from "../img/sweatclause.png"
import projectPic2 from "../img/trivKalf.png"
import projectPic3 from "../img/weatherkalf.png"
import projectPic4 from "../img/kalfigifs.png"
import projectPic5 from "../img/MystagramPic.png"

const Projects = () => {
    return(
        <div className="condiv">
            <div className="project-container">
            <div className="featured-header">
                <h1>
                    Technical Projects
                </h1>
            </div>
            <div className="project-card">
                    
                        <img src={projectPic1} alt="sweatclause"  className="project-image"/>
                    
                    <div className="card-content">
                        <h2 className="project-name">
                        <a href="https://radiant-wave-27873.herokuapp.com/" target="_blank" rel="noopener noreferrer">Sweat Clause</a>
                        </h2>
                        <p className="project-desc">
                        Rails web app that allows users a fun way to donate to charity through fitness competitions with friends
                        </p>
                        <p className="project-language">
                            Rails | bcrypt | CanCanCan | Heroku | Bootstrap
                        </p>
                        <p className="project-github">
                            <a href="https://github.com/christopherkalfas/sweatclause422" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://radiant-wave-27873.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live App</a>
                        </p>
                    </div>
                </div>

                <div className="project-card">
                        <img src={projectPic2} alt="trivkalf" className="project-image" />
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
                            React | Open Trivia Database | Firebase
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
                        <img src={projectPic5} alt="mystagram" className="project-image" />
                    <div className="card-content">
                    <h2 className="project-name">
                        <a href="https://mystagram-client.herokuapp.com" target="_blank" rel="noopener noreferrer">
                            Mystagram 
                        </a>
                    </h2>
                

                        <p className="project-desc">
                        Instagram meets Reddit. Mystagram allows users to add a mythical creature and up or down vote the creature based on popularity.
                        </p>
                        <p className="project-language">
                            Rails API | Thunk | React/Redux | Heroku | Bootstrap
                        </p>
                        <p className="project-github">
                            <a href="https://github.com/christopherkalfas/frontend-mystagram-rails-react-redux-client" target="_blank" rel="noopener noreferrer">GitHub Front</a>
                            <a href="https://github.com/christopherkalfas/backend-mystagram-rails-react-redux-api" target="_blank" rel="noopener noreferrer">GitHub Back</a>
                            <a href="https://mystagram-client.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                Live App 
                            </a>
                        </p>
                    </div>
                </div>
                <div className="project-card">
                        <img src={projectPic3} alt="weatherkalf" className="project-image" />
                    <div className="card-content">
                        <h2 className="project-name">
                        <a href="https://determined-shockley-872086.netlify.app/" target="_blank" rel="noopener noreferrer">WeatherKalf</a>
                        </h2>
                        <p className="project-desc">
                            Simple Weather forecast web application.
                        </p>
                        <p className="project-language">
                            React | openweatherAPI | Netlify
                        </p>
                        <p className="project-github">
                            <a href="https://github.com/christopherkalfas/weather-kalf-app" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://determined-shockley-872086.netlify.app/" target="_blank" rel="noopener noreferrer">Live App</a>
                        </p>
                    </div>
                </div>
                <div className="project-card">
                        <img src={projectPic4} alt="kalfigifs" className="project-image" />
                    
                    <div className="card-content">
                        <h2 className="project-name">
                        <a href="https://christopherkalfas.github.io/gif-search-app/" target="_blank" rel="noopener noreferrer">KalfiGifs</a>
                        </h2>
                        <p className="project-desc">
                            Gif Search Engine Web Application.
                        </p>
                        <p className="project-language">
                            React | GIPHYAPI | GitHub Pages
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