import React from 'react';
import Voting from '../../src/components/Voting';
//var ReactTestUtils = require('react-addons-test-utils');
import {expect} from 'chai';
import {renderIntoDocument, scryRenderedDOMComponentsWithTag} from 'react-addons-test-utils';

describe('Voting', () => {

  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Trainspotting');
    expect(buttons[1].textContent).to.equal('28 Days Later');
  });

});
