import type { SVGProps } from 'react'

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 48 48',
}

/** Bed bug — rounded oval body with segmented back and legs. */
export function BedBugIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="25" rx="11" ry="14" />
      <path d="M24 11v28M16 18l-2-1M32 18l2-1M14.5 25H33.5M15 32h18" />
      <path d="M13 18l-6-3M13 25l-7 0M13 32l-6 3M35 18l6-3M35 25l7 0M35 32l6 3" />
      <path d="M20 9l-2-3M28 9l2-3" />
    </svg>
  )
}

/** Cockroach — long oval body, antennae and spread legs. */
export function CockroachIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="26" rx="9" ry="15" />
      <path d="M24 11c4 0 6 3 6 6M24 11c-4 0-6 3-6 6" />
      <path d="M18 7l-4-2M30 7l4-2" />
      <path d="M15 19l-8-4M15 26h-9M15 33l-8 4M33 19l8-4M33 26h9M33 33l8 4" />
    </svg>
  )
}

/** Mouse / rat — body, large ear, eye and long tail. */
export function MouseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} xmlns="http://www.w3.org/2000/svg">
      <path d="M11 30c0-7 6-12 13-12 8 0 13 5 13 11 0 4-3 6-7 6H15c-2.5 0-4-1.5-4-5Z" />
      <circle cx="16" cy="20" r="4.5" />
      <circle cx="18" cy="29" r="1" fill="currentColor" stroke="none" />
      <path d="M37 35c4 0 6-2 6-5s-2-4-4-4" />
      <path d="M24 35v3M30 34v3" />
    </svg>
  )
}

/** Wasp — segmented striped abdomen, wings and stinger. */
export function WaspIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="13" r="5" />
      <path d="M21 9l-3-3M27 9l3-3" />
      <path d="M24 18c5 0 8 3 8 9s-4 14-8 14-8-8-8-14 3-9 8-9Z" />
      <path d="M16.5 27h15M17 34h14" />
      <path d="M24 41v4" />
      <path d="M20 23c-7-4-13-2-15 1M28 23c7-4 13-2 15 1" />
    </svg>
  )
}

/** Ant — head, thorax, abdomen with legs and antennae. */
export function AntIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="13" r="4" />
      <circle cx="24" cy="23" r="4" />
      <ellipse cx="24" cy="36" rx="6" ry="7" />
      <path d="M21 10l-3-3M27 10l3-3" />
      <path d="M20 21l-9-3M20 24l-9 2M28 21l9-3M28 24l9 2M21 31l-8 2M27 31l8 2" />
    </svg>
  )
}

/** Flea — humped body, strong hind legs and antennae. */
export function FleaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} xmlns="http://www.w3.org/2000/svg">
      <path d="M30 13c-9 0-15 7-15 16 0 5 3 9 8 9 7 0 11-6 11-14 0-6-1-11-4-11Z" />
      <path d="M30 13c2-3 5-4 8-3" />
      <path d="M16 30c-5 2-8 6-9 11M18 35c-4 3-6 7-6 12M22 38c-3 3-4 6-4 9" />
    </svg>
  )
}

/** Fly — body, two wings, large eyes and legs. */
export function FlyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="27" rx="6" ry="11" />
      <circle cx="20" cy="15" r="3" />
      <circle cx="28" cy="15" r="3" />
      <path d="M18 22c-9-6-15-3-15 2 0 4 6 6 13 3M30 22c9-6 15-3 15 2 0 4-6 6-13 3" />
      <path d="M20 36l-4 6M28 36l4 6M24 38v6" />
    </svg>
  )
}

/** Spider — round body with eight legs. */
export function SpiderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="25" r="7" />
      <circle cx="24" cy="16" r="3" />
      <path d="M17 21l-9-4-2-5M17 25H6l-3 4M17 29l-8 4-2 5M31 21l9-4 2-5M31 25h11l3 4M31 29l8 4 2 5" />
    </svg>
  )
}

/** Mole — body, snout, paws and mound. */
export function MoleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} xmlns="http://www.w3.org/2000/svg">
      <path d="M10 28c0-6 5-11 12-11s13 4 13 10c0 4-3 6-7 6H15c-3 0-5-2-5-5Z" />
      <circle cx="15" cy="24" r="1" fill="currentColor" stroke="none" />
      <path d="M9 27l-4 1 4 2M16 33l-2 4M22 33l1 4M28 32l3 4" />
      <path d="M30 38c2-3 6-4 13-4" />
    </svg>
  )
}

/** Shield with a bug — used for the brand logo. */
export function ShieldBugIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24 4 8 9v13c0 11 7 18 16 22 9-4 16-11 16-22V9L24 4Z"
        fill="currentColor"
      />
      <g
        stroke="var(--accent)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <ellipse cx="24" cy="24" rx="5.5" ry="7.5" />
        <path d="M24 16.5v15M18.5 21l-3-1.5M29.5 21l3-1.5M18.5 24h11M19 28.5l-3 1.5M29 28.5l3 1.5M21 16l-1.5-2.5M27 16l1.5-2.5" />
      </g>
    </svg>
  )
}
