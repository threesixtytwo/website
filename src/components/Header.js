import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
        <Img fluid={props.logoImage.childImageSharp.fluid} />

        </div>
        <div className="content">
            <div className="inner">
            
                <p>For thinkers and do’ers, <br />
tinkers and tailors,<br />
innovators and changemakers.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header

