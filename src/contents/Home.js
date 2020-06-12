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
                    staticText={"Hello, world! I'm"}
                    text={["Chris Kalfas.", "a full stack web developer.", "an artist.", "a creator.", "a friend.", "a partner.", "a cat dad.","5'10", "5'11, if I 'do' my hair.", "always growing.", "Batman."  ]}
                    speed={95}
                
               
                    eraseDelay={400}    
                />
                
                <Social />
        </div>
    )
}

export default Home