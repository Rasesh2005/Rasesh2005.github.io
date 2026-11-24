'use client'

import { Fragment, useEffect, useState, type ReactNode } from 'react'
import { useTheme } from 'next-themes'
import { ArrowUpRight, Moon, Sun } from 'lucide-react'
import { achievements, openSource, profile, projects, publications, socials } from '@/app/constants/data'

// ANSI Regular figlet glyphs, drawn as SVG cells (fonts render block glyphs at inconsistent widths).
// Only the letters the banner uses; add more here if the name changes.
const GLYPHS: Record<string, string[]> = {
  R: ['██████  ', '██   ██ ', '██████  ', '██   ██ ', '██   ██ '],
  A: [' █████  ', '██   ██ ', '███████ ', '██   ██ ', '██   ██ '],
  S: ['███████ ', '██      ', '███████ ', '     ██ ', '███████ '],
  E: ['███████ ', '██      ', '█████   ', '██      ', '███████ '],
  H: ['██   ██ ', '██   ██ ', '███████ ', '██   ██ ', '██   ██ '],
  T: ['████████ ', '   ██    ', '   ██    ', '   ██    ', '   ██    '],
  Y: ['██    ██ ', ' ██  ██  ', '  ████   ', '   ██    ', '   ██    '],
}
const bannerRows = (word: string) => GLYPHS.R.map((_, row) => word.split('').map((ch) => GLYPHS[ch][row]).join(''))

const NAV = [
  { id: 'home', label: 'home', short: 'home', cmd: 'whoami' },
  { id: 'projects', label: 'projects', short: 'projects', cmd: 'ls ~/projects' },
  { id: 'achievements', label: 'achievements', short: 'wins', cmd: 'cat achievements.log' },
  { id: 'open-source', label: 'open-source', short: 'oss', cmd: 'cat work.md' },
  { id: 'contact', label: 'contact', short: 'contact', cmd: 'cat ~/.socials.toml' },
]

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const
const pad2 = (n: number) => String(n).padStart(2, '0')

function Panel({ title, className = '', children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <div className={`win relative min-w-0 rounded-lg border border-term-line bg-term-win px-4 pb-5 pt-6 sm:px-6 ${className}`}>
      <span className="win-title absolute -top-[10px] left-3 bg-term-win px-1.5 text-xs leading-[18px] text-term-dim sm:left-4">{title}</span>
      {children}
    </div>
  )
}

function Banner() {
  const rows = profile.banner.flatMap((w, i) => (i ? [''] : []).concat(bannerRows(w)))
  const cols = Math.max(...rows.map((r) => r.length))
  // Terminal cells are twice as tall as wide.
  return (
    <svg aria-hidden shapeRendering="crispEdges" viewBox={`0 0 ${cols} ${rows.length * 2}`} className="h-auto w-full max-w-sm fill-term-accent sm:max-w-md">
      {rows.map((r, y) => (
        <g key={y} className="boot-line" style={{ animationDelay: `${y * 40}ms` }}>
          {r.split('').map((ch, x) => ch === '█' && <rect key={x} x={x} y={y * 2} width={1.02} height={2.02} />)}
        </g>
      ))}
    </svg>
  )
}

function Hero() {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-end">
      <div className="min-w-0">
        <h1 className="sr-only">{profile.name}</h1>
        <Banner />
        <p className="mt-8 max-w-[60ch]">{profile.bio}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-md bg-term-accent px-4 py-1.5 font-bold text-term-onaccent">
            view projects
          </a>
          <a href={profile.resume} {...ext} className="rounded-md border border-term-line px-4 py-1.5 hover:border-term-accent hover:text-term-accent">
            résumé ↗
          </a>
        </div>
      </div>
      <Panel title="neofetch">
        <p className="font-bold">
          <span className="text-term-accent">{profile.handle}</span>@<span className="text-term-accent">{profile.host}</span>
        </p>
        <dl className="mt-2 grid grid-cols-[max-content_minmax(0,1fr)] gap-x-5">
          {profile.facts.map(([k, v]) => (
            <Fragment key={k}>
              <dt className="text-term-dim">{k}</dt>
              <dd>{v}</dd>
            </Fragment>
          ))}
        </dl>
      </Panel>
    </div>
  )
}

