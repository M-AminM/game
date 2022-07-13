import {motion} from "framer-motion";

type Props = {
    game: string;
    image:any;
}

const Order = ({game, image}:Props) => {

    const anim = {
        hidden: {x: 100},
        show: {x: 0, transition: {duration: 1, ease: "easeOut"}}
    }

    const animImg = {
        hidden: {scale: 0},
        show: {scale: 1}
    }

    return(
        <div className="order">
            <motion.div variants={animImg} initial="hidden" animate="show">
                <img className="order-image" src={image} alt=""/>
            </motion.div>
            <motion.div variants={anim} initial="hidden" animate="show">
                <div className="order-name">{game}</div>
            </motion.div>
        </div>
    )
}
export default Order;