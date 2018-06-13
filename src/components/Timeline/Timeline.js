import React, { Component } from 'react';
import { Photo } from 'components/Photo/Photo';
import { getFromApi } from 'api/api';

export class Timeline extends Component {
  state = {
    photos: [],
  };

  async componentDidMount() {
    const { data } = await getFromApi('photos');

    this.setState(() => ({
      photos: data,
    }));
  }

  renderPhotos = () => {
    return this.state.photos.map(photo => (
      <Photo
        key={photo.id}
        bookmarked={photo.bookmarked}
        liked={photo.liked}
        likes={photo.likes}
        photo={photo.photo}
        user={photo.user}
      />
    ));
  };

  render() {
    return <div>{this.renderPhotos()}</div>;
  }
}
