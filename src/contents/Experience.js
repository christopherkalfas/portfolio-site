import React from 'react'
import Jobcard from "../components/Jobcard"
import Reference from '../components/Reference'

const Experience = () => {
    return(
        <div className="condiv">
            <h1 className="subtopic">
                Experience
            </h1>
            <Jobcard
                jobTitle= "Sales Consultant"
                company = "Power Home Remodeling Group"
                location = "Norcross, GA"
                dates = "2017 | 2018"
                responsibility1="Established trust with prospective customers, by educating them on Power Home Remodeling Group’s products (Roofing, Windows, Siding, and Attic Insulation), establishing an urgent need to take action on project, and negotiating/closing remodeling contracts, generating $880,00 of net revenue in the first full year of employment"
                responsibility2="Competed in company-wide, sales-based tournament for top 64 consultants out of 1500, generating over $164,000 in net revenue in March 2018"
                responsibility3="Chosen by Regional Vice-President to participate in “Future Leaders” program and “Rookie-Mentors” team within first six months of employment based on sustaining a closing percentage above 40%, a gross-to-net conversion rate above 75% and demonstrating leadership acumen"
                responsibility4="Traveled to less-established branches of the company, assisting in building company culture and promoting good sales practices, expediting branch growth and elevating home branches reputation"

            />
            <Jobcard
                jobTitle= "Assistant Sales Manager"
                company = "Hendrick Automotive Group - Toyota"
                location = "Sandy Springs, GA"
                dates = "2016 | 2017"
                responsibility1 = "Promoted (twice) to the internet sales team and then to assistant internet sales manager by selling more than 120 vehicles and achieving the highest customer satisfaction rating (CSR) at the dealership (99%)"
                responsibility2 = "Assisted Sales Consultants in negotiating their deals, helping exceed Southeastern Toyota’s sales quotas and reaching their individual sales goals every month performing ASM role"
                responsibility3 = "Managed numerous follow-up files for customers and potential customers regarding purchases or purchasing interests"
            />
            <Jobcard
                jobTitle= "Bartender"
                company = "The Gin Mill Bar and Restaurant "
                location = "New York, NY"
                dates = "2014 | 2016"
                responsibility1 = "Developed critical time management skills by efficiently directing bar staff workflow and simultaneously maintaining prompt service to patrons in a high-volume establishment"
                responsibility2 = "Managed and balanced all cash receipts for each work shift, distributing allocated tips between wait and support staff, allowing management to focus on higher-level demands"
                responsibility3 = "Named Event Bartender, responsible for implementing event logistics, exceeding customer expectations, accruing positive reviews, and increasing scheduled events"

            />
        
            <Jobcard
                jobTitle= "Information Technology"
                company = "Scientific Games Corporation"
                location = "New York, NY"
                dates = "2013 | 2014"
                responsibility1 = "Supported employees’ technology needs (i.e. Laptops, cellphones, tablets), troubleshooting problems with software and equipment, producing greater office productivity"
                responsibility2 = "Installed software, set-up email accounts, and server access creating a more efficient ‘on-boarding’ experience"
                responsibility3 = "Assisted executive business research, compiling relevant information and creating presentations, streamlining preparation time"
            />
            <Jobcard
                jobTitle= "Various Positions"
                company = "The Silver Slipper Restaurant"
                location = "Tallahassee, FL"
                dates = "2002 | 2007"
                responsibility1 = "Took on various restaurant-specific roles during weekends and school sanctioned breaks in order to support family-owned business"
            />
            <h2 className="subtopic">
                References
            </h2>
            <Reference
                name="Roman Mangini"
                position="Sr. Sales Mentor"
                relationship="Roman was my direct manager"
                company="Power Home Remodeling Group"
                address="1740 Corporate Dr #800"
                city="Norcross, GA 30093"
                email="roman.mangini@powerhrg.com"
            />
            <Reference
                name="Alejandro Arrese"
                position="Regional Vice-President of Sales"
                relationship="Alejandro was my direct supervisor"
                company="Power Home Remodeling Group"
                address="1740 Corporate Dr #800"
                city="Norcross, GA 30093"
                email="alejandro.arrese@powerhrg.com"
            />
           <Reference
                name="Richard McNulty"
                position="Bar Manager"
                relationship="Richard was my direct manager "
                company="The Gin Mill Restaurant & Bar"
                address="442 Amsterdam Ave"
                city="New York, NY 10024"
                email="dickmcnulty504@gmail.com"
            />
        </div>
    )
}

export default Experience