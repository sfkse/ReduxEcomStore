import Product from '../assets/images/product.jpg'

const Main = () => {

    return (
        <section className="shop">
            <div className="shop__container">
                <div className="shop__card">
                    <div className="shop__card--image">
                        <img src={Product} alt="Product" />
                        <div className="shop__card--overlay">
                            <a href="/" className="shop__card--addCart">ADD TO CART</a>
                        </div>
                    </div>

                    <div className="shop__card--title">Denim Jacket</div>
                    <div className="shop__card--price">$45.00</div>
                </div>

            </div>
        </section>
    )
}

export default Main
