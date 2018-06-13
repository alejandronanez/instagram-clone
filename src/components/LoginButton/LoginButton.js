import React, { Component } from 'react';
import { Button } from './style';
import { AuthConsumer } from 'providers/AuthProvider';

export class LoginButton extends Component {
  render() {
    return (
      <div>
        <AuthConsumer>
          {({ isAuth, toggleAuth }) => (
            <Button onClick={() => toggleAuth()}>
              {isAuth && 'Logout'}
              {!isAuth && 'Login'}
            </Button>
          )}
        </AuthConsumer>
      </div>
    );
  }
}
