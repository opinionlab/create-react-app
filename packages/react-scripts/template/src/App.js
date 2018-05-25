import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Columns, Column, Navigation, SubNavigation} from '@opinionlab/react-ui-library';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      panelCollapsed: false
    }
  }
  render() {
    return (
      <Fragment>
        <Navigation
          className='ol-navbar'
          handleCollapseToggle={this.handleCollapseToggle} />
        <Columns
          className='vt-navbar-padding'
          isGapless
          isMobile>
          <Column isNarrow>
            <SubNavigation
              panelCollapsed={panelCollapsed} />
          </Column>
          <Column isWrapper>
            {
              <span>content</span>
            }
          </Column>
        </Columns>
      </Fragment>
    );
  }
}

export default App;
