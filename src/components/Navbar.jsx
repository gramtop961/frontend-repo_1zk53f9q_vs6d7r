import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 dark:bg-black/20 rounded-2xl border border-white/10 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-500 to-cyan-400 text-white shadow">
                <Rocket size={18} />
              </span>
              <span className="font-semibold tracking-tight text-white text-lg">Switch Media</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:shadow-lg transition-shadow"
              >
                Start a project
              </a>
            </nav>

            <button
              aria-label="Toggle menu"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-white/90 hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-white text-black px-4 py-2 text-sm font-medium"
                >
                  Start a project
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
