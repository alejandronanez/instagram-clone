import React, { createContext, Component } from 'react';

const { Consumer, Provider } = createContext({
  isAuth: false,
  toggleAuth() {},
});

export class AuthProvider extends Component {
  state = {
    isAuth: false,
  };

  toggleAuth = () => {
    this.setState(prevState => ({ isAuth: !prevState.isAuth }));
  };

  render() {
    return (
      <Provider value={{ ...this.state, toggleAuth: this.toggleAuth }}>
        {this.props.children}
      </Provider>
    );
  }
}

export const AuthConsumer = Consumer;
