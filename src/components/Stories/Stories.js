import React, { Component } from 'react';
import {
  Wrapper,
  Title,
  TitleWrapper,
  TitleCTA,
  FriendsStories,
} from './styles';
import { UserCard } from 'components/UserCard/UserCard';
import { getFromApi } from 'api/api';

export class Stories extends Component {
  state = {
    stories: [],
  };

  async componentDidMount() {
    const { data } = await getFromApi('users');

    this.setState(() => ({
      stories: data,
    }));
  }

  renderCard = () => {
    return this.state.stories.map(story => (
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
        <FriendsStories>{this.renderCard()}</FriendsStories>
      </Wrapper>
    );
  }
}
