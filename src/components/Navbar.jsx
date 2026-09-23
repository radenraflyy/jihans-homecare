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
        <Link to="/" className="flex items-center gap-3">
          <BrandMark />
          <span><span className="block font-extrabold tracking-tight text-slate-900">Jihan's HomeCare</span><span className="block text-xs text-slate-500">Nursing Care at Home</span></span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(([to, label]) => <NavLink key={to} to={to} className={({isActive}) => `rounded-xl px-4 py-2 text-sm font-semibold ${isActive ? 'bg-pink-50 text-pink-700' : 'text-slate-600 hover:text-slate-900'}`}>{label}</NavLink>)}
        </nav>
        <Link to="/booking" className="btn-primary hidden md:inline-flex">Pesan Layanan</Link>
        <button onClick={() => setOpen(!open)} className="rounded-xl border border-slate-200 p-2 md:hidden" aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="container-app border-t border-slate-100 py-3 md:hidden"><div className="grid gap-1">{links.map(([to,label]) => <NavLink onClick={() => setOpen(false)} key={to} to={to} className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50">{label}</NavLink>)}</div></div>}
    </header>
  )
}
