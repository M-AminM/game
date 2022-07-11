type Props = {
    game: string;
    image:any;
}

const Order = ({game, image}:Props) => {
    return(
        <div className="order">
            <img className="order-image" src={image} alt=""/>
            <div className="order-name">{game}</div>
        </div>
    )
}
export default Order;