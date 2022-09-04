import styles from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Filtros";
import Itens from "./Itens";

export default function Cardapio() {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null)
    const [ordenador, setOrdenador] = useState("");
    return (
        <main>
            <section className={styles.cardapio}>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
            </section>
        </main>
    )
}
