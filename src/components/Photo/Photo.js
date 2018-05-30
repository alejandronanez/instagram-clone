import React, { Component } from 'react';
import { UserCard } from 'components/UserCard/UserCard';
import {
  Wrapper,
  Author,
  UserPhoto,
  Actions,
  Likes,
  Timestamp,
  IGIcon,
  ActionIconWrapper,
  UserActions,
} from './styles';

export class Photo extends Component {
  render() {
    return (
      <Wrapper>
        <Author>
          <UserCard />
        </Author>
        <UserPhoto>
          <img src="https://images.pexels.com/photos/952421/pexels-photo-952421.png?cs=srgb&dl=attractive-close-up-eye-952421.jpg&fm=jpg" />
        </UserPhoto>
        <UserActions>
          <Actions>
            <ActionIconWrapper>
              <IGIcon className="fal fa-heart" />
              <IGIcon className="fal fa-comment" />
            </ActionIconWrapper>
            <IGIcon className="fal fa-bookmark" />
          </Actions>
          <Likes>11 likes</Likes>
        </UserActions>
      </Wrapper>
    );
  }
}
