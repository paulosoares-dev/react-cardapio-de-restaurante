import './style.css';
import { useState } from 'react';
import { buscarProduto, filtrarProdutos, produtosEntradas } from '../../service/index';
import CampoDeBusca from '../../components/CampoDeBusca';
import Categorias from '../../components/Categorias';
import Cards from '../../components/Cards';

const Main = () => {
    const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
    const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");
    const [botaoClicado, setBotaoClicado] = useState("Entradas");

    const handleBusca = (textoDigitado) => {
        setTextoBuscaDigitado(textoDigitado);
        textoDigitado.length >= 3 && setDadosFiltrados(buscarProduto(textoDigitado));
        setBotaoClicado("");
    };

    const handleFiltro = (categoria) => {
        setTextoBuscaDigitado("");
        setDadosFiltrados(filtrarProdutos(categoria));
        setBotaoClicado(categoria);
    };

    return (
        <main>
            <Categorias handleFiltro={handleFiltro} botaoClicado={botaoClicado} />

            <CampoDeBusca  
                textoBuscaDigitado={textoBuscaDigitado}
                handleBusca={handleBusca}
            />

            <section className='secao-cards'>
                <div>
                    <h2>Cardápio</h2>
                </div>
                <div className='container-cards'>
                    {dadosFiltrados.map((produto) => (
                        <Cards key={produto.id} produto={produto} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Main;