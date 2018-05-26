import React, { Component } from 'react';
import { Wrapper, UserInfoWrapper, UserName, UserSubtitle } from './styles';
import { Avatar } from 'components/Avatar/Avatar';

export class UserCard extends Component {
  render() {
    return (
      <Wrapper>
        <Avatar />
        <UserInfoWrapper>
          <UserName
            onClick={() => {
              console.log('username clicked');
            }}
          >
            alejandronanez
          </UserName>
          <UserSubtitle>Alejandro Ñáñez Ortiz</UserSubtitle>
        </UserInfoWrapper>
      </Wrapper>
    );
  }
}
