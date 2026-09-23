# Jihan's HomeCare — MVP

Front-end prototype untuk bisnis digital layanan keperawatan home care.

## Stack
- React
- Vite
- Tailwind CSS
- React Router
- Lucide React

## Fitur MVP
- Landing page
- Katalog layanan keperawatan
- Detail layanan dan indikator skrining
- Booking flow dengan data mock
- Admin dashboard dengan data mock
- Responsive navigation

## Menjalankan
```bash
npm install
npm run dev
```

Build production:
```bash
npm run build
```

## Deployment dan direct link
Deployment Vercel memakai `vercel.json` di root proyek untuk mengarahkan
request halaman ke `index.html`. React Router kemudian memilih halaman sesuai
URL, sehingga membuka langsung atau refresh `/profile`, `/booking`,
`/services/:id`, dan `/dashboard` tidak menghasilkan 404 dari hosting.
Pastikan file ini ikut di-commit dan di-push, lalu deploy versi terbaru.

## Catatan implementasi berikutnya
1. Backend/API + database
2. Authentication admin/customer
3. Area layanan dan ongkir/visit fee
4. Appointment availability
5. Clinical screening workflow
6. Upload resep/dokumen medis bila dibutuhkan
7. WhatsApp notification
8. Payment gateway
9. Audit log & role-based access
10. Privacy/security untuk data pasien

> Prototype ini tidak memutuskan kelayakan medis. Booking layanan klinis tertentu tetap memerlukan skrining/verifikasi.
