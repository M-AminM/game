import Order from "./Order";
import data from "../data.json";
import {motion} from "framer-motion";

type Props = {
    info: string;
    order: any[];

};
const Orders = ({info, order}: Props) => {

    const orderAnim = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition:{duration: 2}}
    }

    const anim = {
        hidden: {x: 100},
        show: {x: 0, transition: {duration: 1, ease: "easeOut", staggerChildren: 1, when: "afterChildren"}}
    }


    return(
        <div className="orders">









            <h2>{info === "" ?
                <motion.div variants={anim} initial="hidden" animate="show">
                    <motion.h2 variants={orderAnim} >First</motion.h2>
                    <motion.h2 variants={orderAnim} >you</motion.h2>
                    <motion.h2 variants={orderAnim} >should login !</motion.h2>
                </motion.div> : <motion.div variants={anim} initial="hidden" animate="show">Orders</motion.div>}</h2>
            {
                order.map(game =>
                    <Order game={game} image={data.filter(image => image.title === game)[0].image}/>
                )
            }
        </div>
    )
}
export default Orders;