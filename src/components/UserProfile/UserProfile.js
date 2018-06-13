import React, { Component } from 'react';
import { Wrapper } from './styles';
import { UserCard } from 'components/UserCard/UserCard';

export class UserProfile extends Component {
  render() {
    return (
      <Wrapper>
        <UserCard
          avatar="https://avatars1.githubusercontent.com/u/28740362?s=400&u=484474a44d9d47f363da6557b1efc3ff1533eb60&v=4"
          fullname="React Medellin"
          username="reactmedellin"
        />
      </Wrapper>
    );
  }
}
