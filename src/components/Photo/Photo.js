import React, { Component } from 'react';
import { UserCard } from 'components/UserCard/UserCard';
import {
  Wrapper,
  Author,
  UserPhoto,
  Actions,
  Likes,
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
          <img
            alt="The description"
            src="https://picsum.photos/2000/2000/?image=100"
          />
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
