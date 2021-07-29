import pdf from '../assets/cameron-findlay-resume.pdf'

function Resume () {
    return (
    <div class="main">
        <div class="content-title"><u><strong>Resume</strong></u></div>
        <p class="res">Click <a href={pdf} target="_blank" rel="noreferrer">here</a> to download resume</p>
        <div class="skills">
        <div>Front End Skills</div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React.js</li>
                <li>Webpack</li>
                <li>Bootstrap</li>
            </ul>
        <div>Back End Skills</div>
            <ul>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Node</li>
                <li>Express</li>
                <li>Git</li>
            </ul>
        </div>
    </div>
    )
}

export default Resume