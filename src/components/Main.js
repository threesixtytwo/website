import React from 'react'
import PropTypes from 'prop-types'
import pic03 from '../images/ani.gif'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>At a point three hundred and sixty two metres above sea level, where a footpath crosses a long railway line is a gate. 
            Behind the gate is a private track, for 9 miles the track runs along a lake before it curves 
             and winds away from the water towards a range of remote mountains. In this wilderness, amoungst the swirling, unpredictable, conditions
             lies the beginning of our adventure.</p>
            <p>At three sixty two we thrive on finding customer pain and connecting it to technology. </p><p>Aruthur C Clarke's third law reads <quote>"Any sufficiently advanced technology is indistinguishable from magic."</quote> our goal is to take the magic out of technology and put it into your business.</p>
            <p>We combine technology expertise with years of creating digital products, propositions that delight millions of
              customers every single day, products that we are proud of. 
              We've learnt adaptability, mindset and continual learning coupled with the right people 
              given the right environment can create outstanding results.  We've not always travelled the route we planed, because we've listened to customers, we've evolved our goals to suit conditions. We've gotten pretty good at creating a culture that succeeds.</p>
              <p>When facing your venture in an evolving digital landscape, anyone can succeed but it really helps to have a guide.</p>
              {close}
</article>
        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

