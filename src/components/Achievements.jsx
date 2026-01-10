import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const Achievements = ({ achievements }) => {
  return (
    <div className='grid gap-6 md:grid-cols-2'>
      {achievements.map((a) => (
        <Card key={a.company}>
          <CardHeader>
            <CardTitle>{a.company}</CardTitle>
          </CardHeader>
          <CardContent className='space-y-2'>
            {a.details.map((d) => (
              <p key={d} className='text-sm text-muted-foreground'>
                • {d}
              </p>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default Achievements;
