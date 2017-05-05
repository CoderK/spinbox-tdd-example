import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';

import Spinbox from '../spinbox';

/**
 * <요구사항>
 * - 기본값 200
 * - 버튼 클릭하여 값 1씩 증가
 * - 버튼 클릭하여 값 1씩 감소
 * - 숫자 입력
 */
describe('spinbox.js >', () => {

    const defaultValue = 200;

    let spinbox;
    let input;

    function getCurrentValueFromInputNode() {
        return Number(input.getDOMNode().value);
    }

    beforeEach(() => {
        // 픽스처 생성
        spinbox = mount(<Spinbox />);
        input = spinbox.find('[data-role="value"]');
    });

    afterEach(() => {
        // 픽스처 정리
    });

    describe('', () => {
        it('기본값이 200인 스핀박스를 렌더링 할 수 있다.', () => {
            // given
            // when
            // then
            const actualValue = getCurrentValueFromInputNode();
            expect(actualValue).to.be.eql(defaultValue);
        });
    });

    describe('증가 >', () => {

        let increaseBtn;

        beforeEach(() => {
            increaseBtn = spinbox.find('[data-role="increase"]');
        });

        it('증가 버튼을 클릭하여 값을 1 증가시킬 수 있다.', () => {
            // given
            // when
            increaseBtn.simulate('click');

            // then
            const actualValue = getCurrentValueFromInputNode();
            expect(actualValue).to.be.eql(defaultValue + 1);
        });

        it('증가 버튼을 두 번 클릭하여 값을 2 증가시킬 수 있다.', () => {
            // given
            // when
            increaseBtn.simulate('click');
            increaseBtn.simulate('click');

            // then
            const actualValue = getCurrentValueFromInputNode();
            expect(actualValue).to.be.eql(defaultValue + 2);
        });

        it('증가 버튼을 세 번 클릭하여 값을 3 증가시킬 수 있다.', () => {
            // given
            // when
            increaseBtn.simulate('click');
            increaseBtn.simulate('click');
            increaseBtn.simulate('click');

            // then
            const actualValue = getCurrentValueFromInputNode();
            expect(actualValue).to.be.eql(defaultValue + 3);
        });

        it('입력 폼에 0을 입력한 후 증가 버튼을 클릭하여 값을 증가시킬 수 있다.', () => {
            // given
            const inputValue = 0;

            input.simulate('change', {
                target: { value: String(inputValue) }
            });

            // when
            increaseBtn.simulate('click');
            increaseBtn.simulate('click');
            increaseBtn.simulate('click');

            // then
            const actualValue = getCurrentValueFromInputNode();
            expect(actualValue).to.be.eql(inputValue + 3);
        });
    });

    describe('감소 >', () => {
        let decreaseBtn;

        beforeEach(() => {
            decreaseBtn = spinbox.find('[data-role="decrease"]');
        });

        it('감소 버튼을 클릭하여 값을 1 감소시킬 수 있다.', () => {
            // given
            // when
            decreaseBtn.simulate('click');

            // then
            const actualValue = getCurrentValueFromInputNode();
            expect(actualValue).to.be.eql(defaultValue - 1);
        });

        it('감소 버튼을 세 번 클릭하여 값을 3 감소시킬 수 있다.', () => {
            // given
            // when
            decreaseBtn.simulate('click');
            decreaseBtn.simulate('click');
            decreaseBtn.simulate('click');

            // then
            const actualValue = getCurrentValueFromInputNode();
            expect(actualValue).to.be.eql(defaultValue - 3);
        });

        it('입력 폼에 0을 입력한 후 증가 버튼을 클릭하여 값을 증가시킬 수 있다.', () => {
            // given
            const inputValue = 0;

            input.simulate('change', {
                target: { value: String(inputValue) }
            });

            // when
            decreaseBtn.simulate('click');
            decreaseBtn.simulate('click');
            decreaseBtn.simulate('click');

            // then
            const actualValue = getCurrentValueFromInputNode();
            expect(actualValue).to.be.eql(inputValue - 3);
        });
    });

    describe('입력 >', () => {
        it('입력 폼에 0을 입력할 수 있다.', () => {
            // given
            const inputValue = 0;

            // when
            input.simulate('change', {
                target: { value: String(inputValue) }
            });

            // then
            const actualValue = getCurrentValueFromInputNode();
            expect(actualValue).to.be.eql(inputValue);
        });

        it('입력 폼에 999를 입력할 수 있다.', () => {
            // given
            const inputValue = 999;

            // when
            input.simulate('change', {
                target: { value: String(inputValue) }
            });

            // then
            const actualValue = getCurrentValueFromInputNode();
            expect(actualValue).to.be.eql(inputValue);
        });
    });
});
