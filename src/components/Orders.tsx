import Order from "./Order";
import data from "../data.json";

type Props = {
    info: string;
    orderStatus: boolean;
    setOrderStatus: (active: boolean) => void;
    order: any[];

};
const Orders = ({info, orderStatus, setOrderStatus, order}: Props) => {
    console.log(order.map(a => a))

    return(
        <div className="orders">
            <h2>Orders</h2>
            {
                order.map(game =>
                    <Order game={game} image={data.filter(image => image.title === game)[0].image}/>
                )
            }
        </div>
    )
}
export default Orders;