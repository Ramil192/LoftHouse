import { FC } from 'react';
import Title from '../../UI/Title/Title';
import style from './Apartments.module.scss';

interface IProps {
  apartments: Array<{ img: string; text: string }>;
}

const Apartments: FC<IProps> = ({ apartments }) => {
  return (
    <section className={style.wrapper}>
      <Title title="Наши квартиры" />
      <ul className={style.items}>
        {apartments.map((apartment, index) => (
          <li className={style.item} key={index}>
            <img
              src={`/LoftHouse/img/apartments/${apartment.img}.png`}
              alt={apartment.img}
            />
            <span className={style.text}>{apartment.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Apartments;
