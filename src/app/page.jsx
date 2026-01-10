'use client';

import { Star, Layers, Award, Clock, Globe, User } from 'lucide-react';
import Section from '@/components/Section';
import SkillCard from '@/components/SkillCard';
import LiveClock from '@/components/LiveClock';
import CertGallery from '@/components/CertGallery';
import { skills, techStack, certifications, clocks } from '@/data/siteData';
import TechnologyStack from '@/components/TechnologyStack';
import Hero from '@/components/Hero';
import ToolWall from '@/components/ToolWall';
import EducationSocials from '@/components/EducationSocials';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-background text-foreground'>
      {/* PROFILE / HERO */}

      <Hero />

      <Section title='Background & Links' icon={User}>
        <EducationSocials />
      </Section>

      <Section title='Core Skills' icon={Star}>
        <div className='grid gap-6 md:grid-cols-2'>
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </Section>

      <Section title='Technology Stack' icon={Layers}>
        <TechnologyStack techStack={techStack} />
      </Section>

      <Section title='Visual Showcase' icon={Award}>
        <CertGallery certs={certifications} />
      </Section>

      <Section title='Tools & Technologies' icon={Globe}>
        <ToolWall />
      </Section>

      <Section title='Global Presence' icon={Clock}>
        <div className='grid gap-6 md:grid-cols-3'>
          {clocks.map((c) => (
            <LiveClock key={c.city} {...c} />
          ))}
        </div>
      </Section>
    </main>
  );
}
