/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  ExternalLink, 
  BookOpen, 
  Users, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Lightbulb, 
  GraduationCap, 
  Microscope,
  Compass,
  MessageSquare,
  Sparkles,
  ChevronRight
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center">
            <span className="text-gold font-display font-semibold text-xs transition-transform hover:scale-110">IB</span>
          </div>
          <span className={`font-display font-medium text-lg leading-none ${scrolled ? "text-navy-900" : "text-navy-900"}`}>
            Imen Boujmil
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-navy-800 hover:text-gold transition-colors">About</a>
          <a href="#mentor" className="text-sm font-medium text-navy-800 hover:text-gold transition-colors">Mentoring</a>
          <a href="#background" className="text-sm font-medium text-navy-800 hover:text-gold transition-colors">Background</a>
          <a href="#projects" className="text-sm font-medium text-navy-800 hover:text-gold transition-colors">Projects</a>
          <a 
            href="#contact" 
            className="px-5 py-2 bg-navy-900 text-ivory rounded-full text-sm font-medium hover:bg-navy-800 transition-all active:scale-95 shadow-lg shadow-navy-900/10"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

const SectionHeading = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <h2 className={`text-3xl md:text-4xl font-semibold mb-6 tracking-tight ${light ? "text-ivory" : "text-navy-900"}`}>
    {children}
  </h2>
);

