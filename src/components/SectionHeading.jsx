import { motion } from 'framer-motion';
export default function SectionHeading({ eyebrow, title, copy }) { return <motion.div className="section-heading" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.4}} transition={{duration:.6}}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</motion.div>; }
