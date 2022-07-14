import {motion} from "framer-motion";

type Props = {
    game: string;
    image:string;
    order: any[];
}

const Order = ({game, image, order}:Props) => {

    const anim = {
        hidden: {x: 100},
        show: {x: 0, transition: {duration: 1, ease: "easeOut"}}
    }

    const animImg = {
        hidden: {scale: 0},
        show: {scale: 1}
    }

    const removeButton = (e:any) => {
        for(let i = 0; i < order.length; i++) {
            if(order[i] === e.target.value) {
                order.splice(i, 1);
                alert(`${"you remove " + game + " from orders"}`)
            }
        }
    }

    return(
        <div className="order">
            <motion.div variants={animImg} initial="hidden" animate="show">
                <img className="order-image" src={image} alt=""/>
            </motion.div>
            <motion.div variants={anim} initial="hidden" animate="show">
                <div className="order-name">{game}</div>
            </motion.div>
            <motion.button variants={anim} initial="hidden" animate="show" onClick={removeButton} value={game} className="close">
                RemoveX
            </motion.button>
        </div>
    )
}
export default Order;