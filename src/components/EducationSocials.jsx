// EducationSocials.jsx
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, Anchor, ExternalLink } from 'lucide-react';

export default function EducationSocials() {
  return (
    <div className='grid gap-6 md:grid-cols-2'>
      {/* Education */}
      <Card className='rounded-2xl'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <GraduationCap className='h-5 w-5' />
            Education
          </CardTitle>
        </CardHeader>

        <CardContent className='space-y-4 text-muted-foreground'>
          <div>
            <p className='font-medium text-foreground'>
              University of Phoenix — Arizona
            </p>
            <p className='text-sm'>BSB/Mkt, Marketing · 2003—2006</p>
          </div>

          <Separator />

          <div>
            <p className='font-medium text-foreground'>
              Multimedia Institute — California
            </p>
            <p className='text-sm'>
              Certificate, Web/Graphic Design · 2001—2002
            </p>
          </div>

          <Separator />

          <div className='rounded-xl border bg-card/50 p-4'>
            <p className='flex items-center gap-2 font-medium text-foreground'>
              <Anchor className='h-4 w-4' />
              U.S. Navy
            </p>
            <p className='mt-1 text-sm text-muted-foreground'>
              Honorable Discharge · Radioman (communications)
            </p>
            <div className='mt-3 flex flex-wrap gap-2'>
              <Badge variant='secondary'>Discipline</Badge>
              <Badge variant='secondary'>Systems mindset</Badge>
              <Badge variant='secondary'>Mission-focused</Badge>
            </div>
          </div>

          <p className='text-xs text-muted-foreground'>
            Ongoing learning through Udemy and other platforms (web development,
            UI/UX, automation).
          </p>
        </CardContent>
      </Card>

      {/* Socials */}
      <Card className='rounded-2xl'>
        <CardHeader>
          <CardTitle>Socials</CardTitle>
        </CardHeader>

        <CardContent className='space-y-4'>
          <p className='text-sm text-muted-foreground'>
            Links to my code, projects, and professional background.
          </p>

          <div className='grid gap-3'>
            <Link
              href='https://github.com/AzulaFire'
              target='_blank'
              className='group flex items-center justify-between rounded-xl border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-sm'
            >
              <div className='flex items-center gap-3'>
                <Badge variant='secondary'>GitHub</Badge>
                <span className='text-sm font-medium text-foreground'>
                  github.com/AzulaFire
                </span>
              </div>
              <ExternalLink className='h-4 w-4 text-muted-foreground transition group-hover:text-foreground' />
            </Link>

            <Link
              href='https://www.linkedin.com/in/johnhornjr'
              target='_blank'
              className='group flex items-center justify-between rounded-xl border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-sm'
            >
              <div className='flex items-center gap-3'>
                <Badge variant='secondary'>LinkedIn</Badge>
                <span className='text-sm font-medium text-foreground'>
                  linkedin.com/in/johnhornjr
                </span>
              </div>
              <ExternalLink className='h-4 w-4 text-muted-foreground transition group-hover:text-foreground' />
            </Link>
          </div>

          <div className='rounded-xl border bg-card/50 p-4'>
            <p className='text-sm font-medium text-foreground'>Quick note</p>
            <p className='mt-1 text-sm text-muted-foreground'>
              If you’d like a short walkthrough of any project or want a custom
              web build, feel free to reach out via LinkedIn.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
