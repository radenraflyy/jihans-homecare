import { useId } from 'react'

export default function BrandMark({ className = 'size-11' }) {
  const gradientId = useId()

  return (
    <svg viewBox="0 0 48 48" fill="none" className={`shrink-0 ${className}`} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradientId} x1="5" y1="2" x2="43" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CB5D83" />
          <stop offset="1" stopColor="#922E55" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="46" height="46" rx="16" fill={`url(#${gradientId})`} />
      <rect x="1.5" y="1.5" width="45" height="45" rx="15.5" stroke="white" strokeOpacity=".18" />
      <path d="M12.5 23 22 14.8a3 3 0 0 1 4 0l9.5 8.2M15.5 21v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3V21" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 31s-5-3.1-5-6a2.7 2.7 0 0 1 5-1.4 2.7 2.7 0 0 1 5 1.4c0 2.9-5 6-5 6Z" fill="#FFE4ED" />
      <circle cx="34.5" cy="13.5" r="2" fill="#F9C9D9" />
    </svg>
  )
}
