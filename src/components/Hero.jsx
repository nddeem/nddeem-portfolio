import { motion } from 'framer-motion';
import { ArrowDownRight, GitBranch as Github, BriefcaseBusiness as Linkedin, Mail } from 'lucide-react';
import profile from '../assets/profile.png';
import { siteData } from '../data/siteData';

const OrbitSet = ({ layer }) => <div className={`portrait-orbits orbit-${layer}`} aria-hidden="true">
  <span className="portrait-orbit ring-one"><i /></span>
  <span className="portrait-orbit ring-two"><i /></span>
  <span className="portrait-orbit ring-three" />
</div>;

export default function Hero() {
  return <section id="home" className="hero"><div className="hero-glow"/><div className="hero-copy"><motion.p className="hello" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>Hello, I&apos;m</motion.p><motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:.1}}>Ndd<span>ee</span>m</motion.h1><motion.h2 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.18}}>Frontend Developer</motion.h2><motion.p className="tagline" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.26}}>I build clean, responsive, and modern web interfaces with React, JavaScript, and thoughtful UI design.</motion.p><motion.div className="availability" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.34}}><i/><span>Open to Internships &amp; Junior Roles</span></motion.div><motion.div className="hero-actions" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.42}}><a className="button primary" href="#projects">View Projects <ArrowDownRight/></a><a className="button secondary" href="#contact">Contact Me</a><div className="socials"><a href={siteData.github} aria-label="GitHub"><Github/></a><a href={siteData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a><a href={`mailto:${siteData.email}`} aria-label="Email"><Mail/></a></div></motion.div></div><div className="hero-visual"><div className="portrait-aura"/><OrbitSet layer="back"/><div className="portrait-frame"><div className="portrait-depth-layer"/><div className="portrait-wrap"><img src={profile} alt="Nddeem, Frontend Developer"/></div><div className="portrait-caption"><span>Frontend Developer</span><i/></div></div><OrbitSet layer="front"/></div><a href="#about" className="scroll-cue"><span>Scroll to explore</span><ArrowDownRight/></a></section>;
}
