import { FC } from 'react';
import Logo from '../../UI/Logo/Logo';
import LinkList from '../LinkList/LinkList';
import style from './Footer.module.scss';

interface IProps {
  social: Array<{ href: string; svg: string }>;
}

const Footer: FC<IProps> = ({ social }) => {
  return (
    <footer className={style.wrapper}>
      <div className={style.container}>
        <Logo />

        <div className={style.links}>
          <div className={style.listsLink}>
            <LinkList
              links={[
                { text: 'О комплексе' },
                { text: 'Район' },
                { text: 'Каталог квартир' },
                { text: 'Ипотека' },
                { text: 'Контакты' },
              ]}
              isVertical
            />

            <LinkList
              links={[
                { text: 'Поселение и переезд' },
                { text: 'Сервисные услуги' },
                { text: 'Экологическая устойчивость' },
                { text: 'Инвестиционные возможности' },
                { text: 'Программа лояльности ' },
              ]}
              isVertical
            />
          </div>

          <div className={style.last}>
            <ul className={style.info}>
              <li>Адрес: Наб. реки Фонтанки 10-15</li>
              <li>
                <a href="tel:+78121234567" className={style.link}>
                  Телефон: 8 (812) 123-45-67
                </a>
              </li>
              <li>Отдел продаж: 10:00 - 20:00</li>
              <li>
                <a href="mailto: vip@lofthouse.ru">E-mail: vip@lofthouse.ru</a>
              </li>
            </ul>

            <ul className={style.social}>
              {social.map((social, index) => (
                <li key={index}>
                  <a href={social.href}>
                    <img
                      src={`/LoftHouse/img/footer/${social.svg}.svg`}
                      alt={social.svg}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
