import Item from "pages/Comanda/Item_Comanda";
import cardapio from "data/itens.json";
import styles from './Comanda.module.scss';

export default function Comanda() {
    const lista = cardapio;
    return (
        <section className={styles.cardapio}>
            {
                lista.map((item)=>(
                    <Item key={item.id} {...item}/>
                ))
            }
        </section>
    );
}