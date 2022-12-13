import React, { useState } from 'react';

const Homepage = ({ navigate }) => {
  return (
    <>
      <h1>Welcome to Grumblebook</h1>
      <b>
        <div class="box2 sb4">
          Welcome to the era of honest grumpy social media!
        </div>
      </b>
      <div>
        <img
          id="KyleImageHome"
          src={require('../../images/Kylepixel.png')}
          alt="Kyle"
        />
      </div>
    </>
  );
};

export default Homepage;
