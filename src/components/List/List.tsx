import styles from './List.module.css';
import Link from 'next/link';

type ListProps = {
  list: {
    name: string;
    link: string;
  }[];
};

export default function List({ list }: ListProps) {
  return (
    <div>
      <ul className={styles.list}>
        {list.map((item, index: number) => {
          return (
            <li
              key={index}
              className={styles.listItem}
            >
              <Link
                href={item.link}
                className={styles.listLink}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
