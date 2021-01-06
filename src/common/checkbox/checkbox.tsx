/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { forwardRef, HTMLProps, Ref, Key } from 'react';
import classes from './checkbox.module.scss';

export interface Props extends HTMLProps<HTMLInputElement> {
  className?: string;
  ref: Ref<HTMLInputElement>;
  key?: Key;
}

const Checkbox = forwardRef<HTMLInputElement, Props>(({ className = '', ...rest }, ref) => (
  <div className={[classes.wrapper, className].join(' ')}>
    <input type="checkbox" {...rest} ref={ref} />
    <div />
  </div>
));

export default Checkbox;
