import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, falinkedin } from '@fortawesome/fontawesome-free-solid'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

function Footer(){
    return (
        <footer class="footer">
            <div class = "footer-contact">
                <div class="links">
                    <a class="tags" href="tel:+7032031134"><i><FontAwesomeIcon icon={faPhone} /></i></a>
                </div>
                <div class="links">
                    <a class="tags" href="mailto:camjofindlay@gmail.com"><i><FontAwesomeIcon icon={faEnvelope} /></i></a>
                </div>
                <div class="links">
                    <a class="tags" href="https://github.com/camjofindlay17" target="_blank"><i><FontAwesomeIcon icon={faGithub} /></i></a>
                </div>
                <div class="links">
                    <a class="tags" href="https://www.linkedin.com/in/cameron-f-3070331b7/" target="_blank"><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer