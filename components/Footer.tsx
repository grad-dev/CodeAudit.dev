import React from "react";
import { socialMedia } from "@/data";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-100 bg-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between w-full mb-16 gap-10">
          
          <div className="flex flex-col max-w-sm">
            <h3 className="text-2xl font-black tracking-tighter text-gray-900 mb-4">
              MONK<span className="text-[#0B57D0]">STUDIO</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Premium software development agency specializing in rapidly building, launching, and scaling high-performance MVPs and enterprise solutions.
            </p>
            <div className="flex items-center gap-4">
              {socialMedia.map((social) => (
                <Link 
                  href={social.link} 
                  key={social.id} 
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 hover:border-[#0B57D0] hover:bg-blue-50 hover:shadow-md transition-all group"
                >
                  <img src={social.img} alt="social icon" className="w-5 h-5 opacity-80 brightness-0 group-hover:opacity-100 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-16 md:gap-24 flex-wrap">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-gray-900 mb-2">Company</h4>
              <Link href="/about" className="text-sm text-gray-500 hover:text-[#0B57D0] transition-colors">About Us</Link>
              <Link href="/#portfolio" className="text-sm text-gray-500 hover:text-[#0B57D0] transition-colors">Our Work</Link>
              <Link href="/#testimonials" className="text-sm text-gray-500 hover:text-[#0B57D0] transition-colors">Testimonials</Link>
              <Link href="/process" className="text-sm text-gray-500 hover:text-[#0B57D0] transition-colors">Our Process</Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-[#0B57D0] transition-colors">Contact</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-gray-900 mb-2">Services</h4>
              <span className="text-sm text-gray-500">Web Development</span>
              <span className="text-sm text-gray-500">Mobile Apps</span>
              <span className="text-sm text-gray-500">UI/UX Design</span>
              <span className="text-sm text-gray-500">MVP Strategy</span>
            </div>
          </div>

        </div>

        <div className="w-full border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Monk Studio. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
