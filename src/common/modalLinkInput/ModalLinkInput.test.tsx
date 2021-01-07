/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';
import { ModalLinkInput, IModalLinkInput } from './ModalLinkInput';
import { Form } from './styles';
import MultipleLinkInput from './MultipleLinkInput';
import SingleLinkInput from './SingleLinkInput';

describe('ModalLinkInput test', () => {
  const mockOnLinkSend = jest.fn();
  const mockSetUnvisible = jest.fn();
  const props: IModalLinkInput<string | string[]> = {
    visible: true,
    title: '',
    onLinkSend: mockOnLinkSend,
    setUnvisible: mockSetUnvisible,
  };

  test('renders propely', () => {
    const modal = shallow(<ModalLinkInput {...props} />);
    const mountModal = mount(<ModalLinkInput {...props} />);
    expect(modal).toMatchSnapshot();
    expect(mountModal).toMatchSnapshot();
  });

  describe('ModalLinkInput has single input', () => {
    const modal = mount(<ModalLinkInput {...props} />);
    const shallowModal = shallow(<ModalLinkInput {...props} />);
    const input = modal.find('input');
    test('render single input', () => {
      expect(input).toHaveLength(1);
      expect(shallowModal.find(SingleLinkInput));
    });

    describe('ModalLinkInput with single input field submits', () => {
      test('link submits with single text after input', () => {
        input.simulate('change', { target: { value: 'some text' } });
        modal.find('form').simulate('submit', { preventDefault: () => {} });
        expect(mockSetUnvisible).toHaveBeenCalledTimes(1);
        expect(mockOnLinkSend).toHaveBeenCalledTimes(1);
        expect(mockOnLinkSend).toHaveBeenCalledWith('some text');
      });
      /*
      test('link submits with single text after button press', () => {
        input.simulate('change', { target: { value: 'some text' } });
        modal.find('button').simulate('click', { preventDefault: () => {} });
        expect(mockSetUnvisible).toHaveBeenCalledTimes(1);
        expect(mockOnLinkSend).toHaveBeenCalledTimes(1);
        expect(mockOnLinkSend).toHaveBeenCalledWith('some text');
      });
      */
      test('modal dont submits because empty input', () => {
        modal.find('form').simulate('submit', { preventDefault: () => {} });
        shallowModal.find(Form).simulate('submit', { preventDefault: () => {} });
        expect(mockSetUnvisible).toHaveBeenCalledTimes(0);
        expect(mockOnLinkSend).toHaveBeenCalledTimes(0);
        // expect(shallowModal.find(SingleLinkInput).prop('isError')).toBe(true);
      });

      beforeEach(() => {
        input.simulate('change', { target: { value: '' } });
        mockSetUnvisible.mockClear();
        mockOnLinkSend.mockClear();
      });
    });
  });

  describe('ModalLinkInput with several inputs', () => {
    const modal = mount(<ModalLinkInput {...props} title={['Hello', 'It s a me', 'Mario']} />);
    const shallowModal = shallow(<ModalLinkInput {...props} />);
    const input = modal.find('input');
    test('render 3 inputs', () => {
      expect(input).toHaveLength(3);
      expect(shallowModal.find(MultipleLinkInput));
    });
    describe('ModalLinkInput with 3 input field submits', () => {
      test('link submits with single text after input', () => {
        input.at(0).simulate('change', { target: { value: 'some text 1' } });
        input.at(1).simulate('change', { target: { value: 'some text 2' } });
        input.at(2).simulate('change', { target: { value: 'some text 3' } });
        modal.find('form').simulate('submit', { preventDefault: () => {} });
        expect(mockSetUnvisible).toHaveBeenCalledTimes(1);
        expect(mockOnLinkSend).toHaveBeenCalledTimes(1);
        expect(mockOnLinkSend).toHaveBeenCalledWith(['some text 1', 'some text 2', 'some text 3']);
      });
      /*
      test('link submits with single text after button press', () => {
        input.at(0).simulate('change', { target: { value: 'some text 1' } });
        input.at(1).simulate('change', { target: { value: 'some text 2' } });
        input.at(2).simulate('change', { target: { value: 'some text 3' } });
        modal.find('button').simulate('click', { preventDefault: () => {} });
        expect(mockSetUnvisible).toHaveBeenCalledTimes(1);
        expect(mockOnLinkSend).toHaveBeenCalledTimes(1);
        expect(mockOnLinkSend).toHaveBeenCalledWith(['some text 1', 'some text 2', 'some text 3']);
      });
      */
      test('modal dont submits because empty input', () => {
        modal.find('form').simulate('submit', { preventDefault: () => {} });
        shallowModal.find(Form).simulate('submit', { preventDefault: () => {} });
        expect(shallowModal.find(MultipleLinkInput).prop('isError')).toBe(true);
        expect(mockSetUnvisible).toHaveBeenCalledTimes(0);
        expect(mockOnLinkSend).toHaveBeenCalledTimes(0);
      });

      beforeEach(() => {
        input.at(0).simulate('change', { target: { value: '' } });
        input.at(1).simulate('change', { target: { value: '' } });
        input.at(2).simulate('change', { target: { value: '' } });
        mockSetUnvisible.mockClear();
        mockOnLinkSend.mockClear();
      });
    });
  });
});
