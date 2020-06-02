import React, { Component } from 'react'
import Skillscard from "../components/Skillscard"
class Skills extends Component {
    constructor(props) {
        super(props);

        this.state={
            'development':['JavaSrcipt','Ruby','REACT','RAILS','SQL', "PostgreSQL",'HTML','CSS',"Bootstrap"],
            "versionControlDevTools": ["GitHub", "BASH", "YARN", "VS Code","Heroku", "GitHub Pages", "Now", "Netlify"]
        };
    }

    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">Development:</h1>
                    <ul class="skills-ul">
                        {this.state.development.map((value, index)=>{
                            return <li key={index}><Skillscard name={value}/></li>
                        })}
                    </ul>
                    <br></br>

                    <h1 className="subtopic">Version Control & Developer Tools:</h1>
                    <ul class="skills-ul">
                        {this.state.versionControlDevTools.map((value, index)=>{
                            return <li key={index}><Skillscard name={value}/></li>
                        })}
                    </ul>
            </div>
        )
    }
}
export default Skills
