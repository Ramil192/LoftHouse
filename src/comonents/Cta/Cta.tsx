import { FC } from 'react';
import CustomButton from '../../UI/CustomButton/CustomButton';
import CustomInput from '../../UI/CustomInputs/CustomInput';
import CustomInputMask from '../../UI/CustomInputs/CustomInputMask';
import Title from '../../UI/Title/Title';
import style from './Cta.module.scss';

const Cta: FC = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.info}>
          <Title title="Хотите посмотреть?" />
          <span className={style.text}>
            ЖК LoftHouse – это проект бизнес-класса, расположенный в центре
            города, на Наб. реки Фонтанки 10-15. Комплекс предлагает своим
            жильцам квартиры площадью от 40 до 170 кв. м. В здании будет три
            секции, в которых разместится всего 56 квартир.
          </span>
        </div>
        <form className={style.form}>
          <CustomInput placeholder="Ваше имя" />
          <CustomInputMask placeholder="Ваш телефон" />
          <span className={style.textInfo}>
            *Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.
          </span>
          <CustomButton>Посмотреть район</CustomButton>
        </form>
      </div>
    </section>
  );
};

export default Cta;
