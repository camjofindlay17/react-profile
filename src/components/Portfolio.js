import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLink} from '@fortawesome/fontawesome-free-solid'

function Portfolio({portfolios}) {
    return (
        <div class="main">
            <div class="content-title"><u><strong>Portfolio</strong></u></div>
            <div class="container portfolios">
                <div class="row single-portfolio">
                    {portfolios.map((portfolio) =>(
                        <div class="col-3 portfolio">
                            <div class="proName">{`${portfolio.name}`}</div> 
                            <div class="proDesc">{`${portfolio.description}`}</div> 
                            <a href={`${portfolio.link}`} class="linktag" target="_blank"><i><FontAwesomeIcon icon={faLink} /></i></a> 
                            <a href={`${portfolio.github}`} class="linktag" target="_blank"><i><FontAwesomeIcon icon={faGithub} /></i></a> 
                        </div>        
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio