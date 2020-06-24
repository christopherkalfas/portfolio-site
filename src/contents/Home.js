import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import propic from "../img/propic.png";
import Featured from './Featured'


import Social from "../components/Social"

const Home = () => {
    return(
        <div className="condiv home">
         
            <img src={propic} alt="profilepic "className="profilepic"></img>
          
                <ReactTypingEffect
                    className="typingeffect"
                    staticText={"I'm"}
                    text={["Chris Kalfas,", "a full stack web developer.", "a problem solver","an artist.", "a creator.", "a friend.", "a partner.", "a cat dad.", "always growing.", "Batman."  ]}
                    speed={95}

                    eraseDelay={300}    
                />

                <Featured/>
                
                <Social />
        </div>
    )
}

export default Home