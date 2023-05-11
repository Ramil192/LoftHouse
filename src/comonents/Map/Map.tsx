import { FC } from 'react';
import Title from '../../UI/Title/Title';
import style from './Map.module.scss';

const Map: FC = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <Title title="Район на карте" />
        <div className={style.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.322525423474!2d30.33862957082305!3d59.94338316126848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310b650fe5e1%3A0xed02023eb11a8bc5!2sFontanka%20River%20Embankment%2C%2010%2C%20Sankt-Peterburg%2C%20191028!5e0!3m2!1sen!2sru!4v1683825548413!5m2!1sen!2sru"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
