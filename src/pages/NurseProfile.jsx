import { useEffect, useRef } from 'react'
import { ArrowDown, ArrowUpRight, Activity, GraduationCap, Heart, HeartHandshake, Hospital, AtSign, Mail, MapPin, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'
import nursePhoto from '../data/assets/perawat-profile.jpeg'
import './NurseProfile.css'

const instagramUrl = 'https://www.instagram.com/rjihanmedinaa?stkn=dXpxaTAwdTl5bW02'
const principles = [
  { icon: HeartHandshake, title: 'Didengarkan dengan baik', text: 'Ada ruang untuk bercerita, bertanya, dan menyampaikan kebutuhan Anda maupun keluarga.' },
  { icon: Stethoscope, title: 'Dirawat dengan perhatian', text: 'Pendekatan personal dengan penjelasan yang mudah dipahami di setiap kunjungan.' },
  { icon: Heart, title: 'Nyaman di rumah sendiri', text: 'Mendekatkan layanan keperawatan dengan tempat yang paling akrab bagi Anda: rumah.' },
]

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const element = ref.current
    if (!window.IntersectionObserver || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.remove('profile-reveal-pending')
        observer.unobserve(element)
      }
    }, { threshold: 0.12 })
    element.classList.add('profile-reveal-pending')
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`profile-reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</div>
}

export default function NurseProfile() {
  return <div className="nurse-profile">
    <section className="profile-hero container-app" aria-labelledby="profile-name">
      <div className="profile-intro">
        <p className="profile-kicker profile-enter"><span /> DI BALIK JIHAN'S HOMECARE</p>
        <p className="profile-greeting profile-enter" style={{ animationDelay: '60ms' }}>Halo, saya Jihan <span aria-hidden="true">✳</span></p>
        <h1 id="profile-name" className="profile-enter" style={{ animationDelay: '120ms' }}>Raden Jihan<br />Safira <em>Meidina.</em></h1>
        <div className="profile-location profile-enter" style={{ animationDelay: '180ms' }}><MapPin size={16} /> Bogor, Indonesia <span className="profile-location-divider" /> Perawat Home Care</div>
        <p className="profile-description profile-enter" style={{ animationDelay: '240ms' }}>Perawatan yang baik dimulai dari rasa percaya.<br className="hidden sm:block" /> Saya hadir untuk mendampingi Anda dan keluarga, dengan ilmu, perhatian, dan sepenuh hati.</p>
        <div className="profile-actions profile-enter" style={{ animationDelay: '300ms' }}>
          <Link to="/booking" className="profile-button">Jadwalkan kunjungan <ArrowUpRight size={19} /></Link>
          <a href="#perjalanan" className="profile-text-link">Kenali saya lebih dekat <ArrowDown size={16} /></a>
        </div>
        <div className="profile-intro-note profile-enter" style={{ animationDelay: '360ms' }}><span className="profile-note-icon"><Heart size={18} /></span><p>Merawat dengan ilmu.<br /><strong>Mendampingi dengan hati.</strong></p></div>
      </div>
      <div className="profile-portrait-wrap profile-enter" style={{ animationDelay: '180ms' }}>
        <div className="profile-portrait-outline" aria-hidden="true" />
        <figure className="profile-portrait">
          <img src={nursePhoto} alt="Raden Jihan Safira Meidina, perawat Jihan's HomeCare di Bogor" width="1080" height="1205" fetchPriority="high" />
          <figcaption><span>YOUR PARTNER IN CARE</span><p>Lebih dekat.<br /><em>Lebih peduli.</em></p></figcaption>
        </figure>
        <div className="profile-photo-flower" aria-hidden="true">✳</div>
        <div className="profile-patient-badge"><span className="profile-badge-icon"><HeartHandshake size={24} /></span><div><strong>20<span>+</span></strong><p>pasien pernah ditangani</p></div></div>
        <span className="profile-photo-caption">PERSONAL CARE, WITH HEART.</span>
      </div>
    </section>

    <div className="profile-belief-strip"><div className="container-app"><span>Perhatian yang personal</span><span aria-hidden="true">✳</span><span>Komunikasi yang hangat</span><span aria-hidden="true">✳</span><span>Perawatan di rumah</span></div></div>

    <section id="perjalanan" className="profile-journey container-app" aria-labelledby="journey-title">
      <Reveal className="profile-section-heading"><div><p className="profile-kicker">CERITA DI BALIK PERAWATAN</p><h2 id="journey-title">Bekal ilmu.<br /><em>Pengalaman yang berarti.</em></h2></div><p>Setiap proses belajar dan pengalaman di layanan kesehatan menjadi bekal saya untuk mendampingi pasien dengan lebih baik.</p></Reveal>
      <div className="profile-journey-grid">
        <Reveal><article className="profile-history-card"><div className="profile-card-heading"><span className="profile-card-icon"><Hospital size={24} /></span><h3>Pengalaman</h3><span className="profile-card-index">01 /</span></div><div className="profile-timeline"><div className="profile-timeline-item"><span className="profile-timeline-dot" /><p>RUMAH SAKIT</p><h4>RS PMI Bogor</h4><span>Pengalaman layanan keperawatan</span></div><div className="profile-timeline-item"><span className="profile-timeline-dot" /><p>LAYANAN KESEHATAN MASYARAKAT</p><h4>UPTD Puskesmas<br />Bogor Timur</h4><span>Pengalaman di lingkungan puskesmas</span></div></div></article></Reveal>
        <Reveal delay={80}><article className="profile-history-card profile-education"><div className="profile-card-heading"><span className="profile-card-icon"><GraduationCap size={25} /></span><h3>Pendidikan</h3><span className="profile-card-index">02 /</span></div><div className="profile-timeline"><div className="profile-timeline-item"><span className="profile-timeline-dot" /><p>PENDIDIKAN KESEHATAN</p><h4>SMK Kesehatan Al-Ikhlas</h4><span className="profile-study">Keperawatan</span></div><div className="profile-timeline-item"><span className="profile-timeline-dot" /><p>PERGURUAN TINGGI</p><h4>Universitas Indonesia Maju</h4><span className="profile-study">Keperawatan</span></div></div></article></Reveal>
      </div>
    </section>

    <section className="profile-care-section" aria-labelledby="care-title"><div className="container-app profile-care-grid"><Reveal className="profile-impact"><Activity size={30} strokeWidth={1.3} /><p className="profile-impact-number">20<span>+</span></p><h2>Pasien pernah<br />saya dampingi.</h2><p>Di balik setiap kunjungan, ada seseorang yang berhak mendapatkan perhatian penuh.</p><div className="profile-impact-line" /></Reveal><div className="profile-care-content"><Reveal><p className="profile-kicker">PENDEKATAN SAYA</p><h2 id="care-title">Bukan sekadar kunjungan.<br /><em>Sebuah pendampingan.</em></h2></Reveal><div className="profile-principles">{principles.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * 60}><article className="profile-principle"><span><Icon size={22} strokeWidth={1.5} /></span><div><h3>{title}</h3><p>{text}</p></div></article></Reveal>)}</div></div></div></section>

    <section className="container-app profile-contact-section"><Reveal><div className="profile-contact"><div className="profile-contact-orbit" aria-hidden="true" /><div className="profile-contact-copy"><p className="profile-kicker">MARI TERHUBUNG</p><h2>Selangkah lebih dekat<br />dengan <em>perawatan yang hangat.</em></h2><p>Kenali saya lebih jauh atau jadwalkan layanan untuk Anda dan orang tersayang.</p><Link to="/booking" className="profile-button profile-button-light">Jadwalkan kunjungan <ArrowUpRight size={19} /></Link></div><div className="profile-socials"><a href={instagramUrl} target="_blank" rel="noreferrer"><AtSign size={21} /><span><small>KESEHARIAN & CERITA</small>@rjihanmedinaa</span><ArrowUpRight size={19} /></a><a href="mailto:rjihansafirahomecare@gmail.com"><Mail size={21} /><span><small>PERTANYAAN & KERJA SAMA</small>Kirim email</span><ArrowUpRight size={19} /></a></div></div></Reveal></section>
  </div>
}
