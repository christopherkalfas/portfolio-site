import React from "react"
import Widecard from "../components/Widecard"

const Education = () => {
    return(
        <div className="condiv">
            <h1 className="subtopic">
                Education
            </h1>
            <Widecard 
                title="Full Stack Web Development: Training Cert." 
                where="The Flatiron School"
                from="April 2019"
                to="Nov 2019"
            />
            <Widecard 
                title="Improv. & Sketch Writing: Training Cert." 
                where="The Upright Citizens Brigade, NYC"
                from="April 2019"
                to="Nov 2019"
            />
            <Widecard 
                title="B.F.A Music Theatre - cum laude" 
                where="Elon University"
                from="2009"
                to="2013"
            />
            <Widecard 
                title="Diploma" 
                where="Centennial High School"
                from="2005"
                to="2009"
            />
        </div>
    )
}

export default Education