import React, { FC } from 'react';
import ReactInputMask from 'react-input-mask';
import style from './CustomInput.module.scss';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomInputMask: FC<IInput> = ({ ...props }) => {
  return (
    <ReactInputMask
      mask="(999) 999-999-99"
      className={style.input}
      {...props}
    />
  );
};

export default CustomInputMask;
