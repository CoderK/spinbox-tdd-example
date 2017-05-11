import React from 'react';
import { mount } from 'enzyme';

import Spinbox from '../spinbox';

describe('spinbox.js >', () => {
    it('스핀박스를 생성할 수 있다.', () => {
        // given
        // when
        const spinbox = mount(<Spinbox />);

        // then
        expect(spinbox).toBeDefined();
    });
});
