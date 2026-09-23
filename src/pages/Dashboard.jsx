import { CalendarDays, CircleDollarSign, Clock3, Users } from "lucide-react";
import { formatRupiah } from "../data/services";
const bookings = [
  {
    id: "JHC-1024",
    name: "Nadia",
    service: "Cek Tanda Vital",
    date: "24 Sep 2026 • 09:00",
    status: "Terkonfirmasi",
    price: 125000,
  },
  {
    id: "JHC-1025",
    name: "Budi",
    service: "Infus Vitamin",
    date: "24 Sep 2026 • 13:00",
    status: "Perlu skrining",
    price: 250000,
  },
  {
    id: "JHC-1026",
    name: "Ratna",
    service: "Infus Lambung & Mual",
    date: "25 Sep 2026 • 11:00",
    status: "Menunggu",
    price: null,
  },
  {
    id: "JHC-1027",
    name: "Ari",
    service: "Cek Tanda Vital",
    date: "25 Sep 2026 • 15:00",
    status: "Terkonfirmasi",
    price: 125000,
  },
];
export default function Dashboard() {
  return (
    <section className="container-app py-8 sm:py-12">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Admin dashboard</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Operasional hari ini
          </h1>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600">
          Prototype • data mock
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          [CalendarDays, "4", "Booking aktif"],
          [Clock3, "2", "Menunggu review"],
          [Users, "4", "Pasien terjadwal"],
          [
            CircleDollarSign,
            formatRupiah(
              bookings.reduce(
                (total, booking) => total + (booking.price ?? 0),
                0,
              ),
            ),
            "Estimasi diketahui (3 booking)",
          ],
        ].map(([Icon, v, l]) => (
          <div key={l} className="card p-5">
            <Icon className="text-teal-700" />
            <div className="mt-4 text-2xl font-black">{v}</div>
            <div className="mt-1 text-sm text-slate-500">{l}</div>
          </div>
        ))}
      </div>
      <div className="card mt-7 overflow-hidden">
        <div className="border-b border-slate-100 p-6">
          <h2 className="text-xl font-black">Booking terbaru</h2>
          <p className="mt-1 text-sm text-slate-500">
            Kelola status, skrining, dan jadwal kunjungan.
          </p>
        </div>
        <div className="divide-y divide-slate-100 md:hidden">
          {bookings.map((b) => (
            <article key={b.id} className="p-4 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-bold">{b.id}</p>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${b.status === "Terkonfirmasi" ? "bg-emerald-50 text-emerald-700" : b.status === "Perlu skrining" ? "bg-amber-50 text-amber-800" : "bg-slate-100 text-slate-700"}`}
                >
                  {b.status}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{b.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{b.service}</p>
              <dl className="mt-4 grid gap-3 text-sm">
                <div>
                  <dt className="text-xs text-slate-500">Jadwal kunjungan</dt>
                  <dd className="mt-1">{b.date}</dd>
                </div>
                <div className="flex flex-wrap justify-between gap-2 border-t border-slate-100 pt-3">
                  <dt className="text-slate-500">Nilai booking</dt>
                  <dd className="font-bold">{formatRupiah(b.price)}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-6 py-4">Booking</th>
                <th className="px-6 py-4">Pasien</th>
                <th className="px-6 py-4">Layanan</th>
                <th className="px-6 py-4">Jadwal</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Nilai</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id} className="border-t border-slate-100">
                  <td className="px-6 py-4 font-bold">{b.id}</td>
                  <td className="px-6 py-4">{b.name}</td>
                  <td className="px-6 py-4">{b.service}</td>
                  <td className="px-6 py-4 text-slate-500">{b.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-bold ${b.status === "Terkonfirmasi" ? "bg-emerald-50 text-emerald-700" : b.status === "Perlu skrining" ? "bg-amber-50 text-amber-800" : "bg-slate-100 text-slate-700"}`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold">
                    {formatRupiah(b.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
