import styles from "./Item.module.scss";
import cardapio from "data/itens.json";

type Props = typeof cardapio[0];


export default function Item_comanda(props: Props){
    const {title, price} = props;
    return(
        <div className={styles.item}>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                </div>
            </div>
                
                <div className={styles.item__valor}>
                        R$ {price},00
                    </div> 
        </div>
    )
}