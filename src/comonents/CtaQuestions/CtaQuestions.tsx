import { FC } from 'react';
import CustomButton from '../../UI/CustomButton/CustomButton';
import CustomInput from '../../UI/CustomInputs/CustomInput';
import CustomInputMask from '../../UI/CustomInputs/CustomInputMask';
import Title from '../../UI/Title/Title';
import style from './CtaQuestions.module.scss';

const CtaQuestions: FC = () => {
  return (
    <section className={style.wrapper}>
      <Title title="Есть вопросы?" />
      <form className={style.form}>
        <span className={style.textInfo}>
          *Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.
        </span>
        <CustomInput placeholder="Ваше имя" />
        <CustomInputMask placeholder="Ваш телефон" />

        <CustomButton>Посмотреть район</CustomButton>
      </form>
    </section>
  );
};

export default CtaQuestions;
