import { FC } from 'react';
import style from './Link.module.scss';

const Link: FC<{ text: string; href?: string }> = ({ text, href = '#!' }) => {
  return (
    <a href={href} className={style.link}>
      {text}
    </a>
  );
};

export default Link;
