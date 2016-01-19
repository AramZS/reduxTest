import React from 'react';
import Voting from '../../src/components/Voting';
//var ReactTestUtils = require('react-addons-test-utils');
import {renderIntoDocument} from 'react-addons-test-utils';

describe('Voting', () => {

  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} />
    );
  });

});
