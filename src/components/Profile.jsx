import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download } from 'lucide-react';

const Profile = () => {
  return (
    <div className='mx-auto max-w-7xl px-6 py-20'>
      <div className='grid gap-10 md:grid-cols-[220px_1fr] items-center'>
        <div className='flex justify-center'>
          <Image
            src='/profile.png'
            alt='Profile'
            width={180}
            height={180}
            className='rounded-full ring-2 ring-border shadow-lg'
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant='secondary' className='mb-4'>
            Senior Software Engineer
          </Badge>

          <h1 className='text-4xl font-bold sm:text-5xl'>Christopher Stacks</h1>

          <p className='mt-4 max-w-2xl text-lg text-muted-foreground'>
            Designing and delivering secure, scalable, production-grade systems
            across cloud, infrastructure, and automation.
          </p>

          <div className='mt-8 flex gap-4'>
            <Button size='lg'>
              Projects <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
            <Button size='lg' variant='outline'>
              <Download className='mr-2 h-4 w-4' />
              Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Profile;
