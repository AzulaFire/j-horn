'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';

export default function Engineer() {
  return (
    <div>
      <Card className='relative overflow-hidden bg-card/80 backdrop-blur'>
        {/* Soft background accent */}
        <div className='absolute inset-0 opacity-[0.05] bg-linear-to-br from-primary to-transparent' />

        <div className='relative grid gap-12 md:grid-cols-2 p-10'>
          {/* LEFT: Engineer Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex flex-col items-center md:items-start text-center md:text-left'
          >
            {/* Profile Image */}
            <div className='relative h-40 w-40 mb-6 rounded-full overflow-hidden shadow-lg'>
              <Image
                src='/profile.png'
                alt='Christopher Stacks'
                fill
                className='object-cover'
                priority
              />
            </div>

            {/* Identity */}
            <h3 className='text-2xl font-semibold'>Christopher Stacks</h3>
            <p className='mt-2 text-sm text-muted-foreground max-w-md'>
              Senior DevOps Cloud Engineer @ BCU · U.S. Navy Veteran · FedRAMP ·
              RHCE · CEH
            </p>

            <p className='mt-4 text-sm text-muted-foreground'>
              Kane County, Illinois, United States
            </p>

            {/* Links */}
            <div className='mt-6 flex gap-6 text-sm font-medium'>
              <Link
                href='https://www.linkedin.com/in/stackattack'
                className='hover:text-primary transition'
              >
                LinkedIn
              </Link>
              <Link href='/profile' className='hover:text-primary transition'>
                Portfolio
              </Link>
              <Link
                href='https://www.github.com/stacksc/goat'
                className='hover:text-primary transition'
              >
                GitHub
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: Certifications */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='grid grid-cols-2 gap-6 items-center'
          >
            {/* Cert 1 — Tall card */}
            <div className='relative h-56 rounded-xl overflow-hidden shadow-md'>
              <Image
                src='/redhat.jpg'
                alt='Red Hat Certified Engineer'
                fill
                className='object-contain bg-background p-4'
              />
            </div>

            {/* Cert 2 — Square */}
            <div className='relative h-40 rounded-2xl overflow-hidden shadow-md'>
              <Image
                src='/oracle.png'
                alt='Oracle Certified Professional'
                fill
                className='object-contain bg-background p-4'
              />
            </div>

            {/* Cert 3 — Wide */}
            <div className='relative col-span-2 h-32 rounded-lg overflow-hidden shadow-md'>
              <Image
                src='/lpic.png'
                alt='Linux Engineer'
                fill
                className='object-contain bg-background p-4'
              />
            </div>
          </motion.div>
        </div>
      </Card>
    </div>
  );
}
