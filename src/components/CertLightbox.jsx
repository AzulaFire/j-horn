import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function CertLightbox({ cert, onClose }) {
  if (!cert) return null;

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className='max-w-[90vw] max-h-[90vh] bg-background p-4'>
        <VisuallyHidden>
          <DialogTitle>Certification Preview</DialogTitle>
        </VisuallyHidden>

        <motion.div
          className='flex h-full flex-col items-center gap-4'
          drag
          dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }}
          whileTap={{ cursor: 'grabbing' }}
        >
          <Image
            src={cert.src}
            alt={cert.title}
            width={1200}
            height={800}
            className='max-h-[75vh] object-contain'
          />

          <div className='text-center'>
            <p className='font-medium'>{cert.title}</p>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
