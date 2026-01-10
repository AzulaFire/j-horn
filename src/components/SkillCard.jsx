'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function SkillCard({ skill, index = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  /* ------------------------------
     Scroll trigger
  --------------------------------*/
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  /* ------------------------------
     Animate progress value
  --------------------------------*/
  useEffect(() => {
    if (!visible) return;

    const delay = index * 120;
    const t = setTimeout(() => {
      setValue(skill.value);
    }, delay);

    return () => clearTimeout(t);
  }, [visible, skill.value, index]);

  /* ------------------------------
     Animate percentage count
  --------------------------------*/
  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const end = skill.value;
    const duration = 700;
    const step = 16;
    const inc = end / (duration / step);

    const counter = setInterval(() => {
      start += inc;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(counter);
  }, [visible, skill.value]);

  return (
    <Card ref={ref}>
      <CardHeader className='pb-2'>
        <div className='flex justify-between items-center'>
          <CardTitle className='text-base'>{skill.name}</CardTitle>
          <span className='text-sm text-muted-foreground'>{count}%</span>
        </div>
      </CardHeader>

      <CardContent>
        <Progress value={value} className='h-2 skill-progress' />
      </CardContent>
    </Card>
  );
}
