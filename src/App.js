import React, { Component, Fragment } from 'react';
import { Navigation } from 'components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <div>Instagram clone</div>
      </Fragment>
    );
  }
}

export default App;
