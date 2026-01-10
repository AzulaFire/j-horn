'use client';

import { useMemo, useState } from 'react';
import DrawerPreview from '@/components/DrawerPreview';
import { projects } from '@/data/siteData';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

export default function Home() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all'); // all | completed | working
  const [sort, setSort] = useState('newest'); // newest | oldest | name

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = [...projects];

    if (status !== 'all') {
      list = list.filter((p) => (p.status || '').toLowerCase() === status);
    }

    if (q) {
      list = list.filter((p) => {
        const name = (p.name || '').toLowerCase();
        const desc = (p.description || '').toLowerCase();
        return name.includes(q) || desc.includes(q);
      });
    }

    list.sort((a, b) => {
      if (sort === 'name') return (a.name || '').localeCompare(b.name || '');
      const at = new Date(a.released).getTime();
      const bt = new Date(b.released).getTime();
      return sort === 'oldest' ? at - bt : bt - at;
    });

    return list;
  }, [query, status, sort]);

  const totalCount = projects.length;
  const showingCount = filteredProjects.length;

  return (
    <main className='min-h-screen bg-background'>
      {/* Hero + Controls */}
      <section className='mx-auto max-w-7xl px-6 pt-10 pb-6'>
        <div className='rounded-2xl border bg-card p-6 shadow-sm sm:p-10'>
          <p className='mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground'>
            A curated selection of web projects demonstrating modern frontend
            development, UI/UX design, and practical problem-solving.
          </p>

          {/* Controls */}
          <div className='mt-6 grid gap-3 sm:grid-cols-3'>
            {/* Search */}
            <div className='sm:col-span-2'>
              <Label htmlFor='search' className='sr-only'>
                Search projects
              </Label>
              <Input
                id='search'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search projects (e.g., Next.js, Kanban, OCR, Japanese...)'
                className='h-11 w-full rounded-xl'
              />
            </div>

            {/* Filters */}
            <div className='grid grid-cols-2 gap-3 sm:col-span-1'>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className='w-full rounded-xl'>
                  <SelectValue placeholder='Status' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>All</SelectItem>
                  <SelectItem value='completed'>Completed</SelectItem>
                  <SelectItem value='working'>Working</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className='w-full rounded-xl'>
                  <SelectValue placeholder='Sort' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='newest'>Newest</SelectItem>
                  <SelectItem value='oldest'>Oldest</SelectItem>
                  <SelectItem value='name'>Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <p className='mt-4 text-sm text-muted-foreground'>
            Showing{' '}
            <span className='font-medium text-foreground'>{showingCount}</span>{' '}
            of <span className='font-medium text-foreground'>{totalCount}</span>{' '}
            projects
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className='mx-auto max-w-7xl px-6 pb-16'>
        <div className='mx-auto grid w-full grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {filteredProjects.map((project) => (
            <DrawerPreview key={project.id} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className='mt-10 rounded-2xl border bg-card p-10 text-center text-muted-foreground'>
            No projects match your search/filter.
          </div>
        ) : null}
      </section>
    </main>
  );
}
