import React, { Component } from 'react';
import { UserCard } from 'components/UserCard/UserCard';
import {
  Wrapper,
  Author,
  UserPhoto,
  Actions,
  Comment,
  Timestamp,
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
        <Actions>
          <span>Heart</span>
          <span>Comment</span>
          <span>Bookmark</span>
        </Actions>
        <Comment>
          <p>
            <span>Author:</span>Something here...
          </p>
        </Comment>
        <Timestamp />
      </Wrapper>
    );
  }
}
