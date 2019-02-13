import React from 'react';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';
import Flip from 'react-reveal/Flip';

const VenueNfo = () => {
  return (
    <div className='bck_black'>
      <div className='center_wrapper'>
        <div className='vn_wrapper'>
          <Flip left delay={1000}>
            <div className='vn_item'>
              <div className='vn_outer'>
                <div className='vn_inner'>
                  <div className='vn_icon_square bck_red' />
                  <div className='vn_icon' style={{ backgroundImage: `url(${icon_calendar})` }} />
                  <div className='vn_title'>Event Date &amp; Time</div>
                  <div className='vn_desc'>6 December 2019 @10.00 pm</div>
                </div>
              </div>
            </div>
          </Flip>
          <Flip left delay={1500}>
            <div className='vn_item'>
              <div className='vn_outer'>
                <div className='vn_inner'>
                  <div className='vn_icon_square bck_yellow' />
                  <div className='vn_icon' style={{ backgroundImage: `url(${icon_location})` }} />
                  <div className='vn_title'>Event Location</div>
                  <div className='vn_desc'>Lesya Ukrainka street, 10/1, Kiev</div>
                </div>
              </div>
            </div>
          </Flip>
        </div>
      </div>
    </div>
  );
};

export default VenueNfo;
