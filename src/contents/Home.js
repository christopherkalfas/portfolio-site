import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import propic from "../img/propic.png";


import Social from "../components/Social"

const Home = () => {
    return(
        <div className="condiv home">
         
            <img src={propic} alt="profilepic "className="profilepic"></img>
          
                <ReactTypingEffect
                    className="typingeffect"
                    text={["Hello, world! I'm Christopher Kalfas, a Full Stack Web Developer." ]}
                    speed={95}
                    eraseDelay={20000}    
                />
                
                <Social />
        </div>
    )
}

export default Home