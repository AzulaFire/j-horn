'use client';

import { motion } from 'motion/react';
import {
  SiNextdotjs,
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiFigma,
  SiAdobephotoshop,
  SiPython,
  SiNodedotjs,
  SiDotnet,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiFlutter,
  SiJavascript,
  SiTypescript,
} from 'react-icons/si';
import { Code2, Paintbrush, Database, Cpu } from 'lucide-react';

const toolGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    items: [
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'React', Icon: SiReact },
      { name: 'Vue', Icon: SiVuedotjs },
      { name: 'Angular', Icon: SiAngular },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
    ],
  },
  {
    title: 'Design',
    icon: Paintbrush,
    items: [
      { name: 'Figma', Icon: SiFigma },
      { name: 'Photoshop', Icon: SiAdobephotoshop },
    ],
  },
  {
    title: 'Automation & Runtime',
    icon: Cpu,
    items: [
      { name: 'Python', Icon: SiPython },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: '.NET', Icon: SiDotnet },
      { name: 'Flutter', Icon: SiFlutter },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    items: [
      { name: 'MySQL', Icon: SiMysql },
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'SQLite', Icon: SiSqlite },
    ],
  },
];

function ToolCard({ name, Icon }) {
  return (
    <div className='group relative flex items-center justify-center rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md'>
      <div className='flex flex-col items-center gap-3'>
        <Icon className='h-10 w-10 opacity-80 transition-opacity group-hover:opacity-100' />
        <div className='text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors'>
          {name}
        </div>
      </div>
    </div>
  );
}

export default function ToolWall() {
  return (
    <section className='relative border-t border-border py-20'>
      {/* Subtle background grid */}
      <div
        className='absolute inset-0 opacity-[0.04]'
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className='relative mx-auto max-w-7xl px-6'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <p className='mx-auto max-w-2xl text-muted-foreground'>
            A visual snapshot of the tools I use to design, build, and automate
            modern web applications.
          </p>
        </div>

        {/* Groups */}
        <div className='space-y-10'>
          {toolGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div key={group.title}>
                {/* Group header */}
                <div className='mb-4 flex items-center justify-center gap-2 text-muted-foreground'>
                  <GroupIcon className='h-4 w-4' />
                  <h3 className='text-sm font-semibold tracking-tight text-foreground'>
                    {group.title}
                  </h3>
                </div>

                {/* Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
                >
                  {group.items.map((item) => (
                    <ToolCard key={item.name} {...item} />
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
