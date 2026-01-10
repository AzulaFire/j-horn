'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const careerImages = [
  '/career/oraclelogo.png',
  '/career/vmw.png',
  '/career/redhatlogo.jpg',
  '/career/aws.png',
  '/career/federalreserve.png',
  '/career/navy.png',
  '/career/united.png',
  '/career/uscellular.jpg',
  '/career/jpmorganchase.jpg',
  // add more anytime
];

export default function CareerWall() {
  return (
    <section className='relative py-20 border-t border-border'>
      {/* Subtle background grid */}
      <div
        className='absolute inset-0 opacity-[0.04]'
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className='relative max-w-7xl mx-auto px-6'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <h2 className='text-3xl font-semibold tracking-tight'>
            Career & Platform Experience
          </h2>
          <p className='mt-3 text-muted-foreground max-w-2xl mx-auto'>
            A visual snapshot of organizations, platforms, and programs
            supported throughout a career in cloud engineering, DevOps, and
            public sector technology.
          </p>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'
        >
          {careerImages.map((src, index) => (
            <div
              key={index}
              className='group relative flex items-center justify-center rounded-xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md'
            >
              <div className='relative h-16 w-full opacity-80 transition-opacity group-hover:opacity-100'>
                <Image
                  src={src}
                  alt='Career experience logo'
                  fill
                  className='object-contain'
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
