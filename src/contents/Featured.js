import React from 'react'

const Featured = ()=> {
  
    return(
        
            <div className="featured-container">
                <h2 className="featured-header">Featured Projects</h2>
                <div className="featured-card" style={{marginRight: 8, marginLeft:5}}>
                    <div className="featured-content">
                        <h2 className="project-name">
                        <a href="https://radiant-wave-27873.herokuapp.com/" target="_blank" rel="noopener noreferrer">Sweat Clause</a>
                        </h2>
                        <div className="card-child">
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
                </div>

                <div className="featured-card" style={{marginLeft: 8}}>
                    <div className="featured-content">
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

                <div className="featured-card" style={{marginLeft: 6, marginTop: 8}}>
                    <div className="featured-content">
                    <h2 className="project-name">
                        <a href="https://mystagram-client.herokuapp.com" target="_blank" rel="noopener noreferrer">
                            Mystagram
                        </a>
                    </h2>
                        <p className="project-desc">
                        Instagram meets Reddit. Mystagram allows users to add a mythical creature and up or down vote the creature based on popularity.
                        </p>
                        <p className="project-language">
                            React - Open Trivia Database - Firebase
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
        </div>
    )
}

export default Featured 