import { ReactComponent as Logo } from 'assets/Meu1.svg';
import styles from './Menu.module.scss';
import {Link} from 'react-router-dom';

export default function Menu() {
  const rotas=[{
    label: 'Cardápio',
    to: '/'
  },{
    label: 'Comanda',
    to: '/Comanda'
  },{
    label: 'Pedidos',
    to: '/Pedidos'
  }
  ];
  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {rotas.map((rota, index)=> (
          <li key={index} className={styles.menu__link}>
            <Link to ={rota.to} >
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}