function Projects() {
  const [sel, setSel] = useState(0)
  const p = projects[sel]
  return (
    <Panel title="ranger ~/projects" className="!px-0 !pb-0">
      <div className="grid md:grid-cols-[minmax(0,290px)_minmax(0,1fr)]">
        <ul className="border-b border-term-line pb-3 md:border-b-0 md:border-r md:pb-6">
          {projects.map((q, i) => (
            <li key={q.name}>
              <button
                type="button"
                onClick={() => setSel(i)}
                aria-pressed={i === sel}
                className={`flex w-full justify-between gap-3 px-4 py-1 text-left font-bold sm:px-6 ${
                  i === sel ? 'bg-term-accent text-term-onaccent' : 'text-term-sky hover:bg-term-sel'
                }`}
              >
                <span className="truncate">{q.name}/</span>
                <span className={`shrink-0 font-normal ${i === sel ? '' : 'text-term-dim'}`}>{q.lang}</span>
              </button>
            </li>
          ))}
        </ul>
        <article className="min-w-0 px-4 py-5 sm:px-8">
          <p className="text-term-dim">README.md</p>
          <h3 className="mt-1 text-xl font-extrabold sm:text-2xl">
            <span className="text-term-accent">#</span> {p.name}
          </h3>
          <p className="mt-3 max-w-[64ch]">{p.description}</p>
          {p.highlights.length > 0 && (
            <>
              <p className="mt-5 font-bold text-term-vio">## Highlights</p>
              <ul className="mt-1">
                {p.highlights.map((h) => (
                  <li key={h}>
                    <span className="text-term-lime">+</span> {h}
                  </li>
                ))}
              </ul>
            </>
          )}
          <p className="mt-5 font-bold text-term-vio">## Stack</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="rounded border border-term-line px-2 text-xs leading-6">
                {s}
              </span>
            ))}
          </div>
          <a href={p.url} {...ext} className="mt-6 inline-flex items-center gap-1 rounded-md bg-term-accent px-4 py-1.5 font-bold text-term-onaccent">
            open repo <ArrowUpRight size={16} />
          </a>
        </article>
      </div>
      <div className="flex justify-between overflow-hidden rounded-b-[7px] border-t border-term-line text-xs font-bold leading-6">
        <span className="bg-term-accent px-3 text-term-onaccent">drwxr-xr-x</span>
        <span className="px-3 text-term-dim">
          {p.lang} {sel + 1}/{projects.length}
        </span>
      </div>
    </Panel>
  )
}

function Achievements() {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <div className="min-w-0">
        <h3 className="text-2xl font-bold sm:text-3xl">Problem solving, consistently.</h3>
        <p className="mt-3 max-w-[48ch] text-term-dim">
          {achievements[0].event} {achievements[0].stage.toLowerCase()}. Codeforces {profile.codeforcesRank}. {profile.college}.
        </p>
        <p className="mt-6 text-term-dim">cpi</p>
        <p className="text-3xl font-extrabold">
          {profile.cpi}
          <span className="text-base font-normal text-term-dim"> / 10</span>
        </p>
        <div className="mt-2 h-2 max-w-xs overflow-hidden rounded-sm bg-term-line">
          <div className="h-full bg-term-accent" style={{ width: `${profile.cpi * 10}%` }} />
        </div>
      </div>
      <Panel title="achievements.log" className="!pt-3">
        <ul>
          {achievements.map((a) => (
            <li
              key={a.event}
              className="grid grid-cols-[auto_minmax(0,1fr)_auto] gap-x-3 border-b border-term-line py-2 last:border-0 sm:grid-cols-[auto_9rem_minmax(0,1fr)_auto] sm:gap-x-5"
            >
              <span className="whitespace-pre text-term-lime">[ OK ]</span>
              <span>{a.event}</span>
              <span className="hidden text-term-dim sm:block">{a.stage}</span>
              <span className="text-right font-bold text-term-accent">{a.result}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  )
}

function OpenSource() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {openSource.map((o) => (
        <Panel key={o.program} title={o.kind}>
          <h3 className="text-xl font-bold sm:text-2xl">{o.program}</h3>
          <p className="text-term-dim">
            {o.role} · {o.period}
          </p>
          <ul className="mt-4">
            {o.contributions.map((c) => (
              <li key={c}>
                <span className="text-term-lime">+</span> {c}
              </li>
            ))}
          </ul>
          {o.url && (
            <a href={o.url} {...ext} className="mt-4 inline-flex items-center gap-1 text-term-accent hover:underline">
              {o.repo} <ArrowUpRight size={15} />
            </a>
          )}
        </Panel>
      ))}
      {publications.map((p) => (
        <Panel key={p.key} title="research">
          <h3 className="text-xl font-bold sm:text-2xl">{p.title}</h3>
          <p className="text-term-dim">Publication</p>
          <a href={p.url} {...ext} className="mt-4 inline-flex items-center gap-1 text-term-accent hover:underline">
            {p.note} <ArrowUpRight size={15} />
          </a>
        </Panel>
      ))}
    </div>
  )
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard can be blocked (insecure context, permissions); the mailto link still works.
    }
  }
  return (
    <button type="button" onClick={copy} className="ml-3 rounded border border-term-line px-2 text-xs leading-6 text-term-dim hover:text-term-fg">
      {copied ? 'copied' : 'copy'}
    </button>
  )
}

