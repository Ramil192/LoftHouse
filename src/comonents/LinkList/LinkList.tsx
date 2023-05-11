import { FC } from 'react';
import Link from '../../UI/Link/Link';
import style from './LinkList.module.scss';

interface IProps {
  links: Array<{ text: string; href?: string }>;
  isVertical?: boolean;
}

const LinkList: FC<IProps> = ({ links, isVertical = false }) => {
  const extendedClass = [style.links];

  if (isVertical) extendedClass.push(style['links-vertical']);

  return (
    <ul className={extendedClass.join(' ')}>
      {links.map((link, index) => (
        <li className="item" key={index}>
          <Link href={link.href} text={link.text} />
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
