import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
  it('Renders successfully', () => {
    shallow(<GuessSection />);
  });
});