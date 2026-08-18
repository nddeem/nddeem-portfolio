import { useState } from 'react';
import { GitBranch as Github, BriefcaseBusiness as Linkedin, Mail, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { siteData } from '../data/siteData';

export default function Contact(){
  const [status,setStatus]=useState('');
  const submit=(event)=>{event.preventDefault();setStatus('Thanks! This demo form is ready to connect to Formspree, EmailJS, or your own API.');event.currentTarget.reset()};
  return <section id="contact" className="section contact"><div className="section-index">05</div><SectionHeading eyebrow="Get in touch" title={<>Have an idea?<br/><span>Let&apos;s talk about it.</span></>} copy="I'm open to internships, junior roles, collaborations, and conversations about frontend development."/><div className="contact-grid"><Reveal className="contact-details"><p>Send a message and I&apos;ll get back to you. For a direct conversation, use one of the links below.</p><a href={`mailto:${siteData.email}`}><Mail/><div><span>Email</span>{siteData.email}</div></a><a href={siteData.github} target="_blank" rel="noreferrer"><Github/><div><span>GitHub</span>View my code</div></a><a href={siteData.linkedin} target="_blank" rel="noreferrer"><Linkedin/><div><span>LinkedIn</span>Let&apos;s connect</div></a></Reveal><Reveal className="contact-form-wrap glass-card" delay={.1}><form onSubmit={submit}><div className="field-row"><label>Name<input required name="name" autoComplete="name" placeholder="Your name"/></label><label>Email<input required type="email" name="email" autoComplete="email" placeholder="you@example.com"/></label></div><label>Subject<input required name="subject" placeholder="What would you like to discuss?"/></label><label>Message<textarea required name="message" rows="5" placeholder="Tell me a little about your idea..."/></label><button className="button primary" type="submit">Send message <Send/></button>{status&&<p className="form-status" role="status">{status}</p>}</form></Reveal></div></section>;
}
