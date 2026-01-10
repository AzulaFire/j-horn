export default function Section({ title, icon: Icon, children }) {
  return (
    <section className='border-t border-border bg-muted/40'>
      <div className='mx-auto max-w-7xl px-6 py-20'>
        <div className='mb-12 flex items-center gap-3'>
          <Icon className='h-6 w-6 text-muted-foreground' />
          <h2 className='text-2xl font-semibold'>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
