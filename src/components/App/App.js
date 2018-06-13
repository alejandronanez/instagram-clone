import React, { Component, Fragment } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { UserProfile } from 'components/UserProfile/UserProfile';
import { Stories } from 'components/Stories/Stories';
import { Timeline } from 'components/Timeline/Timeline';
import { LoginButton } from 'components/LoginButton/LoginButton';
import { ContentContainer, TimelineWrapper, UpdatesContainer } from './styles';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <ContentContainer>
          <TimelineWrapper>
            <Timeline />
          </TimelineWrapper>
          <UpdatesContainer>
            <UserProfile />
            <Stories />
            <LoginButton />
          </UpdatesContainer>
        </ContentContainer>
      </Fragment>
    );
  }
}

export default App;
