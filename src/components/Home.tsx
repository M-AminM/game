import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import images from './Images';
import { Link } from "react-router-dom";

const Home = () => {

    const carousel:any = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

    return(
        <div>
            <h1 className="title">Top Games</h1>
            <motion.div ref={carousel} className="carousel">
                <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="inner-carousel">
                    {images.map(image => {

                        return(
                            <motion.div className="item" key={image.image}>
                                <Link to={`${image.name}`}>
                                    <img src={image.image} alt={image.title}/>
                                </Link>
                            </motion.div>
                        )
                    })}

                </motion.div>

            </motion.div>
        </div>
    )
}
export default Home;