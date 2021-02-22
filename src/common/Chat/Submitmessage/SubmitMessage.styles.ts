import styled from 'styled-components';
import { Field, Form } from 'formik';
import send from '../../../assets/img/icons/send-message.svg';

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const StyledField = styled(Field)`
  height: 3rem;
  border: none;
  background: #fff5e3;
  width: 100%;
  padding: 10px 40px 15px 15px;
  border-radius: 15px;
  resize: none;
  color: black;

  &:focus {
    box-shadow: 0 0 0 2pt red;
    border: 1px solid #fff5e3;
    outline: none;
    box-shadow: 0 0 3pt 2pt #ffb11b;
  }
`;

export const TextWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-grow: 1;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;

export const FileIcon = styled.img`
  position: absolute;
  cursor: pointer;
  top: 10px;
  padding: 5px;
  right: 0;
  transform: translateX(-100%);
  &:hover {
    opacity: 0.7;
  }
`;

export const SignInUpTxt = styled.button`
  min-width: 21px;
  min-height: 18px;
  margin-left: 25px;
  border: none;
  background: none;
  background-image: url(${send});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  outline: none;
  &:hover {
    opacity: 0.7;
  }
  &:active,
  &:focus {
    filter: drop-shadow(-3px 4px 6px orange);
  }
`;
