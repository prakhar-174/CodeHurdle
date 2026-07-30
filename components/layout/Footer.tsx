import React from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';

const Twitter = ({size=20}: {size?: number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Instagram = ({size=20}: {size?: number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const Linkedin = ({size=20}: {size?: number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const Youtube = ({size=20}: {size?: number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;

export function Footer() {
  const socialLinks = [
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ];

  const dsaLinks = [
    { name: 'CodeForces Playlist', href: '#' },
    { name: 'CodeChef Starters', href: '#' },
    { name: 'AtCoder Beginner', href: '#' },
  ];

  return (
    <footer className="border-t-2 border-[var(--border-color)] bg-[var(--canvas)] pt-16 pb-8 transition-colors">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-[var(--ink)] w-max outline-none focus-visible:ring-2 focus-visible:ring-[#2D5BE3] rounded-md">
              <Zap className="text-[#2D5BE3]" size={28} fill="currentColor" />
              <span className="font-display font-extrabold text-2xl tracking-tighter">CodeHurdle</span>
            </Link>
            <p className="text-sm font-bold text-[var(--ink-muted)] leading-relaxed">
              The best place to master DSA and crack top tech interviews.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-[var(--ink)] hover:text-[#2D5BE3] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#2D5BE3] rounded-md p-1 -ml-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-extrabold text-[var(--ink)] uppercase tracking-widest text-sm">Company</h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-bold text-[var(--ink-muted)] hover:text-[#2D5BE3] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#2D5BE3] rounded-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-extrabold text-[var(--ink)] uppercase tracking-widest text-sm">DSA Playlists</h3>
            <ul className="flex flex-col gap-3">
              {dsaLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-bold text-[var(--ink-muted)] hover:text-[#2D5BE3] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#2D5BE3] rounded-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Col 4 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-extrabold text-[var(--ink)] uppercase tracking-widest text-sm">Contact</h3>
            <a href="mailto:support@codehurdle.com" className="text-sm text-[var(--ink)] hover:text-[#2D5BE3] transition-colors font-bold outline-none focus-visible:ring-2 focus-visible:ring-[#2D5BE3] rounded-sm w-max">
              support@codehurdle.com
            </a>
            <p className="text-xs font-bold text-[var(--ink)] opacity-50 uppercase tracking-widest">
              Response within 30 minutes
            </p>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t-2 border-[var(--border-color)] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold text-[var(--ink-muted)] uppercase tracking-widest">
          <p>© 2026 CodeHurdle. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[var(--ink)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#2D5BE3] rounded-sm">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--ink)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#2D5BE3] rounded-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
