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
            Beyond the gate is a track, for 9 miles the track runs along a lake before it curves 
             away from the water towards a range of remote mountains. In this wilderness, amongst the swirling, unpredictable, conditions
             lies the beginning of adventure, a place where experience helps but no two days are the same, where a life of learning can only ever change the odds. </p>
             <p>We've learnt adaptability, mindset and continual learning coupled with the right people 
              given the right environment creates outstanding measurable, repeatable results.  We've not always travelled the route we planed, because listening to customers teaches us new things everyday. We've evolved our goals to suit conditions and we've gotten pretty good at creating a culture that succeeds.</p>
            
            <p>At three sixty two we operate in the wilderness between innovation and technology.</p>
               <p>Arthur C Clarke's, one of the worlds most well know author and inventor is credited with stating 
               <quote> "Any sufficiently advanced technology is indistinguishable from magic."</quote> We love demystifying 'magic', making it real, putting it to use in a lightweight way serving the neeeds of your customers.</p>
            
              <p>When facing your adventure in an evolving digital landscape, anyone can succeed but, it really helps to have a guide.</p>
              <p> Give us a call +44 207 993 5192 or drop a note using the form below</p>
              {close}
</article>
        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
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

