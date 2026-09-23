import { Menu, X } from 'lucide-react'
import BrandMark from './BrandMark'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  ['/', 'Beranda'],
  ['/services', 'Layanan'],
  ['/booking', 'Booking'],
  ['/profile', 'Profile Perawat'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container-app flex h-18 items-center justify-between py-3">
        <Link to="/" onClick={() => setOpen(false)} className="flex min-w-0 items-center gap-2 sm:gap-3">
          <BrandMark />
          <span><span className="block text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">Jihan's HomeCare</span><span className="block text-xs text-slate-500">Nursing Care at Home</span></span>
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 lg:flex">
          {links.map(([to, label]) => <NavLink key={to} to={to} className={({isActive}) => `rounded-xl px-4 py-2 text-sm font-semibold ${isActive ? 'bg-pink-50 text-pink-700' : 'text-slate-600 hover:text-slate-900'}`}>{label}</NavLink>)}
        </nav>
        <Link to="/booking" className="btn-primary hidden lg:inline-flex">Pesan Layanan</Link>
        <button onClick={() => setOpen(!open)} className="grid size-11 shrink-0 place-items-center rounded-xl border border-slate-200 lg:hidden" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Navigasi mobile" className="container-app max-h-[calc(100dvh-70px)] overflow-y-auto border-t border-slate-100 py-3 lg:hidden" onKeyDown={event => { if (event.key === 'Escape') setOpen(false) }}><div className="grid gap-1">{links.map(([to,label]) => <NavLink onClick={() => setOpen(false)} key={to} to={to} className={({ isActive }) => `rounded-xl px-4 py-3 font-semibold ${isActive ? 'bg-pink-50 text-pink-700' : 'text-slate-700 hover:bg-slate-50'}`}>{label}</NavLink>)}</div></nav>}
    </header>
  )
}
