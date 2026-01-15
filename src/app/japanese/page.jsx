'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  MapPin,
  Languages,
  Briefcase,
  Code2,
  Palette,
  Cpu,
  Database,
  Linkedin,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { jobsjp } from '@/data/siteData';

// ---- helpers (Japanese formatting) ----
function formatYMJP(ym) {
  if (!ym) return '';
  const [y, m] = ym.split('-').map(Number);
  if (!y || !m) return ym;
  return `${y}年${String(m).padStart(2, '0')}月`;
}

function formatRangeJP(startDate, endDate) {
  const s = formatYMJP(startDate);
  const e = endDate ? formatYMJP(endDate) : '現在';
  return s && e ? `${s}〜${e}` : s || e;
}

function collectTopTech(list, limit = 12) {
  const counts = new Map();
  list.forEach((j) => {
    (j.technologies || []).forEach((t) => {
      counts.set(t, (counts.get(t) || 0) + 1);
    });
  });

  // Sort by usage count, then by name
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([t]) => t);
}

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut' },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function JapaneseSummaryPage() {
  const sortedJobs = [...jobsjp].sort((a, b) =>
    (b.startDate || '').localeCompare(a.startDate || '')
  );

  const topTech = collectTopTech(sortedJobs, 14);

  return (
    <main className='min-h-screen bg-background'>
      {/* Background accents (subtle, different from English page) */}
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute -top-24 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]' />
        <div className='absolute bottom-0 right-0 h-90 w-90 rounded-full bg-cyan-500/10 blur-[120px]' />
      </div>

      <motion.section
        initial='initial'
        animate='animate'
        variants={stagger}
        className='mx-auto max-w-6xl px-6 py-14 lg:py-20'
      >
        {/* --- HERO --- */}
        <motion.div
          variants={fadeIn}
          className='grid gap-10 lg:grid-cols-[360px_1fr]'
        >
          {/* Photo + quick facts */}
          <Card className='relative overflow-hidden'>
            <CardHeader className='pb-3'>
              <CardTitle className='text-lg'>
                プロフィール概要（日本語）
              </CardTitle>
            </CardHeader>

            <CardContent className='space-y-5'>
              <div className='flex items-center gap-4'>
                <div className='relative h-20 w-20 overflow-hidden rounded-2xl border'>
                  <Image
                    src='/images/john.png'
                    alt='John Horn Jr.'
                    fill
                    className='object-cover'
                    priority
                  />
                </div>
                <div>
                  <div className='text-xl font-bold leading-tight'>
                    John Horn Jr.
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    フロントエンド開発 / UI・UX
                  </div>
                </div>
              </div>

              <Separator />

              <div className='space-y-3 text-sm text-muted-foreground'>
                <div className='flex items-center gap-2'>
                  <MapPin className='h-4 w-4 text-primary' />
                  <span>札幌在住（2010年〜）</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Briefcase className='h-4 w-4 text-primary' />
                  <span>ソフトウェア開発（札幌）：2021年04月〜現在</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Languages className='h-4 w-4 text-primary' />
                  <span>英語：ネイティブ / 日本語：日常会話レベル</span>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 pt-1'>
                <Badge variant='secondary' className='rounded-full'>
                  UI/UX重視
                </Badge>
                <Badge variant='secondary' className='rounded-full'>
                  自動化・効率化
                </Badge>
                <Badge variant='secondary' className='rounded-full'>
                  Web / Desktop
                </Badge>
              </div>

              <div className='flex flex-wrap gap-3 pt-2'>
                <Link href='/projects'>
                  <Badge className='cursor-pointer gap-2 px-4 py-2'>
                    作品を見る
                    <span aria-hidden>→</span>
                  </Badge>
                </Link>

                <Link
                  href='https://www.linkedin.com/in/johnhornjr/'
                  target='_blank'
                >
                  <Badge
                    variant='outline'
                    className='cursor-pointer gap-2 px-4 py-2 bg-background'
                  >
                    <Linkedin className='h-4 w-4' />
                    LinkedIn
                  </Badge>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Summary + strengths */}
          <div className='space-y-6'>
            <motion.div variants={fadeIn}>
              <h1 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
                経験と強みの要約
              </h1>
              <p className='mt-4 max-w-2xl leading-relaxed text-muted-foreground'>
                米国出身で2010年から日本在住。札幌では2021年04月よりソフトウェア開発に従事し、
                フロントエンド（React / Next.js /
                Vue）を中心に、業務改善・自動化、既存システムの移行、
                UI/UXの品質向上まで一貫して対応してきました。
                <br />
                <br />
                それ以前は英語講師として、公立校（小・中）および民間で幅広い年齢層（幼児〜ビジネス層）を指導。
                「相手に伝わる設計・説明」「使いやすさを形にする」ことを大切にしています。
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className='grid gap-4 sm:grid-cols-2'>
              <Card className='border-primary/15'>
                <CardHeader className='pb-2'>
                  <CardTitle className='flex items-center gap-2 text-base'>
                    <Code2 className='h-4 w-4 text-primary' />
                    価値提供
                  </CardTitle>
                </CardHeader>
                <CardContent className='text-sm text-muted-foreground leading-relaxed'>
                  UI品質の引き上げ、フロント実装の安定化、既存コードの改善・不具合修正、
                  そして自動化による工数削減を得意とします。
                </CardContent>
              </Card>

              <Card className='border-primary/15'>
                <CardHeader className='pb-2'>
                  <CardTitle className='flex items-center gap-2 text-base'>
                    <Palette className='h-4 w-4 text-primary' />
                    UI/UXのこだわり
                  </CardTitle>
                </CardHeader>
                <CardContent className='text-sm text-muted-foreground leading-relaxed'>
                  Figmaを基準に、レスポンシブ・アクセシビリティ・一貫性を重視。
                  「見た目」だけでなく、運用しやすいコンポーネント設計も意識しています。
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn} className='grid gap-4 sm:grid-cols-2'>
              <Card>
                <CardHeader className='pb-2'>
                  <CardTitle className='flex items-center gap-2 text-base'>
                    <Cpu className='h-4 w-4 text-primary' />
                    得意領域
                  </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-wrap gap-2'>
                  {[
                    'フロントエンド開発',
                    'システム移行・改修',
                    '自動化（Python / PowerShell）',
                    '社内ツール開発',
                    'QA支援・検証',
                    'ドキュメント整備（英語）',
                  ].map((x) => (
                    <Badge key={x} variant='outline' className='bg-background'>
                      {x}
                    </Badge>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className='pb-2'>
                  <CardTitle className='flex items-center gap-2 text-base'>
                    <Database className='h-4 w-4 text-primary' />
                    よく扱う技術
                  </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-wrap gap-2'>
                  {topTech.map((t) => (
                    <Badge key={t} variant='secondary' className='text-xs'>
                      {t}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* --- CAREER HIGHLIGHTS (last 5-ish years at current company) --- */}
        <motion.div variants={fadeIn} className='mt-12'>
          <div className='mb-4 flex items-end justify-between gap-4'>
            <h2 className='text-2xl font-bold tracking-tight'>
              主な実績（直近プロジェクト）
            </h2>
            <span className='text-xs text-muted-foreground'>
              ※ jobs データから抜粋
            </span>
          </div>

          <Card className='overflow-hidden'>
            <CardContent className='p-0'>
              <div className='divide-y'>
                {sortedJobs.slice(0, 6).map((job, idx) => (
                  <div key={`${job.title}-${idx}`} className='p-6'>
                    <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
                      <div>
                        <div className='text-lg font-semibold'>{job.title}</div>
                        <div className='mt-1 text-sm text-muted-foreground'>
                          {job.employmentType} / {job.location}
                        </div>
                      </div>
                      <div className='text-xs font-semibold tracking-wide text-primary'>
                        {formatRangeJP(job.startDate, job.endDate)}
                      </div>
                    </div>

                    {/* tech */}
                    {job.technologies?.length ? (
                      <div className='mt-4 flex flex-wrap gap-2'>
                        {job.technologies.slice(0, 10).map((t) => (
                          <Badge
                            key={t}
                            variant='secondary'
                            className='text-[11px]'
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    ) : null}

                    {/* responsibilities (Japanese summary from English bullets) */}
                    <ul className='mt-4 space-y-2 text-sm text-muted-foreground'>
                      {(job.responsibilities || []).slice(0, 4).map((p, i) => (
                        <li key={i} className='flex gap-2'>
                          <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40' />
                          <span>{translateBulletToJP(p)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <p className='mt-4 text-sm text-muted-foreground'>
            ※ 詳細な実績・成果物は「作品を見る」ページにも掲載しています。
          </p>
        </motion.div>

        {/* --- Teaching background --- */}
        <motion.div variants={fadeIn} className='mt-12'>
          <Card className='border-primary/15 bg-card/60 backdrop-blur'>
            <CardHeader>
              <CardTitle className='text-lg'>補足：英語教育の経験</CardTitle>
            </CardHeader>
            <CardContent className='text-sm text-muted-foreground leading-relaxed'>
              開発職に就く以前は、英語講師として公立校（小学校・中学校）での指導、
              および民間での個別指導を担当しました。幼児から社会人（ビジネス英語）まで、
              目的に合わせたコミュニケーション支援・教材作成・学習設計を経験しています。
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </main>
  );
}

/**
 * Very lightweight EN->JP bullet conversion so the page is Japanese.
 * Not perfect translation, but professional, readable, and consistent.
 * You can extend this mapping anytime.
 */
function translateBulletToJP(text) {
  if (!text) return '';

  const t = String(text);

  const replacements = [
    [/Led the migration/gi, '移行（マイグレーション）を主導'],
    [
      /Managed end-to-end planning and execution/gi,
      '計画〜実行まで一貫して推進',
    ],
    [
      /Developed and maintained front-end components/gi,
      'フロントエンドのコンポーネントを開発・保守',
    ],
    [
      /Interpreted and implemented UI designs from Figma/gi,
      'FigmaのデザインをもとにUIを実装（レスポンシブ対応）',
    ],
    [
      /Resolved logic-based issues/gi,
      '既存コンポーネントの不具合（ロジック）を修正',
    ],
    [
      /Created detailed English technical documentation/gi,
      '英語での技術ドキュメントを整備',
    ],
    [
      /Developed Python automation scripts/gi,
      'Pythonによる自動化スクリプトを開発',
    ],
    [/Used PowerShell to automate/gi, 'PowerShellで作業を自動化'],
    [
      /Performed comprehensive testing/gi,
      '総合テストを実施（エビデンス取得含む）',
    ],
    [/Built/gi, '構築'],
    [/Developed/gi, '開発'],
    [/Implemented/gi, '実装'],
    [/Migrated/gi, '移行'],
    [/Updated/gi, '更新'],
    [/Optimized/gi, '最適化'],
    [/Collaborated/gi, '関係者と連携'],
  ];

  let out = t;
  for (const [re, jp] of replacements) out = out.replace(re, jp);

  // Final polish: keep it Japanese-ish by removing excessive arrows, etc.
  out = out.replace(/→/g, '〜');

  return out;
}
