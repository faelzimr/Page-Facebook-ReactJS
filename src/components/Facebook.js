import React, { Component } from 'react';

import Header from './Header';
import PostList from './PostList';

export default class Facebook extends Component {
  render() {
    return (
      <>
        <Header />
        <PostList />
      </>
    );
  }
}
