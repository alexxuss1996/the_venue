import React from 'react';

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        title='Venue'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.1008158500294!2d30.49950631527124!3d50.43922139605567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cef0507904cb%3A0xf3836855fde1c208!2z0YPQuy4g0KHQsNC60YHQsNCz0LDQvdGB0LrQvtCz0L4sIDg5LCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1550154793516'
        width='100%'
        height='500px'
        frameBorder='0'
        allowFullScreen
      />
      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
