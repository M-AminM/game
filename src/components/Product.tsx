import data from '../data.json';
import {useParams} from "react-router-dom";

const Product = () => {

    const {productName}:any = useParams();
    let product:any = data.filter(game => game.name === productName);

    return(
        <div className="product">
            <h2>{product[0].title}</h2>
            <p>{product[0].about}</p>
            <img src={product[0].image} alt=""/>
        </div>
    )
}
export default Product;