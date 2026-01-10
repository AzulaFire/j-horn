import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import { jobs } from '@/data/siteData';

export const metadata = {
  title: 'Profile | John Horn Jr.',
  description:
    'Professional profile of John Horn Jr., a frontend-focused developer with strengths in UI/UX, automation, and modern web development.',
};

function formatYM(ym) {
  if (!ym) return '';
  const [y, m] = ym.split('-').map(Number);
  if (!y || !m) return ym;

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
  if (!start && !end) return '';
  if (start && end) return `${start} – ${end}`;
  return start || end;
}

export default function ProfilePage() {
  const sortedJobs = [...jobs].sort((a, b) => {
    const aKey = a.startDate || '';
    const bKey = b.startDate || '';
    return bKey.localeCompare(aKey); // newest first
  });

  return (
    <main className='min-h-screen bg-background'>
      <section className='mx-auto max-w-7xl px-6 py-20'>
        {/* Header */}
        <header className='mb-12 flex flex-col items-center text-center'>
          <div className='relative mb-6 h-36 w-36 overflow-hidden rounded-full shadow-lg'>
            <Image
              src='/images/john.png'
              alt='John Horn Jr.'
              fill
              className='object-cover'
              priority
            />
          </div>

          <h1 className='text-3xl font-semibold tracking-tight sm:text-4xl'>
            John Horn Jr.
          </h1>

          <p className='mt-3 max-w-3xl text-muted-foreground'>
            Frontend Developer · UI/UX + Visual Design · Automation (Python /
            VBA) · Web + Desktop + Mobile (Flutter)
          </p>

          <p className='mt-2 text-sm text-muted-foreground'>
            Sapporo, Japan (Remote-friendly)
          </p>

          <div className='mt-4 flex flex-wrap justify-center gap-2'>
            <Link
              href='https://www.linkedin.com/in/johnhornjr/?originalSubdomain=jp'
              target='_blank'
            >
              <Badge variant='secondary'>LinkedIn</Badge>
            </Link>

            {/* Optional: add GitHub if/when you want */}
            {/* <Link href="https://github.com/YOUR_GITHUB" target="_blank">
              <Badge variant="secondary">GitHub</Badge>
            </Link> */}
          </div>
        </header>

        {/* Contact Info */}
        <Card className='mb-10'>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent className='space-y-2 text-muted-foreground'>
            <p>
              Based in Sapporo, Japan · Available for contract and remote roles
            </p>

            {/* ✅ Put your real email here if you want it public */}
            {/* <p>
              Email:{' '}
              <a
                href="mailto:you@example.com"
                className="font-medium text-primary underline underline-offset-4"
              >
                you@example.com
              </a>
            </p> */}
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className='mb-10'>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4 text-muted-foreground leading-relaxed'>
            <p>
              I’m a frontend-focused developer specializing in
              <strong> modern web interfaces</strong>,{' '}
              <strong>UI/UX design</strong>, and
              <strong> practical automation</strong>. I build clean, intuitive
              experiences backed by reliable, maintainable code.
            </p>

            <p>
              My background spans <strong>web</strong>, <strong>desktop</strong>
              , and
              <strong> mobile</strong> projects—working with frameworks like
              React, Next.js, Vue, and Angular, and supporting systems with APIs
              and SQL when needed.
            </p>

            <p>
              I also build workflow-saving tools using Python (including
              Selenium) and VBA, and I bring a strong visual foundation from
              design, Photoshop, and photography.
            </p>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className='mb-10'>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent className='space-y-8'>
            {sortedJobs.map((job) => (
              <Experience
                key={`${job.title}-${job.startDate}-${job.endDate}`}
                company={job.title}
                title={`${job.employmentType || 'Role'} · ${
                  job.location || ''
                }`.trim()}
                dates={formatDates(job.startDate, job.endDate)}
                points={job.responsibilities || []}
                tech={job.technologies || []}
              />
            ))}
          </CardContent>
        </Card>

        {/* Skills */}
        <div className='grid gap-8 md:grid-cols-2'>
          <Card>
            <CardHeader>
              <CardTitle>Focus Areas</CardTitle>
            </CardHeader>
            <CardContent className='text-muted-foreground space-y-2'>
              <p>Frontend Engineering (React / Next.js / Vue / Angular)</p>
              <p>UI/UX + Visual Design (Figma, Photoshop, photography)</p>
              <p>Automation & Tooling (Python, Selenium, VBA)</p>
              <p>Desktop + Web Apps (.NET / VB.NET / C#)</p>
              <p>APIs + SQL (practical backend support)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Skills</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-wrap gap-2'>
              {[
                'Next.js',
                'React',
                'Vue',
                'Angular',
                'TailwindCSS',
                'UI/UX',
                'Python',
                'Automation',
                'VBA',
                'C# / VB.NET',
                'SQL',
              ].map((skill) => (
                <Badge key={skill} variant='secondary'>
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Optional: Certifications/Awards */}
        <Card className='mt-10'>
          <CardHeader>
            <CardTitle>Highlights</CardTitle>
          </CardHeader>
          <CardContent className='space-y-3 text-muted-foreground'>
            <p>
              Frontend-heavy delivery across enterprise systems and migrations
            </p>
            <Separator />
            <p>
              Automation tooling to reduce manual work and improve QA
              consistency
            </p>
            <Separator />
            <p>
              Design-first approach with strong UI polish and usability focus
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

/* --------------------------------
   Helper Component
--------------------------------- */

function Experience({ company, title, dates, points, tech }) {
  return (
    <div>
      <h3 className='text-lg font-semibold text-foreground'>{company}</h3>
      <p className='text-sm text-muted-foreground'>
        {title}
        {dates ? ` · ${dates}` : ''}
      </p>

      {tech?.length ? (
        <div className='mt-3 flex flex-wrap gap-2'>
          {tech.slice(0, 10).map((t) => (
            <Badge key={t} variant='secondary'>
              {t}
            </Badge>
          ))}
        </div>
      ) : null}

      <ul className='mt-3 list-disc space-y-2 pl-5 text-muted-foreground'>
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
