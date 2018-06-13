import React, { Component } from 'react';
import cx from 'classnames';
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
    const { bookmarked, liked, likes, photo, user } = this.props;
    const heartClass = cx('fa-heart', {
      'fas heart-liked': liked,
      fal: !liked,
    });

    const bookmarkClass = cx('fa-bookmark', {
      'fas bookmarked': bookmarked,
      fal: !bookmarked,
    });

    return (
      <Wrapper>
        <Author>
          <UserCard
            username={user.username}
            fullname={user.name}
            avatar={user.avatar}
          />
        </Author>
        <UserPhoto>
          <img alt={`Photo with ${likes} like(s)`} src={photo} />
        </UserPhoto>
        <UserActions>
          <Actions>
            <ActionIconWrapper>
              <IGIcon className={heartClass} />
              <IGIcon className="fal fa-comment" />
            </ActionIconWrapper>
            <IGIcon className={bookmarkClass} />
          </Actions>
          <Likes>{likes} likes</Likes>
        </UserActions>
      </Wrapper>
    );
  }
}
