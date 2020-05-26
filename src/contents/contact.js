import React from 'react'

import Social from "../components/Social"

const Contact = ()=> {
    return(
        <div className="condiv">
            <h1 className="subtopic">Call me, beep me, if you wanna reach me. </h1>
            <h2>When ya wanna page me it's okay.</h2>
            <br></br>
                <h3>Email: <a href="mailto:christopherkalfas22@gmail.com">christopherkalfas22@gmail.com</a></h3>
                <h3>GitHub: <a href="https://github.com/christopherkalfas">christopherkalfas</a></h3>
                <h3>Instagram: <a href="https://www.instagram.com/kalfinator/">@kalfinator</a></h3>
                <h3>Blog:<a href="https://christopherkalfas.github.io/">christopherkalfas.github.io</a> </h3>
            <Social />

        </div>
    )
}

export default Contact