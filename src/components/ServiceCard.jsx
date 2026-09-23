import { ArrowRight, Clock, ShieldAlert } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatRupiah } from '../data/services'

export default function ServiceCard({ service }) {
  const Icon = service.icon
  return (
    <article className="card group flex h-full flex-col p-5 transition hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-2xl bg-pink-50 text-pink-700"><Icon size={24}/></span>
        {service.requiresScreening && <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800"><ShieldAlert size={13}/> Perlu skrining</span>}
      </div>
      <p className="text-xs font-bold uppercase tracking-wider text-pink-700">{service.category}</p>
      <h3 className="mt-2 text-xl font-bold text-slate-900">{service.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{service.short}</p>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <div><div className="font-extrabold text-slate-900">Mulai {formatRupiah(service.price)}</div><div className="mt-1 flex items-center gap-1 text-xs text-slate-500"><Clock size={13}/> {service.duration}</div></div>
        <Link to={`/services/${service.id}`} className="grid size-10 place-items-center rounded-full bg-slate-900 text-white transition group-hover:bg-pink-700" aria-label={`Lihat ${service.name}`}><ArrowRight size={18}/></Link>
      </div>
    </article>
  )
}
