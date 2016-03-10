import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { RouteHandler } from 'react-router';

class Layout extends Component {
  render() {
    return (
      <div>
        <Sidebar location={this.props.location} />
        <div id="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
