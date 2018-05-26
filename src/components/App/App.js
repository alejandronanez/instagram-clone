import React, { Component, Fragment } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { UserProfile } from 'components/UserProfile/UserProfile';
import { Stories } from 'components/Stories/Stories';
import { Photo } from 'components/Photo/Photo';
import { ContentContainer, PhotoContainer, UpdatesContainer } from './styles';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <ContentContainer>
          <PhotoContainer>
            <Photo />
            <Photo />
            <Photo />
            <Photo />
          </PhotoContainer>
          <UpdatesContainer>
            <UserProfile />
            <Stories />
          </UpdatesContainer>
        </ContentContainer>
      </Fragment>
    );
  }
}

export default App;
