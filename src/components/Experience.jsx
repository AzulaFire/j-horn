// Experience.jsx  (kept filename to match your existing imports)
import { roles } from '@/data/siteData';

export default function Experience() {
  return (
    <>
      <div className='text-left'>
        <h2 className='mx-4 mb-2 font-extrabold'>30年以上の経験</h2>
        <ul>
          {roles.map((item) => (
            <li
              key={item.id}
              className='mx-4 my-3 flex flex-row items-center gap-4 text-xs font-mono text-zinc-600'
            >
              {item.name === 'ソフトウェア エンジニア' ? (
                <span className='font-extrabold'>{item.name}</span>
              ) : (
                item.name
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
