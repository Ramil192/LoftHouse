import { FC } from 'react';
import style from './Benefits.module.scss';

interface IProps {
  benefits: Array<{ svg: string; text: string }>;
}

const Benefits: FC<IProps> = ({ benefits }) => {
  return (
    <section className={style.wrapper}>
      <ul className={style.items}>
        {benefits.map((benefit, index) => (
          <li className={style.item} key={index}>
            <img
              src={`/LoftHouse/img/benefits/${benefit.svg}.svg`}
              alt={benefit.svg}
            />
            <span>{benefit.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Benefits;
