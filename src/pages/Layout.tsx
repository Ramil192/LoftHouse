import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Apartments from '../comonents/Apartments/Apartments';
import Benefits from '../comonents/Benefits/Benefits';
import Cta from '../comonents/Cta/Cta';
import CtaQuestions from '../comonents/CtaQuestions/CtaQuestions';
import Footer from '../comonents/Footer/Footer';
import Header from '../comonents/Header/Header';
import Map from '../comonents/Map/Map';
import Video from '../comonents/Video/Video';

const Layout: FC = () => {
  return (
    <>
      <Header />

      <main>
        <Benefits
          benefits={[
            { svg: 'bench', text: 'Рядом исторические парки и скверы' },
            { svg: 'building', text: 'Полностью обустроенный' },
            { svg: 'fountain', text: '10 фонтанов на территории' },
            { svg: 'bicycle', text: '6 км велодорожек' },
          ]}
        />
        <Apartments
          apartments={[
            { img: 'LoftОлимп', text: 'Пентхаус “Loft Олимп”' },
            { img: 'NiceLoft', text: 'Апартаменты “Nice Loft”' },
            { img: 'LoftStudio', text: 'Апартаменты “Loft Studio”' },
            { img: 'Престиж', text: 'Loft квартира “Престиж”' },
          ]}
        />
        <Cta />
        <Video />
        <Map />
        <CtaQuestions />
        <Outlet />
      </main>
      <Footer
        social={[
          { svg: 'facebook', href: 'https://www.facebook.com/' },
          { svg: 'instagram', href: 'https://www.instagram.com/' },
          { svg: 'vk', href: 'https://www.vk.com/' },
          { svg: 'youtube', href: 'https://www.youtube.com/' },
        ]}
      />
    </>
  );
};

export default Layout;
