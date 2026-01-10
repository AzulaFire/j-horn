'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ChevronDown,
  Layout,
  Palette,
  Zap,
  Monitor,
  Database,
} from 'lucide-react';
import Link from 'next/link';

/**
 * Icon bullet helper
 */
function IconBullet({ icon: Icon, children }) {
  return (
    <div className='flex items-start gap-3'>
      <Icon className='mt-1 h-5 w-5 text-primary/80 shrink-0' />
      <span>{children}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className='relative overflow-hidden border-b border-border'>
      {/* Subtle grid background */}
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.04]'
        style={{
          backgroundImage:
            'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Hero content */}
      <div className='relative mx-auto max-w-7xl px-6 py-10'>
        <div className='grid items-center gap-16 lg:grid-cols-2'>
          {/* LEFT: Logo + Title */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Logo */}
            <div className='mb-10 flex justify-center'>
              <div className='relative h-48 w-48 sm:h-56 sm:w-56'>
                <Image
                  src='/images/john.png'
                  alt='John Horn Jr.'
                  fill
                  priority
                  className='object-contain'
                />
              </div>
            </div>

            <h1 className='mb-6 text-4xl font-bold tracking-tight sm:text-5xl'>
              John Horn Jr.
            </h1>

            <p className='max-w-xl text-lg leading-relaxed text-muted-foreground'>
              Frontend-focused developer blending UI/UX design, automation, and
              modern web technologies to build clean, intuitive software.
            </p>

            {/* CTAs */}
            <div className='mt-10 flex flex-wrap gap-4'>
              <Link href='/profile'>
                <Button size='lg'>
                  Learn More
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </Link>
              <Link href='/projects'>
                <Button size='lg' variant='outline'>
                  Projects
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: Card with watermark */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <Card className='relative overflow-hidden bg-card/80 backdrop-blur'>
              {/* Watermark logo */}
              <div className='pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]'>
                <Image
                  src='/images/code.png'
                  alt=''
                  width={420}
                  height={420}
                  className='object-contain'
                />
              </div>

              <div className='relative space-y-2 p-10 text-muted-foreground leading-relaxed'>
                <p>
                  John Horn Jr. is a frontend-focused developer specializing in
                  <strong> modern web interfaces</strong>,{' '}
                  <strong>UI/UX design</strong>, and
                  <strong> practical automation</strong>. He builds clean,
                  intuitive experiences backed by reliable, well-structured
                  code.
                </p>

                <p>
                  With over <strong>20 years of experience</strong>, he has
                  worked across web, desktop, and mobile platforms—blending
                  design sensibility with hands-on engineering to create usable,
                  maintainable software.
                </p>

                <div className='space-y-3'>
                  <IconBullet icon={Layout}>
                    Frontend development with React, Next.js, Vue, and Angular
                  </IconBullet>

                  <IconBullet icon={Palette}>
                    UI/UX design with a visual background in Figma, Photoshop,
                    layout, and photography
                  </IconBullet>

                  <IconBullet icon={Zap}>
                    Automation and tooling using Python, Selenium, and VBA
                  </IconBullet>

                  <IconBullet icon={Monitor}>
                    Desktop and web application development using C#, VB.NET,
                    and Python
                  </IconBullet>

                  <IconBullet icon={Database}>
                    API integration and data-driven applications using SQL and
                    REST services
                  </IconBullet>
                </div>

                {/* <p className='pt-4 font-medium text-foreground'>
                  Currently focused on frontend-heavy applications, internal
                  tools, and product-oriented interfaces where design,
                  usability, and efficiency matter most.
                </p> */}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className='mt-20 flex justify-center'
        >
          <div className='flex flex-col items-center gap-2 text-muted-foreground'>
            <span className='text-xs uppercase tracking-wide'>Scroll</span>
            <ChevronDown className='h-5 w-5 animate-bounce' />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
