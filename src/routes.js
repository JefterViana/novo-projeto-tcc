import Cardapio from 'pages/Cardapio';
import Comanda from 'pages/Comanda';
import Pedidos from "pages/Pedidos";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Menu from 'components/Menu'


export default function AppRouter(){
    return(
        <Router>
            <Menu/>
            <Routes>
                <Route path='/' element={<Cardapio/>}/>
                <Route path='/Comanda' element={<Comanda/>}/>
                <Route path='/Pedidos' element={<Pedidos/>}/>
            </Routes>
        </Router>
    );
}