import React from "react"

const Reference = ({name, position, company, address, city, email, relationship}) => {
    return(
        <div className="widecard">
             <div className="compdet">
                <h4>
                    {name} - {position}
                </h4>
                <h3 className="secondtext">
                    {company}
                </h3>
                <h5 className="secondtext">
                    <em>{address}</em> 
                </h5>
                <h5 className="secondtext">
                    <em>{city}</em> 
                </h5>
                <h5 className="secondtext">
                    {relationship} 
                </h5>
                <h4>
                    <a className="contact-info" href={`mailto:${email}`}>Email</a>
                </h4>
            </div>
        </div>
    )
}

export default Reference