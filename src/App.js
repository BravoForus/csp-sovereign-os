import React from 'react';
import { Shield, Globe, Cpu, Activity } from 'lucide-react';

const Nav = () => (
  <nav className='flex items-center justify-between p-6 bg-[#0D47A1] text-white'>
    <div className='text-2xl font-bold tracking-tighter'>CSP SOVEREIGN</div>
    <button className='bg-white text-[#0D47A1] px-6 py-2 rounded-full font-bold text-sm'>Access VDR</button>
  </nav>
);

const Hero = () => (
  <div className='bg-[#0D47A1] text-white py-20 px-6 text-center'>
    <h1 className='text-4xl md:text-6xl font-bold mb-6'>National Health <span className='text-blue-300 font-light italic'>Sovereignty.</span></h1>
    <p className='text-lg max-w-2xl mx-auto mb-10 text-blue-100'>The Digital Operating System for Government Procurement and Patient-Centric Integrity.</p>
    <div className='flex flex-col gap-4 justify-center items-center'>
      <button className='bg-blue-500 w-full max-w-xs py-4 rounded-lg text-lg font-bold shadow-lg'>Deploy OS</button>
      <button className='border border-blue-300 w-full max-w-xs py-4 rounded-lg text-lg font-bold'>Case Study: Uganda</button>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className='bg-white p-8 rounded-2xl border border-gray-100 shadow-sm'>
    <Icon className='w-12 h-12 text-blue-600 mb-6' />
    <h3 className='text-xl font-bold mb-4'>{title}</h3>
    <p className='text-gray-600 text-sm leading-relaxed'>{desc}</p>
  </div>
);

export default function App() {
  return (
    <div className='min-h-screen bg-slate-50 font-sans text-slate-900'>
      <Nav />
      <Hero />
      <div className='max-w-6xl mx-auto px-6 -mt-10 mb-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <FeatureCard icon={Shield} title='Neon Ledger' desc='Immutable data residency. Ensuring national health data stays within sovereign borders.' />
          <FeatureCard icon={Cpu} title='Specific.dev AI' desc='Automated technical matching reducing procurement drift by 93%.' />
          <FeatureCard icon={Globe} title='Global EDI' desc='Direct manufacturer integration bypassing 40% middleman markup.' />
        </div>
      </div>
      <div className='bg-white py-16 px-6 border-t border-gray-100'>
        <div className='max-w-4xl mx-auto text-center'>
          <Activity className='w-12 h-12 text-blue-600 mx-auto mb-6' />
          <h2 className='text-3xl font-bold mb-4'>$2.07M Uganda Pilot</h2>
          <p className='text-gray-600'>Our infrastructure is live and proven. Join the 24 nations scaling the Sovereign OS by 2028.</p>
        </div>
      </div>
      <footer className='bg-slate-900 text-slate-400 p-12 text-center text-xs'>
        © 2026 CSP Holdings International. FIPS 140-2 Compliant Data Infrastructure.
      </footer>
    </div>
  );
}
