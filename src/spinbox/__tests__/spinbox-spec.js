import React from 'react';
import { mount } from 'enzyme';

import Spinbox from '../spinbox';

/**
 * <요구사항>
 * - 기본값 200
 * - 값 입력
 * - 버튼 클릭하여 값 1씩 증가
 * - 버튼 클릭하여 값 1씩 감소
 */
describe('spinbox.js >', () => {
    it('스핀박스 컴포넌트를 생성할 수 있다.', () => {
        // given
        // when
        const spinbox = mount(<Spinbox />);

        // then
        expect(spinbox).toBeDefined();
    });
});
