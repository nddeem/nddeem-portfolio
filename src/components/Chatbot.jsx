import { useEffect, useRef, useState } from 'react';
import { Bot, MessageCircle, Send, X } from 'lucide-react';
import { siteData } from '../data/siteData';

const topics = [
  ['Name', "My name is Nddeem."],
  ['Role', "I'm a Frontend Developer."],
  ['Skills', 'My skills include React.js, JavaScript, AI Tools, MS Excel, and Data Management.'],
  ['Contact', `You can email me at ${siteData.email} or connect with me on LinkedIn.`],
  ['Availability', 'I am open to internships and junior roles.'],
  ['Services', 'I build responsive landing pages, portfolio websites, and modern dashboard interfaces.'],
];

export default function Chatbot(){
  const [open,setOpen]=useState(false);const [input,setInput]=useState('');const [messages,setMessages]=useState([{from:'bot',text:'Hi! Ask me about Nddeem, or choose a topic below.'}]);const endRef=useRef(null);
  useEffect(()=>{endRef.current?.scrollIntoView({behavior:'smooth'})},[messages,open]);
  const answer=(value)=>{const text=value.trim();if(!text)return;const lower=text.toLowerCase();const match=topics.find(([topic])=>lower.includes(topic.toLowerCase())||(topic==='Contact'&&(lower.includes('email')||lower.includes('linkedin')))||(topic==='Role'&&lower.includes('developer')));const response=match?.[1]||'I can help with Nddeem’s name, role, skills, contact information, availability, or services.';setMessages(current=>[...current,{from:'user',text},{from:'bot',text:response}]);setInput('')};
  return <div className="chatbot"><button className="chat-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Close portfolio assistant':'Open portfolio assistant'} aria-expanded={open}>{open?<X/>:<MessageCircle/>}</button>{open&&<div className="chat-panel" role="dialog" aria-label="Portfolio assistant"><div className="chat-header"><Bot/><div><strong>Portfolio Assistant</strong><span>Predefined answers</span></div></div><div className="chat-messages" aria-live="polite">{messages.map((message,index)=><p className={message.from} key={index}>{message.text}</p>)}<div ref={endRef}/></div><div className="chat-topics">{topics.map(([topic])=><button key={topic} onClick={()=>answer(topic)}>{topic}</button>)}</div><form onSubmit={event=>{event.preventDefault();answer(input)}}><input value={input} onChange={event=>setInput(event.target.value)} placeholder="Ask about Nddeem..." aria-label="Chat message"/><button type="submit" aria-label="Send"><Send/></button></form></div>}</div>;
}
