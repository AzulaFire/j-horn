import Image from 'next/image';

export default function CertGallery({ certs }) {
  return (
    <>
      <div className='relative overflow-hidden'>
        <div className='flex gap-4 animate-marquee'>
          {[...certs, ...certs].map((cert, i) => (
            <div
              key={i}
              className='min-w-55 rounded-lg border border-border bg-card p-4 transition hover:scale-105'
            >
              <Image
                src={cert.src}
                alt={cert.title}
                width={320}
                height={240}
                className='object-contain'
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
