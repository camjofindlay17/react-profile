import pic from '../assets/prof-pic.png'

function About() {
    return (
        <div class="main">
            <img class= "prof-pic" src={pic} alt="Profile"/>
            <div class="content-title"><u><strong>About Me</strong></u></div>
            <div class="content-body">
                <p>
                Hi! I'm Cameron Findlay. I am a student at the George Washington University Coding Bootcamp, studying full-stack web development, in order to learn fundamental skills and enter the exciting field of web development.
                </p>
                <p>
                I currently work as a team lead for a popular the legal reseach firm, Westlaw. In my role, I manage a team of researchers as they provide due diligence and document retrieval services for law firms as wells as banking and accounting firms. Our clients also have a need for both domestic and international legal services, so another exciting aspect of my job is the ability to work with courts all over the world. Under my leadership, our team has developed many resources to manage specific client needs and turnaround research and retrieval in the most efficient manner.
                </p>
            </div>
        </div>
    )
}

export default About