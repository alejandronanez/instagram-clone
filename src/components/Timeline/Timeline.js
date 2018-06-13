import React, { Component } from 'react';
import { Photo } from 'components/Photo/Photo';
import { ApiConsumer } from 'components/ApiConsumer/ApiConsumer';

export class Timeline extends Component {
  renderPhotos = photos => {
    return photos.map(photo => (
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
    return (
      <div>
        <ApiConsumer endpoint="photos">
          {({ loading, error, data }) => {
            if (loading) {
              return <h1>Loading timeline...</h1>;
            }

            if (error) {
              return <h1>{error.message}</h1>;
            }

            return this.renderPhotos(data);
          }}
        </ApiConsumer>
      </div>
    );
  }
}
