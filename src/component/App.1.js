import React, { Component } from 'react';
import '../style/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <section id="cd-timeline" className="cd-container">
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-picture">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture" />
              </div>
              <div className="cd-timeline-content">
                <h2>Title of section 1</h2>
                <p>This is a test.</p>
                <a href="#0" className="cd-read-more">Read more</a>
                <span className="cd-date">Jan 14</span>
              </div> 
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg" alt="Movie" />
              </div>

              <div className="cd-timeline-content">
                <h2>Title of section 2</h2>
                <p>Test 2</p>
                <a href="#0" className="cd-read-more">Read more</a>
                <span className="cd-date">Jan 18</span>
              </div>
            </div>
          </section>
      </div>
    );
  }
}

export default App;
