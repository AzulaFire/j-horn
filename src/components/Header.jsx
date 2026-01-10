'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ThemeToggle';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Profile', href: '/profile' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6'>
        {/* Brand */}
        <Link href='/' className='text-lg font-semibold tracking-tight'>
          John Horn Jr.
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-1'>
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Button
                key={link.href}
                asChild
                variant='ghost'
                className={`text-sm transition-colors ${
                  active
                    ? 'bg-muted text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className='flex items-center gap-2'>
          <ThemeToggle />

          {/* Mobile Menu */}
          <div className='md:hidden'>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon' aria-label='Open menu'>
                  <Menu className='h-5 w-5' />
                </Button>
              </SheetTrigger>

              <SheetContent side='right' className='w-72'>
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>

                <nav className='mt-6 flex flex-col gap-2'>
                  {navLinks.map((link) => {
                    const active = isActive(link.href);

                    return (
                      <Button
                        key={link.href}
                        asChild
                        variant='ghost'
                        className={`justify-start text-base transition-colors ${
                          active
                            ? 'bg-muted text-foreground font-medium'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        <Link href={link.href}>{link.label}</Link>
                      </Button>
                    );
                  })}
                </nav>

                <div className='mt-6 border-t border-border pt-4'>
                  <ThemeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
