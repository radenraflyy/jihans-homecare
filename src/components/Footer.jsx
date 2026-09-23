import BrandMark from './BrandMark';
export default function Footer() {
  return (
    <footer className="mt-10 border-t sm:mt-20 border-slate-200 bg-white">
      <div className="container-app grid gap-8 py-10 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 font-extrabold">
            <BrandMark className="size-9" /> Jihan's HomeCare
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
            Platform pemesanan layanan keperawatan di rumah. Layanan klinis
            tetap mengikuti hasil skrining, kewenangan tenaga kesehatan, dan
            instruksi medis bila diperlukan.
          </p>
        </div>
        <div className="text-sm text-slate-500 md:text-right">
          <p className="mt-2">© 2026 Jihan's HomeCare</p>
        </div>
      </div>
    </footer>
  );
}
