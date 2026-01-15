// DrawerPreview.jsx
'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import ProgressBadge from './ProgressBadge';
import { FaCircleArrowRight } from 'react-icons/fa6';

// ✅ Simple Icons (react-icons/si)
import {
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPython,
} from 'react-icons/si';

// Correct aspect ratio for 320x240 (4:3)
const IMAGE_ASPECT_RATIO_CLASS = 'aspect-[1/0.75]';
const IMAGE_SIZES = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

// ✅ Map string keys -> icon components
const ICON_MAP = {
  node: SiNodedotjs,
  react: SiReact,
  nextjs: SiNextdotjs,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  css: SiCss3,
  python: SiPython,
};

// ✅ Optional polish: brand-ish colors per tech (Tailwind classes)
const ICON_COLORS = {
  react: 'text-sky-500',
  node: 'text-green-600',
  nextjs: 'text-black dark:text-white',
  javascript: 'text-yellow-500',
  typescript: 'text-sky-600',
  html: 'text-orange-500',
  css: 'text-blue-500',
  python: 'text-yellow-400',
};

// ✅ Tiny helper: safely render an icon by key
function TechIcon({ iconKey, className = '' }) {
  const Icon = ICON_MAP[iconKey];
  if (!Icon) return null;

  const colorClass = ICON_COLORS[iconKey] ?? 'text-muted-foreground';
  return <Icon className={`${colorClass} ${className}`} aria-hidden='true' />;
}

// Helper function (time-sensitive)
const calculateIfRecent = (dateString) => {
  if (!dateString) return false;

  const now = new Date();
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return false;

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(now.getDate() - 30);

  return date >= thirtyDaysAgo;
};

export default function DrawerPreview({
  name,
  imgUrl,
  description,
  url,
  icons = [],
  released,
  status,
}) {
  const [isRecent, setIsRecent] = useState(false);

  // Only compute "recent" client-side (avoids Date-based SSR issues)
  useEffect(() => {
    setIsRecent(calculateIfRecent(released));
  }, [released]);

  // Avoid recomputing split/join every render
  const truncatedDescription = useMemo(() => {
    const words = (description || '').split(' ');
    const short = words.slice(0, 20).join(' ');
    return short + (words.length > 20 ? '...' : '');
  }, [description]);

  const previewIcons = icons.slice(0, 5);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div
          role='button'
          tabIndex={0}
          // ✅ FIX: no multi-line className strings (prevents \r\n hydration mismatch)
          className='group w-full block text-left focus:outline-none rounded-xl border bg-card shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer'
          aria-label={`Open details for ${name}`}
        >
          {/* 1. Image Area */}
          <div
            className={`relative w-full overflow-hidden ${IMAGE_ASPECT_RATIO_CLASS}`}
          >
            {/* Badges */}
            {status === 'working' ? (
              <ProgressBadge label='In Progress' />
            ) : null}
            {isRecent && status !== 'working' ? (
              <ProgressBadge label='New' />
            ) : null}

            <Image
              src={imgUrl}
              alt={name}
              fill
              sizes={IMAGE_SIZES}
              // ✅ FIX: single-line className
              className='object-cover transition-transform duration-500 group-hover:scale-[1.05]'
            />

            {/* ✅ FIX: single-line className */}
            <div className='pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 to-transparent' />
          </div>

          {/* 2. Text + icon preview */}
          <div className='p-4'>
            <h3 className='text-xl font-semibold text-foreground mb-1 line-clamp-1'>
              {name}
            </h3>

            <p className='text-sm text-muted-foreground line-clamp-2'>
              {truncatedDescription}
            </p>

            {/* Tech icons preview */}
            {icons?.length ? (
              <div className='mt-3 flex flex-row flex-wrap gap-2'>
                {previewIcons.map((iconKey, index) => (
                  <TechIcon
                    key={`${name}-preview-icon-${index}`}
                    iconKey={iconKey}
                    className='h-5 w-5 opacity-90'
                  />
                ))}

                {icons.length > previewIcons.length ? (
                  <span className='text-xs text-muted-foreground self-center'>
                    +{icons.length - previewIcons.length} more
                  </span>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </DrawerTrigger>

      {/* Drawer Content */}
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{name}</DrawerTitle>

          <DrawerDescription asChild>
            <div className='my-2 text-sm text-zinc-700 leading-relaxed'>
              {description}
            </div>
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter>
          {/* Tech icons full list */}
          {icons?.length ? (
            <div className='my-2 flex flex-row flex-wrap justify-center gap-2'>
              {icons.map((iconKey, index) => (
                <div
                  key={`${name}-icon-${index}`}
                  // ✅ FIX: single-line className
                  className='rounded-lg border bg-background p-2 shadow-sm transition-transform duration-200 hover:scale-105'
                  title={iconKey}
                >
                  <TechIcon iconKey={iconKey} className='h-7 w-7 opacity-95' />
                </div>
              ))}
            </div>
          ) : null}

          {/* Link button */}
          <Link href={url} target='_blank' className='mt-6 flex justify-center'>
            <Button className='gap-2'>
              Link
              <FaCircleArrowRight />
            </Button>
          </Link>

          {/* Close button */}
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
