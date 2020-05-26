import React, { Component } from 'react'
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
                <h2 className="subtopic">Development:</h2>
                    <ul>
                        {this.state.development.map((value, index)=>{
                            return <li key={index}>{value}</li>
                        })}
                    </ul>
                    <br></br>

                    <h2 className="subtopic">Version Control & Developer Tools:</h2>
                    <ul>
                        {this.state.versionControlDevTools.map((value, index)=>{
                            return <li key={index}>{value}</li>
                        })}
                    </ul>
            </div>
        )
    }
}
export default Skills
