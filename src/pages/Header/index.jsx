
import './style.css';
import Banner from '../../assets/banner.png';

const Header = () => {
    return (
        <header>
            <img src={Banner} alt="restaurante" />
            <div>
                <h1>RESTAURANT</h1>
                <p>De pratos clássicos a criações surpreendentes nosso cardápio é um requinte de sabores refinados.</p>
            </div>
        </header>
    )
}

export default Header;