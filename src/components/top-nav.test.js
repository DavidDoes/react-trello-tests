import React from 'react';
import { shallow } from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
  it('Renders successfully', () => {
    shallow(<TopNav />);
  });

  it('Calls onNewGame when new game clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={callback} />);
    const link = wrapper.find('.new');
    link.simulate('click', {
      preventDefault() {},
    });
    expect(callback).toHaveBeenCalled();
  });

  it('Calls onGenerateAuralUpdate when state-of-game link clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
    const link = wrapper.find('.status-link');
    link.simulate('click', {
      preventDefault() {},
    });
    expect(callback).toHaveBeenCalled();
  });
});