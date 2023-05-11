import { FC } from 'react';
import style from './CustomButton.module.scss';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children: React.ReactNode;
  extensionClass?: string;
}

const CustomButton: FC<IButton> = ({ children, extensionClass, ...props }) => {
  return (
    <button className={style.button} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
