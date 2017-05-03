import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';

import Spinbox from '../spinbox';

/**
 * <요구사항>
 * - 기본값 200
 * - 버튼 클릭하여 값 1씩 증가
 * - 버튼 클릭하여 값 1씩 감소
 */

describe('spinbox.js >', () => {
    it('스핀박스를 렌더링 할 수 있다.', () => {
        const spinbox = mount(<Spinbox />);
        expect(spinbox).to.exist;
    });
});