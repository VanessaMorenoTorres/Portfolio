import Product from "../product/Product"
import "./productList.css"
import { products} from "../../data"

const ProductList = () => {
    return (
        <div className="pl" id="projects">
            <div className="pl-text">
                <h2 className="pl-title">Create & Inspire</h2>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid voluptatibus corrupti omnis neque minima laboriosam corporis voluptates exercitationem, expedita maiores consequatur deserunt iure nesciunt nam, iusto vero eveniet, reprehenderit temporibus.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    );
};

export default ProductList