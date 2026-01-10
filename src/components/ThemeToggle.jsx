'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true); // default
  const [mounted, setMounted] = useState(false);

  /* ------------------------------
     Read theme AFTER mount
  --------------------------------*/
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const dark = stored !== 'light';

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(dark);
    setMounted(true);

    const html = document.documentElement;
    html.classList.toggle('dark', dark);
  }, []);

  /* ------------------------------
     Sync changes
  --------------------------------*/
  useEffect(() => {
    if (!mounted) return;

    const html = document.documentElement;

    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark, mounted]);

  /* ------------------------------
     Prevent hydration mismatch
  --------------------------------*/
  if (!mounted) {
    return <Button variant='ghost' size='icon' disabled aria-hidden />;
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => setIsDark((v) => !v)}
      aria-label='Toggle theme'
    >
      {isDark ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
    </Button>
  );
}
