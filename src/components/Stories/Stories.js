import React, { Component } from 'react';
import {
  Wrapper,
  Title,
  TitleWrapper,
  TitleCTA,
  FriendsStories,
} from './styles';
import { UserCard } from 'components/UserCard/UserCard';
import { ApiConsumer } from 'components/ApiConsumer/ApiConsumer';

export class Stories extends Component {
  renderCard = storyData => {
    return storyData.map(story => (
      <UserCard
        key={story.id}
        avatar={story.avatar}
        fullname={story.name}
        username={story.username}
      />
    ));
  };

  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <Title>Stories</Title>
          <TitleCTA>Watch all</TitleCTA>
        </TitleWrapper>
        <ApiConsumer endpoint="users">
          {({ loading, error, data }) => {
            if (loading) {
              return <h1>Loading ...</h1>;
            }

            if (error) {
              return <h1>{error}</h1>;
            }

            return <FriendsStories>{this.renderCard(data)}</FriendsStories>;
          }}
        </ApiConsumer>
      </Wrapper>
    );
  }
}
