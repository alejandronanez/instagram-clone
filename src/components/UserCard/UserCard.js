import React, { Component } from 'react';
import { Wrapper, UserInfoWrapper, UserName, UserSubtitle } from './styles';
import { Avatar } from 'components/Avatar/Avatar';

export class UserCard extends Component {
  render() {
    return (
      <Wrapper>
        <Avatar image={this.props.avatar} />
        <UserInfoWrapper>
          <UserName
            onClick={() => {
              console.log('username clicked');
            }}
          >
            {this.props.username}
          </UserName>
          <UserSubtitle>{this.props.fullname}</UserSubtitle>
        </UserInfoWrapper>
      </Wrapper>
    );
  }
}
