// Technologies.jsx
import { technologies } from '@/data/siteData';

export default function Technologies() {
  return (
    <div>
      <h2 className='mx-4 mb-2 font-extrabold'>Skills</h2>
      <ul>
        {technologies.map((item) => (
          <li
            key={item.id}
            className='mx-4 flex flex-row items-center justify-between gap-4 text-sm font-mono text-zinc-600'
          >
            {item.level === 'Expert' && (
              <>
                <div className='font-extrabold'>{item.name}</div>
                <span className='ml-2 text-xs text-zinc-600'>
                  &#9632; &#9632; &#9632; &#9632;
                </span>
              </>
            )}

            {item.level === 'High' && (
              <>
                <div className='font-bold'>{item.name}</div>
                <span className='ml-2 text-xs text-zinc-600'>
                  &#9632; &#9632; &#9632;
                </span>
              </>
            )}

            {/* Handles both "Mid" and "MID" from your data */}
            {(item.level === 'Mid' || item.level === 'MID') && (
              <>
                <div className='font-medium'>{item.name}</div>
                <span className='ml-2 text-xs text-zinc-600'>
                  &#9632; &#9632;
                </span>
              </>
            )}

            {item.level === 'Low' && (
              <>
                <div className='font-thin'>{item.name}</div>
                <span className='ml-2 text-xs text-zinc-600'>&#9632;</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
