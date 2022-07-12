import data from '../data.json';
import {useParams} from "react-router-dom";
import React from "react";

type Props = {
    info: string;
    order: any[];
};
const Product = ({info, order}:Props) => {

    const {productName}:any = useParams();
    let product:any = data.filter(game => game.name === productName);


    const orderHandler = (e:any) => {
        if (info !== "" && order.indexOf(e.currentTarget.id) === -1) {
            order.push(e.currentTarget.id);
            alert(`${e.currentTarget.id + " added to your orders"}`)
        }else if(order.indexOf(e.currentTarget.id) !== -1){
            alert(`${e.currentTarget.id + " already added to your orders !"}`)
        }else {
            alert("You should login first !")
        }
    }
    return(
        <div className="product">
            <h2>{product[0].title}</h2>
            <p>{product[0].about}</p>
            <img src={product[0].image} alt=""/>
            <button onClick={orderHandler} id={product[0].title}  className="addToOrder" role="button">Add To Orders</button>
        </div>
    )
}
export default Product;