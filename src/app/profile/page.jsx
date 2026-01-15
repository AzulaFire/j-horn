'use client'; // Required for Framer Motion

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Code2,
  Palette,
  Cpu,
  Database,
  Briefcase,
  GraduationCap,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { jobs } from '@/data/siteData';

// Animation Variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

function formatYM(ym) {
  if (!ym) return '';
  const [y, m] = ym.split('-').map(Number);
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return `${monthNames[m - 1]} ${y}`;
}

function formatDates(startDate, endDate) {
  const start = formatYM(startDate);
  const end = endDate ? formatYM(endDate) : 'Present';
  return start && end ? `${start} – ${end}` : start || end;
}

export default function ProfilePage() {
  const sortedJobs = [...jobs].sort((a, b) =>
    (b.startDate || '').localeCompare(a.startDate || '')
  );

  return (
    <main className='min-h-screen bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-slate-50 via-background to-background dark:from-slate-900'>
      <motion.section
        initial='initial'
        animate='animate'
        variants={staggerContainer}
        className='mx-auto max-w-6xl px-6 py-16 lg:py-24'
      >
        {/* --- HEADER SECTION --- */}
        <motion.header
          variants={fadeIn}
          className='mb-16 flex flex-col items-center text-center'
        >
          <div className='group relative mb-8 h-40 w-40'>
            <div className='absolute -inset-1 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 opacity-25 blur transition duration-1000 group-hover:opacity-50' />
            <div className='relative h-40 w-40 overflow-hidden rounded-full border-4 border-background shadow-2xl'>
              <Image
                src='/images/john.png'
                alt='John Horn Jr.'
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-110'
                priority
              />
            </div>
          </div>

          <h1 className='bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl'>
            John Horn Jr.
          </h1>

          <p className='mt-4 text-xl font-medium text-blue-600 dark:text-blue-400'>
            Frontend Developer & UI/UX Specialist
          </p>

          <div className='mt-6 flex flex-wrap justify-center gap-4 text-muted-foreground'>
            <span className='flex items-center gap-1.5'>
              <MapPin className='h-4 w-4' /> Sapporo, Japan
            </span>
            <span className='flex items-center gap-1.5'>
              <Briefcase className='h-4 w-4' /> Remote Friendly
            </span>
          </div>

          <div className='mt-8 flex gap-3'>
            <Link
              href='https://www.linkedin.com/in/johnhornjr/'
              target='_blank'
            >
              <Badge className='px-4 py-1.5 text-sm gap-2' variant='default'>
                <Linkedin className='h-4 w-4' /> LinkedIn
              </Badge>
            </Link>
            {/* Toggle this when ready */}
            <Link
              href='mailto:jhornjr@gmail.com'
              aria-label='Email'
              className='hover:text-foreground transition'
            >
              <Badge
                className='px-4 py-1.5 text-sm gap-2 cursor-pointer'
                variant='secondary'
              >
                <Mail className='h-4 w-4' /> Contact Me
              </Badge>
            </Link>
          </div>
        </motion.header>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {/* --- LEFT COLUMN: EXPERIENCE --- */}
          <div className='lg:col-span-2 space-y-8'>
            <motion.div variants={fadeIn}>
              <h2 className='mb-6 flex items-center gap-2 text-2xl font-bold'>
                <Briefcase className='h-6 w-6 text-blue-500' /> Work Experience
              </h2>
              <div className='space-y-6'>
                {sortedJobs.map((job, idx) => (
                  <ExperienceCard key={idx} job={job} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: SKILLS & SUMMARY --- */}
          <aside className='space-y-8'>
            <motion.div variants={fadeIn}>
              <Card className='border-none bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur'>
                <CardHeader>
                  <CardTitle className='text-lg'>
                    Professional Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className='text-sm leading-relaxed text-muted-foreground'>
                  I build clean, intuitive experiences backed by reliable code.
                  My background spans
                  <strong> web, desktop, and mobile</strong>, with a heavy focus
                  on UI polish and practical automation to save teams time.
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2 text-lg'>
                    <Cpu className='h-5 w-5 text-blue-500' /> Core Tech
                  </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-wrap gap-2'>
                  {[
                    'Next.js',
                    'React',
                    'Vue',
                    'TailwindCSS',
                    'Python',
                    'C#',
                    'SQL',
                  ].map((s) => (
                    <Badge key={s} variant='outline' className='bg-background'>
                      {s}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2 text-lg'>
                    <Palette className='h-5 w-5 text-purple-500' /> Design &
                    Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-3 text-sm text-muted-foreground'>
                  <div className='flex items-center justify-between'>
                    <span>UI/UX Design</span>
                    <span className='font-mono text-xs text-blue-500'>
                      Figma
                    </span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span>Automation</span>
                    <span className='font-mono text-xs text-blue-500'>
                      Selenium
                    </span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span>Cloud</span>
                    <span className='font-mono text-xs text-blue-500'>AWS</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </aside>
        </div>
      </motion.section>
    </main>
  );
}

function ExperienceCard({ job }) {
  return (
    <Card className='group relative overflow-hidden transition-all hover:shadow-md'>
      <div className='absolute left-0 top-0 h-full w-1 bg-blue-500 opacity-0 transition-opacity group-hover:opacity-100' />
      <CardHeader className='pb-2'>
        <div className='flex flex-col justify-between gap-1 sm:flex-row sm:items-center'>
          <CardTitle className='text-xl font-bold'>{job.title}</CardTitle>
          <span className='text-xs font-semibold uppercase tracking-wider text-blue-500'>
            {formatDates(job.startDate, job.endDate)}
          </span>
        </div>
        <p className='text-sm font-medium text-muted-foreground'>
          {job.employmentType} · {job.location}
        </p>
      </CardHeader>
      <CardContent>
        <div className='mb-4 flex flex-wrap gap-1.5'>
          {job.technologies?.map((t) => (
            <Badge
              key={t}
              variant='secondary'
              className='text-[10px] uppercase font-bold tracking-tight'
            >
              {t}
            </Badge>
          ))}
        </div>
        <ul className='space-y-2 text-sm text-muted-foreground'>
          {job.responsibilities?.slice(0, 5).map((p, i) => (
            <li key={i} className='flex gap-2'>
              <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300' />
              {p}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
