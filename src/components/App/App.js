import React, { Component, Fragment } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { UserCard } from 'components/UserCard/UserCard';
import { UserProfile } from 'components/UserProfile/UserProfile';
import { Stories } from 'components/Stories/Stories';
import { ContentContainer, PhotoContainer, UpdatesContainer } from './styles';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <ContentContainer>
          <PhotoContainer>
            <div>One</div>
            <div>Two</div>
            <div>three</div>
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
