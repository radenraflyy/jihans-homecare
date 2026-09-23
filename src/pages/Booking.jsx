import { CheckCircle2, ChevronRight, MapPin, Navigation } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { formatRupiah, services } from "../data/services";

const empty = {
  patientName: "",
  phone: "",
  address: "",
  mapLink: "",
  date: "",
  time: "09:00",
  notes: "",
};
const WHATSAPP_NUMBER = "6285126373252";

export default function Booking() {
  const [params] = useSearchParams();
  const initial = params.get("service") || services[0].id;
  const [serviceId, setServiceId] = useState(initial);
  const [form, setForm] = useState(empty);
  const [done, setDone] = useState(false);
  const [locationError, setLocationError] = useState("");
  const service = useMemo(
    () => services.find((s) => s.id === serviceId),
    [serviceId],
  );

  const update = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Browser ini belum mendukung lokasi otomatis.");
      return;
    }
    setLocationError("Mengambil lokasi...");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setForm((current) => ({
          ...current,
          mapLink: `https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`,
        }));
        setLocationError("Lokasi berhasil ditambahkan.");
      },
      () =>
        setLocationError(
          "Lokasi tidak bisa diakses. Izinkan akses lokasi atau tempel link Maps secara manual.",
        ),
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  const submit = (event) => {
    event.preventDefault();
    const message = [
      "*ORDER BOOKING JIHAN'S HOMECARE*",
      "",
      `Layanan: ${service.name}`,
      `Harga: ${formatRupiah(service.price)}`,
      `Nama pasien: ${form.patientName}`,
      `No. WhatsApp: ${form.phone}`,
      `Alamat kunjungan: ${form.address}`,
      `Link lokasi Maps: ${form.mapLink || "-"}`,
      `Tanggal: ${form.date}`,
      `Jam: ${form.time}`,
      `Catatan: ${form.notes || "-"}`,
    ].join("\n");
    const target = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(target, "_blank", "noopener,noreferrer");
    setDone(true);
  };

  if (done)
    return (
      <section className="container-app max-w-2xl py-20">
        <div className="card p-8 text-center">
          <CheckCircle2 className="mx-auto text-pink-700" size={52} />
          <h1 className="mt-5 text-3xl font-black">Order siap dikirim</h1>
          <p className="mt-3 leading-7 text-slate-600">
            Detail booking <b>{service.name}</b> sudah dibuka di WhatsApp.
            Silakan tekan tombol kirim di WhatsApp agar tim menerima permintaan
            Anda.
          </p>
          <button
            className="btn-primary mt-7"
            onClick={() => {
              setDone(false);
              setForm(empty);
            }}
          >
            Buat booking lain
          </button>
        </div>
      </section>
    );

  return (
    <section className="container-app py-14">
      <div className="max-w-2xl">
        <p className="eyebrow">Booking layanan</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight">
          Jadwalkan kunjungan
        </h1>
        <p className="mt-4 text-slate-600">
          Isi data dasar pasien. Tim akan melakukan verifikasi sebelum layanan
          dikonfirmasi.
        </p>
      </div>
      <form
        onSubmit={submit}
        className="mt-8 grid gap-7 lg:grid-cols-[1fr_360px]"
      >
        <div className="card p-6 sm:p-8">
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-bold">Pilih layanan</span>
              <select
                value={serviceId}
                onChange={(event) => setServiceId(event.target.value)}
                className="rounded-2xl border border-slate-200 bg-white p-3.5"
              >
                {services.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-bold">Nama pasien</span>
                <input
                  required
                  name="patientName"
                  value={form.patientName}
                  onChange={update}
                  className="rounded-2xl border border-slate-200 p-3.5"
                  placeholder="Nama lengkap"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold">No. WhatsApp</span>
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  className="rounded-2xl border border-slate-200 p-3.5"
                  placeholder="08xxxxxxxxxx"
                />
              </label>
            </div>
            <label className="grid gap-2">
              <span className="text-sm font-bold">Alamat kunjungan</span>
              <textarea
                required
                name="address"
                value={form.address}
                onChange={update}
                rows="3"
                className="rounded-2xl border border-slate-200 p-3.5"
                placeholder="Alamat lengkap dan patokan"
              />
            </label>
            <div className="grid gap-3">
              <span className="text-sm font-bold">
                Lokasi di Maps{" "}
                <span className="font-normal text-slate-500">
                  (opsional, tapi sangat membantu)
                </span>
              </span>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="url"
                  name="mapLink"
                  value={form.mapLink}
                  onChange={(event) => {
                    setLocationError("");
                    update(event);
                  }}
                  className="min-w-0 flex-1 rounded-2xl border border-slate-200 p-3.5"
                  placeholder="Tempel link Google Maps di sini"
                />
                <button
                  type="button"
                  onClick={useCurrentLocation}
                  className="btn-secondary shrink-0"
                >
                  <Navigation size={18} /> Gunakan lokasi saya
                </button>
              </div>
              {locationError && (
                <p className="text-sm text-slate-500">{locationError}</p>
              )}
              <p className="flex items-center gap-2 text-xs leading-5 text-slate-500">
                <MapPin size={15} className="shrink-0 text-pink-700" />
                Bisa gunakan tombol lokasi atau salin link lokasi dari Google
                Maps.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-bold">Tanggal</span>
                <input
                  required
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={update}
                  className="rounded-2xl border border-slate-200 p-3.5"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold">Jam pilihan</span>
                <select
                  name="time"
                  value={form.time}
                  onChange={update}
                  className="rounded-2xl border border-slate-200 p-3.5"
                >
                  {["09:00", "11:00", "13:00", "15:00", "17:00"].map((time) => (
                    <option key={time}>{time}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="grid gap-2">
              <span className="text-sm font-bold">
                Kondisi / kebutuhan pasien
              </span>
              <textarea
                required
                name="notes"
                value={form.notes}
                onChange={update}
                rows="4"
                className="rounded-2xl border border-slate-200 p-3.5"
                placeholder="Contoh: pasien baru pulang operasi, perlu ganti balutan..."
              />
            </label>
          </div>
        </div>
        <aside className="card h-fit p-6 lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-wider text-pink-700">
            Ringkasan
          </p>
          <h2 className="mt-2 text-xl font-black">{service.name}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            {service.short}
          </p>
          <div className="my-5 border-t border-slate-100" />
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Estimasi mulai</span>
            <b>{formatRupiah(service.price)}</b>
          </div>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-xs leading-5 text-slate-600">
            Status awal booking: <b>Menunggu konfirmasi</b>. Layanan tertentu
            memerlukan skrining atau dokumen medis.
          </div>
          <button className="btn-primary mt-5 w-full" type="submit">
            Kirim Booking <ChevronRight size={17} />
          </button>
        </aside>
      </form>
    </section>
  );
}
