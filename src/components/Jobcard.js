import React from "react"


function Jobcard(props) {


    return(
        
        <div className="widecard">
            <div className="compdet">
                <h3>
                    {props.jobTitle}
                </h3>
                <h4 className="secondtext">
                    {props.company}
                </h4>
                <h5 className="secondtext">
                   <em>{props.location}</em>
                </h5>
                <h4 className="secondtext">
                    {props.dates}
                </h4>
                <ul className="skills-ul">
                    <li><h5>{props.responsibility1}</h5></li>
                    <li><h5>{props.responsibility2}</h5></li>
                    <li><h5>{props.responsibility3}</h5></li>
                    <li><h5>{props.responsibility4}</h5></li>
                </ul>
            </div>
        </div>
    )
}

export default Jobcard