function Contact() {
  const rows = [...socials.filter((s) => s.url), { label: 'resume', value: 'open ↗', url: profile.resume }]
  const pad = Math.max(...rows.map((s) => s.label.length))
  const num = (n: number) => <span className="inline-block w-8 select-none pr-3 text-right text-term-dim">{n}</span>
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <div>
        <h3 className="text-2xl font-bold sm:text-3xl">Let’s build something good.</h3>
        <p className="mt-3 text-term-dim">Email or Telegram is fastest.</p>
      </div>
      <Panel title=".socials.toml" className="!px-0 !pb-3">
        <div className="overflow-x-auto px-2 sm:px-4">
          <p>
            {num(1)}
            <span className="text-term-vio">[contact]</span>
          </p>
          {rows.map((s, i) => (
            <p key={s.label} className="whitespace-pre">
              {num(i + 2)}
              <span className="text-term-sky">{s.label.padEnd(pad)}</span> ={' '}
              <a href={s.url} {...(s.url.startsWith('http') ? ext : {})} className="text-term-lime underline-offset-4 hover:underline">
                &quot;{s.value}&quot;
              </a>
              {s.label === 'email' && <CopyButton text={s.value} />}
            </p>
          ))}
        </div>
      </Panel>
    </div>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = !mounted || resolvedTheme === 'dark'
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className="flex shrink-0 items-center gap-1.5 rounded-md border border-term-line px-2 leading-7 text-term-dim hover:border-term-accent hover:text-term-fg"
    >
      {isDark ? <Moon size={14} /> : <Sun size={14} />}
      <span>{isDark ? 'dark' : 'light'}</span>
    </button>
  )
}

export default function Terminal() {
  const [active, setActive] = useState('home')

  // Highlight the nav item for the section in the middle of the viewport.
  useEffect(() => {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), {
      rootMargin: '-45% 0px -50% 0px',
    })
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  const bodies: Record<string, ReactNode> = {
    home: <Hero />,
    projects: <Projects />,
    achievements: <Achievements />,
    'open-source': <OpenSource />,
    contact: <Contact />,
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-28 sm:px-8 lg:pb-10">
      <header className="sticky top-0 z-20 -mx-4 border-b border-term-line bg-term-wall px-4 sm:-mx-8 sm:px-8">
        <div className="flex items-center gap-4 py-3 text-xs sm:text-[13px]">
          <a href="#home" className="min-w-0 truncate">
            <span className="font-bold text-term-accent">
              {profile.handle}@{profile.host}
            </span>
            <span className="text-term-dim">:~{active === 'home' ? '' : `/${active}`}</span>
          </a>
          <nav aria-label="Sections" className="ml-auto hidden gap-1 lg:flex">
            {NAV.map(({ id, label }, i) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`rounded-md border px-2.5 leading-7 ${
                  active === id ? 'border-term-line bg-term-win text-term-accent' : 'border-transparent text-term-dim hover:text-term-fg'
                }`}
              >
                <span className="opacity-70">{pad2(i + 1)}</span> {label}
              </a>
            ))}
          </nav>
          <span className="ml-auto lg:ml-0" />
          <ThemeToggle />
        </div>
      </header>

      <main>
        {NAV.map(({ id, label, cmd }, i) => (
          <section key={id} id={id} aria-label={label} className="scroll-mt-16 border-b border-term-line py-12 sm:py-16">
            <div className="mb-8 flex items-baseline justify-between gap-4 text-xs sm:text-[13px]">
              <p className="text-term-accent">
                <span className="text-term-dim">$</span> {cmd}
              </p>
              <p className="text-term-dim">
                {pad2(i + 1)} / {label}
              </p>
            </div>
            {bodies[id]}
          </section>
        ))}
      </main>

      <footer className="flex flex-wrap justify-between gap-2 py-6 text-xs text-term-dim">
        <span>© {profile.name}</span>
        <span>
          end of output <span className="cursor-blink inline-block h-3 w-1.5 translate-y-0.5 bg-term-accent" />
        </span>
      </footer>

      <nav
        aria-label="Sections"
        className="fixed inset-x-3 bottom-3 z-20 grid grid-cols-5 gap-1 rounded-xl border border-term-line bg-term-win p-1.5 sm:inset-x-auto sm:left-1/2 sm:w-[30rem] sm:-translate-x-1/2 lg:hidden"
      >
        {NAV.map(({ id, short }, i) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? 'true' : undefined}
            className={`flex flex-col items-center rounded-lg py-1 text-[11px] leading-4 ${
              active === id ? 'bg-term-accent font-bold text-term-onaccent' : 'text-term-dim'
            }`}
          >
            <span>{pad2(i + 1)}</span>
            <span>{short}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}
