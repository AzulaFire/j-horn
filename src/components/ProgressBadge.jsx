import { Badge } from '@/components/ui/badge';
import { BsStars } from 'react-icons/bs';
import { RiProgress7Line } from 'react-icons/ri';

export default function ProgressBadge({ label }) {
  if (!label) return null;

  return (
    <div
      className='pointer-events-none absolute right-2 top-2'
      aria-hidden='true'
    >
      {label === 'In Progress' && (
        <Badge className='bg-pink-600 shadow drop-shadow'>
          <RiProgress7Line className='mr-1' />
          {label}
        </Badge>
      )}

      {label === 'New' && (
        <Badge className='bg-lime-500 shadow drop-shadow'>
          <BsStars className='mr-1' />
          {label}
        </Badge>
      )}
    </div>
  );
}
