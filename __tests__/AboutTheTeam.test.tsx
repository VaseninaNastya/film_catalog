import React from 'react';
import AboutTheTeam from '../src/components/AboutTheTeam'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
  describe('src/components/AboutTheTeam', () => {
    describe('AboutTheTeam', () => {
      it('Capturing Snapshot of AboutTheTeam', () => {
        Enzyme.configure({ adapter: new Adapter() })
        const renderedValue =  shallow(
          <AboutTheTeam />
        )
        expect(renderedValue).toMatchSnapshot();
    });

    })



});









