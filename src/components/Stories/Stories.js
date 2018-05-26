import React, { Component } from 'react';
import {
  Wrapper,
  Title,
  TitleWrapper,
  TitleCTA,
  FriendsStories,
} from './styles';
import { UserCard } from 'components/UserCard/UserCard';

export class Stories extends Component {
  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <Title>Stories</Title>
          <TitleCTA>Watch all</TitleCTA>
        </TitleWrapper>
        <FriendsStories>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </FriendsStories>
      </Wrapper>
    );
  }
}
