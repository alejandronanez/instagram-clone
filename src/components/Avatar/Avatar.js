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
        <UserPicture src="https://instagram.feoh1-1.fna.fbcdn.net/vp/b331c98b2cc12bf39f329075aa9a022d/5BA2CA37/t51.2885-19/s150x150/17596151_682554641915800_3037261869409632256_a.jpg?_nc_eui2=AeEFNkGEBXySQl8MyE5GsAmOPtO4xxgquOE5NWr9NAjb5pBPOWGVWQdBbeDpYhvI1YV9Y776qEajCnFT5bikE1HofYmb4N4PMwzdc7LGhFHVzg" />
      </a>
    );
  }
}
