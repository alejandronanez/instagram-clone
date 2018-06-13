import React, { Component } from 'react';
import { UserPicture } from './styles';

export class Avatar extends Component {
  render() {
    return (
      <a
        onClick={() => {
          console.log('click avatar');
        }}
      >
        <UserPicture src={this.props.image} />
      </a>
    );
  }
}
