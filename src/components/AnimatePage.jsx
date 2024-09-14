import {motion} from 'framer-motion';


const Animation = {
    initial: {opacity:  0, x: 100},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -100}
}


const AnimatePage = ({children}) => {
    return (
        <motion.div variants={Animation} initial="initial" animate="animate" exit="exit">
            {children}
        </motion.div>
    )
}

export default AnimatePage;