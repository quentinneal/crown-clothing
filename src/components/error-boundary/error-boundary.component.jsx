import React from 'react';

import performanceError from '../../assets/mug.png';

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if(this.state.hasErrored) {
      return (
        <div className="errorImageOverlay">
          <div className="errorImageContainer" style={{ backgroundImage: `url(${performanceError})`}}/>
          <div className="errorImageText">Sorry this page is broken</div>
        </div>
      );
  }

    return this.props.children;
  }
}

export default ErrorBoundary;