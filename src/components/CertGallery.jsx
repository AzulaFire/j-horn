import Image from 'next/image';
import { useState } from 'react';
import CertLightbox from './CertLightbox';

export default function CertGallery({ certs }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className='relative overflow-hidden'>
        <div className='flex gap-6 animate-marquee'>
          {[...certs, ...certs].map((cert, i) => (
            <button
              key={i}
              onClick={() => setActive(cert)}
              className='min-w-55 rounded-lg border border-border bg-card p-4 hover:scale-105 transition'
            >
              <Image
                src={cert.src}
                alt={cert.title}
                width={320}
                height={240}
                className='object-contain'
              />
            </button>
          ))}
        </div>
      </div>

      {active && <CertLightbox cert={active} onClose={() => setActive(null)} />}
    </>
  );
}
