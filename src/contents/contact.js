import React from 'react'

import Social from "../components/Social"

const Contact = ()=> {
    return(
        <div className="condiv">
            <h1 className="subtopic">Call me, beep me, if you wanna reach me. </h1>
            <h2>When ya wanna page me it's okay.</h2>
            <br></br>
                <h2>Email:   <a className="contact-info" href="mailto:christopherkalfas22@gmail.com">christopherkalfas22@gmail.com</a></h2>
                <h2>GitHub:   <a className="contact-info" href="https://github.com/christopherkalfas">christopherkalfas</a></h2>
                <h2>Instagram:   <a className="contact-info" href="https://www.instagram.com/kalfinator/">@kalfinator</a></h2>
                <h2>Blog:   <a className="contact-info" href="https://christopherkalfas.github.io/">christopherkalfas.github.io</a> </h2>
            <Social />

        </div>
    )
}

export default Contact