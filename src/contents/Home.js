import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import profilepic from "../img/ChrisPhoto.jpeg";

import Social from "../components/Social"

const Home = () => {
    return(
        <div className="condiv home">
            <img src={profilepic} alt="profilepic "className="profilepic"></img>
            <ReactTypingEffect
                className="typingeffect"
                text={["Hello, world! I am Christopher Kalfas, I am a Full Stack Web Developer." ]}
                speed={95}
                eraseDelay={700}    
            />
            <Social />
        </div>
    )
}

export default Home