const Card = ({ title, description, icon: Icon, delay = 0 }: { title: string; description: string; icon: any; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white p-8 rounded-2xl border border-navy-900/5 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all group"
  >
    <div className="w-12 h-12 rounded-xl bg-ivory flex items-center justify-center mb-6 text-navy-900 group-hover:bg-gold group-hover:text-ivory transition-colors">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-navy-900 group-hover:text-gold transition-colors">{title}</h3>
    <p className="text-navy-800/80 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const BackgroundItem = ({ title, text, year, index }: { title: string; text: string; year?: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative pl-8 pb-12 border-l border-navy-900/10 last:pb-0"
  >
    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
    <h3 className="text-xl font-semibold text-navy-900 mb-2">{title}</h3>
    <p className="text-navy-800/80 leading-relaxed max-w-2xl">{text}</p>
  </motion.div>
);

// --- Sections ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Abstract Background Visual */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30">
            <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 100C300 200 600 0 900 100" stroke="url(#paint0_linear)" strokeWidth="0.5" strokeOpacity="0.5" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="100" x2="900" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#001B3D" />
                  <stop offset="1" stopColor="#D4AF37" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900/5 border border-navy-900/10 text-[10px] font-semibold tracking-wider text-navy-800 uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Biomedical Engineer · PhD in Condensed Matter Physics, Nanoscience and Complex Systems · Science Communicator · Founder of ANUAR
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-semibold text-navy-950 mb-6"
          >
            Imen Boujmil
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl text-navy-800/80 font-light max-w-2xl mx-auto mb-6 text-balance"
          >
            Human-Centered Science & Education Mentor
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-navy-800/60 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            I help early-stage founders turn complex scientific, technological and AI-based ideas into meaningful, understandable and responsible projects.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#mentor" className="w-full sm:w-auto px-8 py-4 bg-navy-900 text-ivory rounded-full font-medium hover:bg-navy-800 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-navy-900/10">
              View Mentor Profile <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://anuar-delta.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white border border-navy-900/10 text-navy-900 rounded-full font-medium hover:border-gold/50 transition-all inline-flex items-center justify-center gap-2">
              Explore ANUAR <ExternalLink size={16} />
            </a>
            <a 
              href="https://www.linkedin.com/in/imen-boujmil-10b910115/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 bg-white border border-navy-900/10 text-navy-900 rounded-full hover:text-gold hover:border-gold/50 transition-all flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-navy-900 relative">
              {/* Replace with actual image later, using abstract representation for now */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center p-12">
                 <Sparkles size={120} strokeWidth={1} className="text-gold/20" />
              </div>
              <div className="absolute bottom-10 left-10 right-10 p-8 glass backdrop-blur-xl rounded-2xl bg-white/5 border border-white/10">
                <p className="text-ivory font-display text-lg italic leading-relaxed">
                  "Innovation becomes powerful when it remains connected to people, purpose and responsibility."
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
          </motion.div>
          <div>
            <SectionHeading>A hybrid profile for human-centered innovation</SectionHeading>
            <p className="text-navy-800/80 leading-relaxed text-lg mb-6">
              My background brings together biomedical engineering, biophysics, science communication, education and social impact. After completing a PhD in Condensed Matter Physics, Nanoscience and Complex Systems between Rome and Dublin, I chose to move beyond the laboratory to explore how science can become more accessible, meaningful and transformative for society.
            </p>
            <p className="text-navy-800/80 leading-relaxed text-lg mb-10">
              Today, my work focuses on connecting scientific knowledge with creativity, ethics and purpose. I am especially interested in helping young people and early-stage innovators understand not only what they can build, but why it matters and who it should serve.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-semibold text-navy-900 mb-1">PhD</div>
                <div className="text-xs text-navy-800/50 uppercase tracking-widest font-semibold text-balance px-2">Matter Physics</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-navy-900 mb-1">Eng</div>
                <div className="text-xs text-navy-800/50 uppercase tracking-widest font-semibold">Biomedical</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY I CAN CONTRIBUTE TO nAItive */}
      <section id="mentor" className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block"
            >
              Mentor Value
            </motion.span>
            <SectionHeading>Where I can bring value to nAItive founders</SectionHeading>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card 
              icon={MessageSquare} 
              title="Science Communication" 
              description="Helping founders explain complex scientific, technical or AI-based ideas with clarity, structure and emotional resonance." 
              delay={0.1}
            />
            <Card 
              icon={Users} 
              title="Human-Centered Innovation" 
              description="Supporting founders in designing products and services around real human needs, not only technological possibilities." 
              delay={0.2}
            />
            <Card 
              icon={ShieldCheck} 
              title="Ethical and Social Impact" 
              description="Helping teams reflect on responsibility, purpose, unintended consequences and the broader impact of innovation." 
              delay={0.3}
            />
            <Card 
              icon={BookOpen} 
              title="Education & Learning Design" 
              description="Bringing experience in hands-on learning, youth education and educational storytelling to founders building in the learning or youth space." 
              delay={0.4}
            />
            <Card 
              icon={Compass} 
              title="Critical Thinking" 
              description="Helping founders question assumptions, identify weak points, refine their reasoning and make their ideas more robust." 
              delay={0.5}
            />
            <Card 
              icon={Globe} 
              title="Diversity in Science" 
              description="Bringing the perspective of a woman in science, with Italian and Tunisian roots, and experience across different cultural contexts." 
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* 4. MENTORING STATEMENT */}
      <section className="py-24 bg-navy-900 text-ivory">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 w rounded-full bg-gold mb-12"
          />
          <div className="max-w-3xl">
            <SectionHeading light>My mentoring approach</SectionHeading>
            <p className="text-ivory/70 leading-relaxed text-xl mb-12">
              I believe mentoring is not about giving ready-made answers. It is about asking the right questions, helping people see their ideas more clearly, and supporting them in transforming intuition into direction.
            </p>
            <p className="text-ivory/70 leading-relaxed text-xl mb-16">
              With founders, my role is to help bridge the gap between technical ambition and human meaning. I help them clarify the problem they are solving, understand the people they are serving, communicate their vision, and build solutions that are not only innovative, but also responsible, understandable and useful.
            </p>
            <div className="relative p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
               <span className="absolute top-6 left-8 text-6xl text-gold/20 font-serif leading-none italic select-none">“</span>
               <p className="text-2xl md:text-3xl font-display font-light text-gold text-balance">
                 Innovation becomes powerful when it remains connected to people, purpose and responsibility.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BACKGROUND SECTION */}
      <section id="background" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-xl">
              <SectionHeading>Scientific depth, educational practice, cultural vision</SectionHeading>
            </div>
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="p-6 rounded-2xl bg-ivory border border-navy-900/5"
            >
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <GraduationCap size={24} />
                 </div>
                 <div>
                    <div className="font-semibold text-navy-900">Education Leader</div>
                    <div className="text-xs text-navy-800/50 uppercase font-bold tracking-tighter">Impact at Scale</div>
                 </div>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-2">
            <BackgroundItem 
              index={0}
              title="Biomedical Engineering" 
              text="Imen trained in biomedical and clinical engineering, developing a strong foundation in science, technology, design and applied problem-solving." 
            />
            <BackgroundItem 
              index={1}
              title="PhD in Condensed Matter Physics, Nanoscience and Complex Systems" 
              text="Doctoral research focused on ionic liquids and biomembrane models, using atomic force microscopy to study membrane properties." 
            />
            <BackgroundItem 
              index={2}
              title="Master in Science Communication" 
              text="Post-PhD specialization at the University of Padua, focusing on translating science into accessible, engaging and meaningful educational experiences." 
            />
            <BackgroundItem 
              index={3}
              title="INFN Educational Project" 
              text="Developed “Manuale dei piccoli ingegneri,” a hands-on physics manual in which children learn physics by designing their own dream home." 
            />
            <BackgroundItem 
              index={4}
              title="ICERI 2025" 
              text="Presented educational research through the paper “Be the Engineer: Learning Physics by Designing Your Own Home” at the International Conference on Education, Research, and Innovation in Seville, Spain." 
            />
            <BackgroundItem 
              index={5}
              title="Founder of ANUAR" 
              text="Volunteer-based organization connecting science, ethics and spirituality for the integral growth of young people." 
            />
          </div>
        </div>
      </section>

      {/* 6. FEATURED PROJECT: ANUAR */}
      <section id="projects" className="py-24 bg-ivory overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-[1px] bg-gold" />
                 <span className="text-navy-900 font-semibold tracking-wider text-xs uppercase">Founder Project</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-navy-900 mb-8 leading-tight">
                ANUAR — Science, Ethics and Spirituality for the Growth of Young People
              </h2>
              <p className="text-navy-800/80 leading-relaxed text-lg mb-8">
                ANUAR is an educational and cultural organization founded by Imen Boujmil. Its mission is to create a physical and virtual space where young people can grow through science, ethics, spirituality, creativity and responsibility.
              </p>
              <p className="text-navy-800/80 leading-relaxed text-lg mb-10 italic">
                “How can we educate young people not only to know more, but to become more responsible, creative and human?”
              </p>

              <div className="mb-10">
                <a 
                  href="https://anuar-delta.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-gold font-semibold border-b border-gold/30 pb-1 hover:border-gold transition-all group"
                >
                  Visit ANUAR Website <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-navy-900/5 group hover:-translate-y-1 transition-all">
                  <div className="text-gold mb-3 group-hover:scale-110 transition-transform"><Microscope size={24} /></div>
                  <div className="font-semibold text-navy-900">Science</div>
                  <div className="text-xs text-navy-800/60 uppercase font-bold tracking-tight mt-1">Discovery</div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-navy-900/5 group hover:-translate-y-1 transition-all">
                  <div className="text-gold mb-3 group-hover:scale-110 transition-transform"><Compass size={24} /></div>
                  <div className="font-semibold text-navy-900">Ethics</div>
                  <div className="text-xs text-navy-800/60 uppercase font-bold tracking-tight mt-1">Direction</div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-navy-900/5 group hover:-translate-y-1 transition-all">
                  <div className="text-gold mb-3 group-hover:scale-110 transition-transform"><Sparkles size={24} /></div>
                  <div className="font-semibold text-navy-900">Spirituality</div>
                  <div className="text-xs text-navy-800/60 uppercase font-bold tracking-tight mt-1">Meaning</div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="order-1 md:order-2 relative group">
             <div className="aspect-square rounded-full border-[1.5px] border-gold/20 absolute -inset-8 animate-pulse" />
             <div className="aspect-square rounded-full border border-navy-900/5 absolute -inset-16" />
             <div className="relative z-10 aspect-square rounded-[3rem] overflow-hidden bg-navy-950 flex items-center justify-center p-16 shadow-2xl">
                <motion.div
                   animate={{ 
                     rotate: [0, 360],
                     scale: [1, 1.05, 1]
                   }}
                   transition={{ 
                     rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                     scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                   }}
                   className="absolute inset-0 opacity-10"
                >
                  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
                    <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" strokeDasharray="1 3" />
                  </svg>
                </motion.div>
                <div className="text-center relative">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1jbEXSF3oIRcyamMJAfamiYqPgfiEua59" 
                    alt="ANUAR Logo" 
                    className="w-48 h-48 md:w-64 md:h-64 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. FEATURED PROJECT: MANUALE DEI PICCOLI INGEGNERI */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-navy-900/5 bg-white p-4">
                <img 
                  src="https://lh3.googleusercontent.com/d/1oqFjpxIJeIUntcTxNhR_oXMDu18iXJbC" 
                  alt="Manuale dei piccoli ingegneri - Physics educational manual" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-blue/5 rounded-full -z-10" />
            </motion.div>
            <div>
              <SectionHeading>Learning physics by designing a dream home</SectionHeading>
              <p className="text-navy-800/80 leading-relaxed text-lg mb-8">
                “Manuale dei piccoli ingegneri” is a hands-on educational manual developed during an internship at INFN – Legnaro National Laboratories. The project helps children and young students learn physics through the familiar metaphor of the home.
              </p>
              <p className="text-navy-800/80 leading-relaxed text-lg mb-10">
                Students imagine, design and build their dream house step by step. Each part of the house becomes an opportunity to explore a physics concept: from thermal insulation in walls to electrical circuits in lighting.
              </p>
              <ul className="space-y-4">
                {[
                  "Electrical circuits through lighting",
                  "Thermal insulation through walls and heating",
                  "Water pressure through plumbing",
                  "Sustainability through energy systems"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-navy-900 font-medium">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                      <ChevronRight size={14} strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. POSSIBLE CONTRIBUTION TO nAItive TRACKS */}
      <section className="py-24 bg-navy-950 text-ivory overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center max-w-2xl mx-auto"
          >
            <SectionHeading light>Possible contribution within nAItive</SectionHeading>
            <p className="text-ivory/50">Strategic alignment across the program's core tracks</p>
          </motion.div>
          
          <div className="space-y-4">
            {[
              { 
                tag: "Human Track", 
                title: "Ethics & Reflection", 
                text: "Critical thinking, ethical reflection, communication, purpose, responsibility, and building with human needs in mind." 
              },
              { 
                tag: "Venture Track", 
                title: "Strategy & Narrative", 
                text: "Supporting founders in clarifying their problem, shaping their narrative, and communicating their value proposition." 
              },
              { 
                tag: "Domain Mentorship", 
                title: "Education & Science", 
                text: "Specialized support for founders in education, science communication, youth products, AI for learning, or social innovation." 
              }
            ].map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group p-10 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-gold/30 transition-all flex flex-col md:flex-row md:items-center gap-8"
              >
                <div className="w-32 shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold py-1 px-3 border border-gold/30 rounded-lg whitespace-nowrap">
                    {block.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-ivory group-hover:text-gold transition-colors">{block.title}</h3>
                  <p className="text-ivory/60 text-lg leading-relaxed">{block.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TOPICS IMEN CAN MENTOR ON */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading>Mentoring topics</SectionHeading>
          <div className="flex flex-wrap gap-4 mt-12">
            {[
              "Science storytelling", "Communicating complex ideas", "AI and education", "Human-centered innovation",
              "Ethical AI", "Youth-centered products", "Learning experience design", "Purpose-driven entrepreneurship",
              "Diversity in science", "From research to public impact", "Critical thinking for founders", "Social impact communication"
            ].map((topic, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 rounded-full bg-ivory border border-navy-900/5 text-navy-800 text-sm font-medium hover:border-gold hover:text-gold transition-all select-none"
              >
                {topic}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PERSONAL NOTE */}
      <section className="py-24 bg-ivory border-t border-navy-900/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
             <Lightbulb size={24} className="text-gold" />
          </div>
          <SectionHeading>Why this matters to me</SectionHeading>
          <p className="text-2xl text-navy-800/80 font-light leading-relaxed mb-8 text-balance">
            I believe that the future of innovation cannot be built on technical progress alone. We need founders who can think deeply, communicate clearly and act responsibly.
          </p>
          <p className="text-lg text-navy-800/60 leading-relaxed">
            Science and technology give us powerful tools. But tools need direction. My work is dedicated to helping young people and innovators connect knowledge with meaning, creativity with responsibility, and ambition with service.
          </p>
        </div>
      </section>

      {/* 11. CALL TO ACTION */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-navy-900 rounded-[3rem] p-12 md:p-20 text-center text-ivory relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <SectionHeading light>Let’s explore how I can contribute</SectionHeading>
              <p className="text-xl text-ivory/70 max-w-2xl mx-auto mb-12">
                I would be happy to contribute to nAItive as part of the mentor pool, especially where founders need support in science communication, human-centered innovation, or purpose-driven venture building.
              </p>
              
              <div className="flex flex-col items-center justify-center gap-4 mb-12">
                <span className="text-ivory/40 text-xs font-bold uppercase tracking-widest">Direct Email</span>
                <a 
                  href="mailto:imen.boujmil.1996@gmail.com" 
                  className="text-2xl md:text-4xl font-display font-medium text-gold hover:text-gold-light transition-colors break-all underline decoration-gold/30 underline-offset-8"
                >
                  imen.boujmil.1996@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col items-center gap-4 text-ivory/50">
                 <div className="flex items-center gap-6">
                    <a href="https://www.linkedin.com/in/imen-boujmil-10b910115/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-2">
                       <Linkedin size={20} /> <span className="text-sm font-medium">LinkedIn Profile</span>
                    </a>
                 </div>
                 <p className="text-xs tracking-widest font-semibold uppercase">Padua · Rome · Dublin</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="py-12 border-t border-navy-900/5 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-navy-900 flex items-center justify-center">
              <span className="text-gold text-[8px] font-bold">IB</span>
            </div>
            <p className="text-sm font-medium text-navy-800">
               Imen Boujmil — Biomedical Engineer · PhD in Condensed Matter Physics, Nanoscience and Complex Systems · Science Communicator · Founder of ANUAR
            </p>
          </div>
          <p className="text-navy-800/40 text-xs font-semibold uppercase tracking-widest">
            © {new Date().getFullYear()} — nAItive Mentor Portfolio
          </p>
        </div>
      </footer>
    </div>
  );
}

