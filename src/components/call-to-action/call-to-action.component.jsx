import React from 'react';

import callToActionImage from '../../assets/model-600225_1920.jpg';

import './call-to-action.styles.scss';

const CallToAction = () => (
  <div style={{ backgroundImage: `url(${callToActionImage})`}} className="call-to-action-image">
    <div className="call-to-action-overlay">
      <div className="call-to-action">
        <div className="call-to-action-title">Warm up for winter!</div>
        <div className="call-to-action-content">50% off winter coats for the season!</div>
      </div>
    </div>
  </div>
);

export default CallToAction;