import React from 'react';
import {mount} from 'enzyme';

import Spinbox from '../spinbox';

describe('spinbox.js >', () => {
  let spinbox;

  beforeEach(() => {
    spinbox = mount(<Spinbox />);
  });

  function getValueFromInputNode(input) {
    const inputNode = input.getDOMNode();
    return Number(inputNode.value);
  }

  describe('기본값 >', () => {
    it('스핀박스를 생성하면 기본값이 200이어야 한다.', () => {
      // given
      // when
      // then
      const input = spinbox
        .find('input')
        .getDOMNode();

      const actualValue = Number(input.value);
      const defaultValue = 200;

      expect(actualValue).toEqual(defaultValue);
    });
  });

  describe('값 입력 >', () => {
    let input;

    beforeEach(() => {
      input = spinbox.find('input');
    });

    it('입력 폼에 999를 입력할 수 있다.', () => {
      // given
      // when
      input.simulate('change', {
        target: {
          value: '999'
        }
      });

      // then
      const actualValue = getValueFromInputNode(input);
      expect(actualValue).toEqual(999);
    });

    it('입력 폼에 0을 입력할 수 있다.', () => {
      // given
      // when
      input.simulate('change', {
        target: {
          value: '0'
        }
      });

      // then
      const actualValue = getValueFromInputNode(input);
      expect(actualValue).toEqual(0);
    });
  });

  describe('값 증가 >', () => {
    const defaultValue = 200;
    let incrementBtn;

    beforeEach(() => {
      incrementBtn = spinbox.find('[data-name="increment"]');
    });

    it('증가 버튼을 클릭하여 값을 1 증가시킬 수 있다.', () => {
      // given
      // when
      incrementBtn.simulate('click');

      // then
      const actualValue = getValueFromInputNode(spinbox.find('input'));
      expect(actualValue).toEqual(defaultValue + 1);
    });

    it('증가 버튼을 세 번 클릭하여 값을 3 증가시킬 수 있다.', () => {
      // given
      // when
      incrementBtn.simulate('click');
      incrementBtn.simulate('click');
      incrementBtn.simulate('click');

      // then
      const actualValue = getValueFromInputNode(spinbox.find('input'));
      expect(actualValue).toEqual(defaultValue + 3);
    });
  });


  describe('값 감소 >', () => {
    const defaultValue = 200;
    let decrementBtn;

    beforeEach(() => {
      decrementBtn = spinbox.find('[data-name="decrement"]');
    });

    it('감소 버튼을 클릭하여 값을 1 감소시킬 수 있다.', () => {
      // given
      // when
      decrementBtn.simulate('click');

      // then
      const actualValue = getValueFromInputNode(spinbox.find('input'));
      expect(actualValue).toEqual(defaultValue - 1);
    });

    it('감소 버튼을 세 번 클릭하여 값을 3 감소시킬 수 있다.', () => {
      // given
      // when
      decrementBtn.simulate('click');
      decrementBtn.simulate('click');
      decrementBtn.simulate('click');

      // then
      const actualValue = getValueFromInputNode(spinbox.find('input'));
      expect(actualValue).toEqual(defaultValue - 3);
    });
  });
});
