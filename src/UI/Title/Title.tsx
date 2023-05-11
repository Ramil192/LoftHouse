import { FC } from 'react';
import style from './Title.module.scss';

const Title: FC<{ title: string }> = ({ title }) => {
  return <h2 className={style.title}>{title}</h2>;
};

export default Title;
