import { Activity, Syringe } from 'lucide-react'

export const services = [
  {
    id: 'infus-vitamin',
    name: 'Infus Vitamin',
    category: 'Terapi Infus',
    price: 250000,
    duration: '60–90 menit',
    icon: Syringe,
    featured: true,
    requiresScreening: true,
    short: 'Layanan infus di rumah dengan skrining awal dan pemantauan tanda vital.',
    description: 'Kunjungan perawat untuk terapi infus yang dilakukan setelah skrining kelayakan. Komposisi terapi harus sesuai arahan klinis dan ketentuan yang berlaku.',
    includes: ['Skrining awal', 'Pemeriksaan tanda vital', 'Tindakan keperawatan', 'Monitoring selama layanan', 'Catatan kunjungan'],
  },
  {
    id: 'infus-lambung-mual',
    name: 'Infus Lambung & Mual',
    category: 'Terapi Infus',
    price: null,
    duration: 'Durasi dikonfirmasi',
    icon: Syringe,
    featured: true,
    requiresScreening: true,
    short: 'Pengajuan layanan infus untuk keluhan lambung dan mual, dengan skrining dan verifikasi instruksi medis.',
    description: 'Ajukan kunjungan untuk keluhan lambung dan mual. Kebutuhan tindakan dan rincian terapi akan dikonfirmasi setelah skrining serta verifikasi instruksi medis. Harga dan durasi diinformasikan sebelum kunjungan dikonfirmasi.',
    includes: ['Skrining awal', 'Verifikasi instruksi medis', 'Konfirmasi rencana layanan'],
  },
  {
    id: 'cek-tanda-vital',
    name: 'Cek Tanda Vital',
    category: 'Monitoring',
    price: 125000,
    duration: '30 menit',
    icon: Activity,
    featured: true,
    requiresScreening: false,
    short: 'Pemeriksaan tekanan darah, nadi, suhu, respirasi, dan saturasi oksigen.',
    description: 'Pemeriksaan tanda vital dasar di rumah untuk pemantauan berkala atau sebagai bagian dari observasi kondisi pasien.',
    includes: ['Tekanan darah', 'Nadi', 'Suhu', 'Laju napas', 'Saturasi oksigen'],
  },
]

export const formatRupiah = (value) =>
  value == null ? 'Harga dikonfirmasi' : new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value)
