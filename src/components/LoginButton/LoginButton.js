import React, { Component } from 'react';
import { Button } from './style';

export class LoginButton extends Component {
  render() {
    return (
      <div>
        <Button onClick={() => console.log('I should do something!')}>
          Change me please!
        </Button>
      </div>
    );
  }
}
