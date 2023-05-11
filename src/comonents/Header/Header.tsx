import { FC, useState } from 'react';
import Logo from '../../UI/Logo/Logo';
import LinkList from '../LinkList/LinkList';
import style from './Header.module.scss';

const Header: FC = () => {
  const [isMenu, setIsMenu] = useState(false);
  const extendedClass = `${style.navigation} ${isMenu ? style.menu : ''}`;
  const extendedClassIcon = `${style.navIcon} ${
    isMenu ? style['navIcon--active'] : ''
  }`;

  const showMenu = () => {
    setIsMenu((prev) => !prev);
  };

  return (
    <header className={style.wrapper}>
      <div className={style.container}>
        <div className={extendedClass}>
          <Logo />
          <nav className={style.nav}>
            <LinkList
              links={[
                { text: 'О комплексе' },
                { text: 'Район' },
                { text: 'Каталог квартир' },
                { text: 'Ипотека' },
                { text: 'Контакты' },
              ]}
              isVertical={isMenu}
            />
          </nav>

          <button className={style.navBtn} onClick={showMenu}>
            <div className={extendedClassIcon}></div>
          </button>
        </div>
        <div className={style.body}>
          <h1 className={style.title}>
            Жилой комплекс <br />в историческом центре
          </h1>
          <a href="#!">
            <img src="/LoftHouse/img/header/mouse.svg" alt="scroll down" />
          </a>
        </div>

        <div className={style.footer}>
          <a href="#section-map" className={style.link}>
            <img src="/LoftHouse/img/header/map.svg" alt="map icon" /> Наб. реки
            Фонтанки 10-15
          </a>
          <a href="tel:+78121234567" className={style.link}>
            <img src="/LoftHouse/img/header/phone.svg" alt="phone icon" /> 8
            (812) 123-45-67
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
