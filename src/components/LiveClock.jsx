import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useEffect, useState } from 'react';

export default function LiveClock({ city, tz }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: tz,
        }).format(new Date())
      );

    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, [tz]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{city}</CardTitle>
        <CardDescription>{tz}</CardDescription>
      </CardHeader>
      <CardContent className='text-2xl font-mono text-muted-foreground'>
        {time}
      </CardContent>
    </Card>
  );
}
