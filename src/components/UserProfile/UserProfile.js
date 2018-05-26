import React, { Component } from 'react';
import { Wrapper } from './styles';
import { UserCard } from 'components/UserCard/UserCard';

export class UserProfile extends Component {
  render() {
    return (
      <Wrapper>
        <UserCard />
      </Wrapper>
    );
  }
}
