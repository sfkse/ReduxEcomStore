import { useSpring, animated } from 'react-spring';
import Product from '../assets/images/product.jpg'

const Main = () => {

    const [{ y }, set] = useSpring(() => ({ y: 0, delay: 300 }));
    return (
        <section className="shop">
            <div className="shop__container">
                <div className="shop__card">
                    <div className="shop__card--image">
                        <img src={Product} alt="Product" />
                        <animated.div style={{ transform: y.interpolate(v => `translateY(${v}%`) }}
                            onMouseEnter={() => set({ y: 50, display: 'flex', delay: 300 })}
                            onMouseLeave={() => set({ y: 0, display: 'none', delay: 300 })}
                            className="shop__card--overlay">
                            <a href="/" className="shop__card--addCart">ADD TO CART</a>
                        </animated.div>
                    </div>

                    <div className="shop__card--title">Denim Jacket</div>
                    <div className="shop__card--price">$45.00</div>
                </div>

            </div>
        </section>
    )
}

export default Main
