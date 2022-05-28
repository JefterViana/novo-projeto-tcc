import styles from "./Item.module.scss";
import cardapio from "../itens.json";

type Props = typeof cardapio[0];


export default function Item(props: Props){
    const {title, description, price, photo} = props;
    return(
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={photo} alt="imagem" />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p> 
                </div>
            </div>
                
                <div className={styles.item__valor}>
                        R$ {price},00
                    </div> 
        </div>
    )
}