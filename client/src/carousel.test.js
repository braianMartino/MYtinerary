import React from 'react';
import { shallow } from 'enzyme';
import Carousell from './carousel.js';

it('should display a text input to fill question', () => {
    const componente = shallow(<Carousell/>);
    expect(componente.find('img').length).toBe(12);
});
