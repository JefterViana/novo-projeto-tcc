import styles from "./Item.module.scss";



export default function Item_comanda(){
    return(
        <div>
            <div className={styles.pedido}>
                <div className={styles.pedido__numeroPedido}>
                    Pedido N° 1
                </div>
                <div>
                    <p className={styles.pedido__item}> QTD: 1 ......... Cuzcus com Carne</p>
                    <p className={styles.pedido__item}>QTD: 1 ......... Cuzcus com Ovo</p>
                    <p className={styles.pedido__item}>QTD: 1 ......... Tapioca com Manteiga </p>
                </div>
                <div className={styles.pedido__valor}>
                    Valor Total: 25,00
                </div>
            </div>

            <div className={styles.pedido}>
                <div className={styles.pedido__numeroPedido}>
                    Pedido N° 2
                </div>
                <div>
                    <p className={styles.pedido__item}>QTD: 1 ......... Cuzcus com Manteiga</p>
                    <p className={styles.pedido__item}>QTD: 1 ......... Tapioca com Frango</p>
                </div>
                <div className={styles.pedido__valor}>
                    Valor Total: 14,00
                </div>
            </div>

            <div className={styles.pedido}>
                <div className={styles.pedido__numeroPedido}>
                    Pedido N° 3
                </div>
                <div>
                    <p className={styles.pedido__item}>QTD: 1 ......... Cuzcus com Manteiga</p>
                    <p className={styles.pedido__item}>QTD: 1 ......... Cuzcus com Queijo</p>
                    <p className={styles.pedido__item}>QTD: 1 ......... Tapioca com Frango</p>
                </div>
                <div className={styles.pedido__valor}>
                    Valor Total: 18,00
                </div>
            </div>

        </div>
    )
}