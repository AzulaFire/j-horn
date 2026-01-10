import Link from 'next/link';
import { Github, Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='border-t border-border bg-background/80'>
      <div className='mx-auto max-w-7xl px-6 py-12'>
        <div className='grid gap-8 md:grid-cols-3'>
          {/* Identity */}
          <div>
            <h3 className='text-sm font-semibold'>John Horn Jr.</h3>
            <p className='mt-2 text-sm text-muted-foreground'>
              Software Engineer
              <br />
              Frontend • Automation • Design
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className='text-sm font-semibold'>Navigation</h4>
            <ul className='mt-3 space-y-2 text-sm text-muted-foreground'>
              <li>
                <Link href='/' className='hover:text-foreground transition'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/projects'
                  className='hover:text-foreground transition'
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href='/profile'
                  className='hover:text-foreground transition'
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-foreground transition'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className='text-sm font-semibold'>Connect</h4>
            <div className='mt-3 flex items-center gap-4 text-muted-foreground'>
              <Link
                href='https://www.github.com/stacksc/goat'
                aria-label='GitHub'
                className='hover:text-foreground transition'
              >
                <Github className='h-5 w-5' />
              </Link>
              <Link
                href='https://www.linkedin.com/in/stackattack'
                aria-label='LinkedIn'
                className='hover:text-foreground transition'
              >
                <Linkedin className='h-5 w-5' />
              </Link>
              <Link
                href='mailto:centerupt@gmail.com'
                aria-label='Email'
                className='hover:text-foreground transition'
              >
                <Mail className='h-5 w-5' />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-10 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between'>
          <span>
            © {new Date().getFullYear()} John Horn Jr. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
