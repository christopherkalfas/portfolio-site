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
                    <a href="https://determined-shockley-872086.netlify.app/">
                        <img src={require("../img/weatherkalf.png")} alt="weatherkalf" />
                    </a>
                    <h3 className="project-name">
                        WeatherKal
                    </h3>
                    <p className="project-desc">
                        Weather forecast search web application.
                    </p>
                    <p className="project-language">
                        React - openweatherAPI
                    </p>
    
                </div>
            </div>
        </div>
    )
}

export default Projects