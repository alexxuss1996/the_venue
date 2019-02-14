import React, { Component } from 'react';
import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';

export default class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ['Balcony', 'Medium', 'Vip'],
    desc: [
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ulla autem architecto non facere dignissimos eum dicta obcaecati possimus incidunt consequatur similique corporis provident laboriosam quia.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam sequi optio, iusto quis maxime dolorum? Vel saepe laudantium enim maiores facilis totam neque laborum quia veritatis, excepturi officiis ipsam?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam, doloremque officiis dolores perferendis a tempore assumenda explicabo doloribus repellat quaerat voluptate necessitatibus modi? Ullam!'
    ],

    linkto: [
      'https://www.stubhub.com/carbon-leaf-tickets-carbon-leaf-charleston-music-farm-2-26-2019/event/103981917/?newga=1&sort=price+asc&qty=1&qqd=1&qtyq=false',
      'https://www.stubhub.com/joan-osborne-tickets-joan-osborne-eureka-arkley-center-for-the-performing-arts-2-15-2019/event/103831317/?sort=price+asc',
      'https://www.stubhub.com/anders-osborne-tickets-anders-osborne-boston-city-winery-boston-3-16-2019/event/103992492/?sort=price+asc'
    ],
    delay: [500, 0, 500]
  };
  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={(i ^ i) + i}>
        <div className='pricing_item'>
          <div className='pricing_inner_wrapper'>
            <div className='pricing_title'>
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className='pricing_description'>{this.state.desc[i]}</div>
            <div className='pricing_buttons'>
              <MyButton text='purchase tickets' bck='#ffa800' color='#ffffff' link={this.state.linkto[i]} />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className='bck_black'>
        <div className='center_wrapper pricing_section'>
          <h2>Pricing</h2>

          <div className='pricing_wrapper'>{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
