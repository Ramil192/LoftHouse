import { FC } from 'react';
import style from './Logo.module.scss';

const Logo: FC = () => {
  return (
    <a href="#!" className={style.logo}>
      <img src="/LoftHouse/img/logo.svg" alt="Logo" />
    </a>
  );
};

export default Logo;
