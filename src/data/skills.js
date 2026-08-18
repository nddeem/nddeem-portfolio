import { Atom, Braces, Code2, Database, FileCode2, GitBranch as Github, GitBranch, LayoutTemplate, MonitorSmartphone, Sparkles, Table2, WandSparkles } from 'lucide-react';

export const skillGroups = [
  { title: 'Frontend', eyebrow: 'Build', skills: [{name:'React.js',icon:Atom},{name:'JavaScript',icon:Braces},{name:'HTML5',icon:FileCode2},{name:'CSS3',icon:Code2},{name:'Responsive Design',icon:MonitorSmartphone},{name:'UI Implementation',icon:LayoutTemplate}] },
  { title: 'Development Tools', eyebrow: 'Ship', skills: [{name:'Git',icon:GitBranch},{name:'GitHub',icon:Github},{name:'VS Code',icon:Code2}] },
  { title: 'AI', eyebrow: 'Explore', skills: [{name:'AI Tools',icon:Sparkles},{name:'Prompt Engineering',icon:WandSparkles}] },
  { title: 'Additional', eyebrow: 'Organize', skills: [{name:'MS Excel',icon:Table2},{name:'Data Management',icon:Database}] },
];
