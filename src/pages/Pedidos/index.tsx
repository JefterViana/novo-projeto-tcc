import styles from "./Pedidos.module.scss";
/*import pedidos from "data///pedidos.json";*/
import Pedido from "./Pedido";

export default function Pedidos(){
    /*const lista = pedidos;*/
    return(
        <section className={styles.cardapio}>
             <Pedido/>
        </section>
    );
}