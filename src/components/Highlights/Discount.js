import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

export default class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 33
  };

  porcentageCount = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentageCount();
    }, 24);
  }

  render() {
    return (
      <div className='center_wrapper'>
        <div className='discount_wrapper'>
          <Fade onReveal={() => this.porcentageCount()}>
            <div className='discount_porcentage'>
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className='discount_description'>
              <h3>Purchase the tickets before 4th NOV</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae optio numquam corporis sunt,
                suscipit excepturi architecto voluptatem saepe asperiores modi et tempore eius consectetur nobis, rem ut
                iusto porro quibusdam?
              </p>
              <MyButton text='Purchase tickets' bck='#ffa800' color='#ffffff' link='https://www.stubhub.com' />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
