"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Trophy, Video, DollarSign, Home, BarChart2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { icon: <Home size={20} />, label: 'Home', href: '/' },
    { icon: <Trophy size={20} />, label: 'Rankings', href: '/rankings' },
    { icon: <Video size={20} />, label: 'Highlights', href: '/highlights' },
    { icon: <DollarSign size={20} />, label: 'Betting', href: '/betting' },
    { icon: <BarChart2 size={20} />, label: 'Stats', href: '/stats' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-[#443174]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/flag_logo.PNG" alt="VegasSports" className="h-8 w-auto" />
            <span className="text-white font-semibold hidden sm:block">VegasSports</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? 'active' : ''}`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}