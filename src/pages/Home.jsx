import { ArrowRight, BadgeCheck, CalendarCheck, ClipboardCheck, HeartHandshake, MapPin, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Home(){
  return <>
    <section className="hero-grid overflow-hidden bg-gradient-to-b from-pink-50 via-white to-slate-50">
      <div className="container-app grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
        <div className="motion-rise">
          <div className="motion-rise motion-delay-1 mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-3 py-2 text-sm font-semibold text-pink-800"><BadgeCheck size={16}/> Layanan keperawatan profesional di rumah</div>
          <h1 className="motion-rise motion-delay-1 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] text-slate-950 sm:text-6xl">Perawatan profesional, <span className="text-pink-700">datang ke rumah.</span></h1>
          <p className="motion-rise motion-delay-2 mt-6 max-w-2xl text-lg leading-8 text-slate-600">Booking layanan keperawatan menjadi lebih simpel—pilih layanan, isi kondisi pasien, tentukan jadwal, lalu tunggu konfirmasi Jihan's HomeCare.</p>
          <div className="motion-rise motion-delay-2 mt-8 flex flex-col gap-3 sm:flex-row"><Link className="btn-primary interactive-lift" to="/booking">Booking Sekarang <ArrowRight size={18}/></Link><Link className="btn-secondary interactive-lift" to="/services">Lihat Semua Layanan</Link></div>
          <div className="motion-rise motion-delay-3 mt-8 flex flex-wrap gap-5 text-sm font-semibold text-slate-600"><span className="flex items-center gap-2"><ShieldCheck className="text-pink-700" size={18}/> Skrining sebelum tindakan</span><span className="flex items-center gap-2"><CalendarCheck className="text-pink-700" size={18}/> Jadwal fleksibel</span><span className="flex items-center gap-2"><MapPin className="text-pink-700" size={18}/> Kunjungan ke rumah</span></div>
        </div>
        <div className="motion-rise motion-delay-2 relative">
          <div className="card interactive-lift relative overflow-hidden p-6 shadow-soft sm:p-8">
            <div className="motion-float absolute -right-20 -top-20 size-56 rounded-[38%] bg-pink-100/70"/>
            <div className="relative">
              <p className="eyebrow">Booking mudah</p><h2 className="mt-3 text-3xl font-black tracking-tight">Tiga langkah, beres.</h2>
              <div className="mt-8 grid gap-4">
                {[['01','Pilih layanan','Temukan layanan keperawatan sesuai kebutuhan.'],['02','Isi data & jadwal','Ceritakan kebutuhan pasien dan pilih waktu kunjungan.'],['03','Tunggu konfirmasi','Jadwal diverifikasi sebelum layanan dilakukan.']].map(([n,t,d], index)=><div key={n} className={`interactive-lift flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 motion-rise motion-delay-${index + 1}`}><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-slate-900 font-black text-white">{n}</span><div><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{d}</p></div></div>)}
              </div>
              <div className="mt-6 rounded-2xl bg-pink-700 p-5 text-white"><div className="flex items-start gap-3"><ClipboardCheck className="mt-0.5 shrink-0"/><div><p className="font-bold">Safety first, bukan asal checkout.</p><p className="mt-1 text-sm leading-6 text-pink-50">Layanan tertentu memerlukan skrining atau instruksi medis sebelum tindakan dijadwalkan.</p></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container-app py-20"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="eyebrow">Layanan pilihan</p><h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Kebutuhan keperawatan, tanpa ribet.</h2></div><Link to="/services" className="font-bold text-pink-700">Semua layanan →</Link></div><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.filter(s=>s.featured).map(s=><ServiceCard key={s.id} service={s}/>)}</div></section>
    <section className="container-app pb-10"><div className="grid gap-6 rounded-[2rem] bg-slate-950 p-7 text-white md:grid-cols-3 md:p-10">{[[ShieldCheck,'Terukur & terverifikasi','Setiap layanan melalui data pasien dan skrining sesuai kebutuhan.'],[HeartHandshake,'Lebih personal','Pendekatan home care yang fokus pada kebutuhan pasien dan keluarga.'],[CalendarCheck,'Mudah dijadwalkan','Booking digital membantu merapikan jadwal kunjungan dan tindak lanjut.']].map(([Icon,t,d])=><div key={t} className="interactive-lift rounded-2xl bg-white/5 p-5"><Icon className="text-pink-300"/><h3 className="mt-4 text-lg font-bold">{t}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{d}</p></div>)}</div></section>
  </>
}
