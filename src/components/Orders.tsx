import Order from "./Order";
import data from "../data.json";

type Props = {
    info: string;
    order: any[];

};
const Orders = ({info, order}: Props) => {
    return(
        <div className="orders">
            <h2>{info === "" ? "First you should login !" : "Orders"}</h2>
            {
                order.map(game =>
                    <Order game={game} image={data.filter(image => image.title === game)[0].image}/>
                )
            }
        </div>
    )
}
export default Orders;