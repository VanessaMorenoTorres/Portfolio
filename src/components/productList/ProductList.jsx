import Product from "../product/Product"
import "./productList.css"
import { products} from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title">Placeholder Title (Create & Inspire?)</h1>
                <p className="pldesc">
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