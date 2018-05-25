import React, { Component } from 'react';
import { A, Wrapper, Container, CTAIcon, IGIcon, SearchInput } from './styles';

export class Navigation extends Component {
  handleSubmit = e => {
    e.preventDefault();

    console.log('Searching...');
  };

  handleCTAClick = e => {
    e.preventDefault();

    console.log('CTA clicked...');
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <div>
            <IGIcon className="fab fa-instagram" />
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <SearchInput type="search" placeholder="Search" />
            </form>
          </div>
          <div>
            <A onClick={this.handleCTAclick}>
              <CTAIcon className="fal fa-compass" />
            </A>
            <A onClick={this.handleCTAclick}>
              <CTAIcon className="fal fa-heart" />
            </A>
            <A onClick={this.handleCTAclick}>
              <CTAIcon className="fal fa-user-alt" />
            </A>
          </div>
        </Container>
      </Wrapper>
    );
  }
}
