import React, { Component } from "react"
import { Document, Page } from "react-pdf/dist/entry.webpack"

import resume from "../img/Resume-4-2020.pdf"
import "react-pdf/dist/Page/AnnotationLayer.css";


class Resume extends Component {
    state = {
        numPages: null, pageNumber: 1
    }

    onDocumentLoadSuccess = ({numPages}) => {
        this.setState({ numPages })
    }

    goToPrevPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber - 1 }));

    goToNextPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
    
        render(){
            const {pageNumber, numPages} = this.state
            return(
                <div className="condiv">
                    <div className="subtopic">
                        <h1>Resume</h1>
                    </div>
                    <div className="nav-resume">
                        <button className="resume-btns" onClick={this.goToPrevPage}>Prev</button>
                        <button className="resume-btns" onClick={this.goToNextPage}>Next</button>
                    </div>

                    <div style={{ width: 1100 }}>
                        <Document
                            file={resume}
                            onLoadSuccess={this.onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} width={1100} />
                        </Document>
                    </div>  

                        <p>
                            Page {pageNumber} of {numPages}
                        </p>
                </div>
            )
    }
}

export default Resume