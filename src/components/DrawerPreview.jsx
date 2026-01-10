// DrawerPreview.jsx
import { useState, useEffect } from 'react'; // Keep hooks
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

// Correct aspect ratio for 320x240 (4:3)
const IMAGE_ASPECT_RATIO_CLASS = 'aspect-[1/0.75]';

const IMAGE_SIZES = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

// Helper function that is *not* time-sensitive
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
  // NEW: State to hold the result of the time-sensitive calculation.
  // We initialize it to `false` (the server's default/safe assumption).
  const [isRecent, setIsRecent] = useState(false);

  // 1. ESLint Fix: Defer the calculation, not just the flag setting.
  // The effect now has a meaningful purpose: calculating a value based
  // on a runtime variable (the current time).
  useEffect(() => {
    // Only run the time-sensitive check on the client
    setIsRecent(calculateIfRecent(released));

    // ESLint is now happy because the purpose of the effect is to sync
    // the state (`isRecent`) with an external/runtime value (current time).
  }, [released]); // Recalculate if the released date prop changes

  // Truncate the description for the card view
  const truncatedDescription =
    description.split(' ').slice(0, 20).join(' ') +
    (description.split(' ').length > 20 ? '...' : '');

  // Limit the number of icons shown on the card
  const previewIcons = icons.slice(0, 5); // Show first 5 icons for preview

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div
          role='button'
          tabIndex={0} // Makes the div focusable like a button
          className='
            group w-full block text-left focus:outline-none 
            rounded-xl border bg-card shadow-lg hover:shadow-xl 
            transition-all duration-300 overflow-hidden cursor-pointer
          '
          aria-label={`Open details for ${name}`}
        >
          {/* 1. Image Area (Corrected Aspect Ratio) */}
          <div
            className={`relative w-full overflow-hidden ${IMAGE_ASPECT_RATIO_CLASS}`}
          >
            {/* Badges - uses the state `isRecent` */}
            {status === 'working' ? (
              <ProgressBadge label='In Progress' />
            ) : null}
            {/* Renders 'New' only after client-side calculation */}
            {isRecent && status !== 'working' ? (
              <ProgressBadge label='New' />
            ) : null}

            <Image
              src={imgUrl}
              alt={name}
              fill
              sizes={IMAGE_SIZES}
              className='
                object-cover transition-transform duration-500 
                group-hover:scale-[1.05]
              '
            />

            {/* Subtle overlay for a premium look */}
            <div
              className='pointer-events-none absolute inset-0 
              bg-linear-to-t from-black/20 to-transparent'
            />
          </div>

          {/* 2. Text and Icon Content Area */}
          <div className='p-4'>
            {/* Project Name */}
            <h3 className='text-xl font-semibold text-foreground mb-1 line-clamp-1'>
              {name}
            </h3>

            {/* Description Preview */}
            <p className='text-sm text-muted-foreground line-clamp-2'>
              {truncatedDescription}
            </p>

            {/* Tech icons preview */}
            {icons?.length ? (
              <div className='mt-3 flex flex-row flex-wrap gap-2'>
                {previewIcons.map((icon, index) => (
                  <Image
                    key={`${name}-preview-icon-${index}`}
                    src={icon}
                    alt='Tech icon'
                    width={20}
                    height={20}
                    className='opacity-80'
                  />
                ))}
                {icons.length > previewIcons.length && (
                  <span className='text-xs text-muted-foreground self-center'>
                    +{icons.length - previewIcons.length} more
                  </span>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </DrawerTrigger>

      {/* Drawer Content remains mostly the same */}
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{name}</DrawerTitle>

          {/* DrawerDescription renders a <p>, so we use asChild to avoid nesting issues */}
          <DrawerDescription asChild>
            <div className='my-2 text-sm text-zinc-700 leading-relaxed'>
              {description}
            </div>
          </DrawerDescription>
        </DrawerHeader>

        <DrawerFooter>
          {/* Tech icons - full list */}
          {icons?.length ? (
            <div className='my-2 flex flex-row flex-wrap justify-center gap-2'>
              {icons.map((icon, index) => (
                <div
                  key={`${name}-icon-${index}`}
                  className='rounded-lg border bg-background p-2 shadow-sm'
                >
                  <Image
                    src={icon}
                    alt='Tech icon'
                    width={28}
                    height={28}
                    className='opacity-90'
                  />
                </div>
              ))}
            </div>
          ) : null}

          {/* Link button */}
          <Link href={url} target='_blank' className='mt-6 flex justify-center'>
            <Button className='gap-2'>
              リンク <FaCircleArrowRight />
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
