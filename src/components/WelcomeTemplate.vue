<!-- src/components/WelcomeTemplate.vue -->
<template>
  <div style="font-family: Arial, sans-serif; color: #2d3748; line-height: 1.6; font-size: 11pt;">

    <!-- HEADER -->
    <div style="border-bottom: 2px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 24px;">
      <h2 style="color: #4338ca; font-size: 18pt; font-weight: bold; margin: 0 0 4px;">
        📄 Collaboration Guide & Client Welcome Packet
      </h2>
      <p style="color: #4a5568; font-size: 12pt; font-weight: bold; margin: 0;">
        Fullstack Development Services
      </p>
      <p style="color: #718096; font-size: 10pt; margin: 6px 0 0;">
        Dokumen untuk: <strong>{{ c.namaKlien }}</strong> &nbsp;|&nbsp;
        Ref: {{ c.nomorSurat }}
      </p>
    </div>

    <!-- 1. PENDAHULUAN -->
    <h3 style="color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 0;">
      1. Pendahuluan
    </h3>
    <p>
      Terima kasih telah mempercayakan pengelolaan sistem Anda kepada saya. Dokumen ini
      disusun untuk memastikan kerja sama kita berjalan transparan, efisien, dan profesional.
      Fokus utama saya adalah memastikan sistem Anda tidak hanya berjalan, tetapi juga
      stabil dan aman untuk jangka panjang.
    </p>

    <!-- 2. MENGAPA BEKERJA SAMA -->
    <h3 style="color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 20px;">
      2. Mengapa Bekerja Sama dengan Saya?
    </h3>
    <ul style="margin-top: 5px; margin-bottom: 10px;">
      <li style="margin-bottom: 6px;">
        <strong>Kestabilan Sebagai Prioritas:</strong> Saya menganut prinsip
        <em>"Stability First"</em>. Setiap perbaikan dilakukan dengan mempertimbangkan
        keamanan dan performa sistem secara keseluruhan.
      </li>
      <li style="margin-bottom: 6px;">
        <strong>Fullstack Proficiency:</strong> Menangani kendala dari sisi tampilan
        (frontend), logika server (backend), hingga arsitektur database.
      </li>
      <li style="margin-bottom: 6px;">
        <strong>Transparansi Teknis:</strong> Setiap pengerjaan disertai dengan laporan
        log yang jelas, memudahkan Anda melakukan tracing di masa mendatang.
      </li>
    </ul>

    <!-- 3. BATASAN KERJA -->
    <h3 style="color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 20px;">
      3. Batasan Kerja (Scope of Work)
    </h3>
    <p>Untuk menjaga fokus pengerjaan, berikut adalah pembagian kategori pekerjaan:</p>
    <ul style="margin-top: 5px; margin-bottom: 10px;">
      <li style="margin-bottom: 6px;">
        <strong>Bug Fixing:</strong> Perbaikan terhadap fitur yang sudah ada namun
        mengalami kendala fungsi atau error.
      </li>
      <li style="margin-bottom: 6px;">
        <strong>Enhancement (Fitur Baru):</strong> Permintaan fungsi baru yang belum ada
        di sistem akan dihitung sebagai pengembangan terpisah (bukan bagian dari
        perbaikan bug).
      </li>
      <li style="margin-bottom: 6px;">
        <strong>Masa Garansi:</strong> Dukungan gratis untuk setiap kode yang baru saya
        kerjakan jika ditemukan error dalam kurun waktu 30 hari pasca-serah terima.
      </li>
    </ul>

    <!-- 4. RATE CARD -->
    <h3 style="color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 20px;">
      4. Skema Fee & Tingkat Kesulitan (Rate Card)
    </h3>
    <p>
      Biaya perbaikan ditentukan berdasarkan kompleksitas investigasi dan dampak
      perbaikan pada sistem.
    </p>
    <table style="width: 100%; border-collapse: collapse; margin-top: 12px; margin-bottom: 16px; font-size: 10.5pt;">
      <thead>
        <tr style="background-color: #edf2f7; text-align: left;">
          <th style="padding: 10px; border: 1px solid #cbd5e0; width: 18%;">Kategori</th>
          <th style="padding: 10px; border: 1px solid #cbd5e0; width: 50%;">Deskripsi & Kriteria</th>
          <th style="padding: 10px; border: 1px solid #cbd5e0; width: 32%;">Estimasi Biaya</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px; border: 1px solid #cbd5e0;"><strong>Tier 1: Trivial</strong></td>
          <td style="padding: 10px; border: 1px solid #cbd5e0;">Perbaikan teks, ganti logo, update konten statis, perubahan CSS ringan.</td>
          <td style="padding: 10px; border: 1px solid #cbd5e0;">{{ c.tier1 }}</td>
        </tr>
        <tr style="background-color: #f7fafc;">
          <td style="padding: 10px; border: 1px solid #cbd5e0;"><strong>Tier 2: Minor</strong></td>
          <td style="padding: 10px; border: 1px solid #cbd5e0;">Perbaikan logika sederhana, pencegahan error null, validasi input.</td>
          <td style="padding: 10px; border: 1px solid #cbd5e0;">{{ c.tier2 }}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #cbd5e0;"><strong>Tier 3: Major</strong></td>
          <td style="padding: 10px; border: 1px solid #cbd5e0;">Perbaikan alur bisnis, optimasi database, integrasi API pihak ketiga.</td>
          <td style="padding: 10px; border: 1px solid #cbd5e0;">{{ c.tier3 }}</td>
        </tr>
        <tr style="background-color: #f7fafc;">
          <td style="padding: 10px; border: 1px solid #cbd5e0;"><strong>Tier 4: Critical</strong></td>
          <td style="padding: 10px; border: 1px solid #cbd5e0;">Sistem mati (down), kebocoran data, fitur utama tidak berfungsi.</td>
          <td style="padding: 10px; border: 1px solid #cbd5e0; color: #c53030;"><strong>{{ c.tier4 }}</strong></td>
        </tr>
      </tbody>
    </table>

    <!-- 5. PAKET RETAINER — DINAMIS -->
    <h3 style="color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 20px;">
      5. Paket Pemeliharaan Rutin (Monthly Retainer)
    </h3>
    <p>
      Harga paket dihitung secara transparan berdasarkan nilai tiket yang berlaku,
      dengan diskon komitmen untuk berlangganan bulanan.
    </p>

    <!-- Tabel perbandingan paket -->
    <table style="width: 100%; border-collapse: collapse; margin-top: 12px; margin-bottom: 8px; font-size: 10pt;">
      <thead>
        <tr style="background-color: #4338ca; color: #fff; text-align: left;">
          <th style="padding: 10px; border: 1px solid #4338ca; width: 28%;">Komponen</th>
          <th style="padding: 10px; border: 1px solid #818cf8; width: 24%; text-align: center;">
            Basic Standby
          </th>
          <th style="padding: 10px; border: 1px solid #818cf8; width: 24%; text-align: center;">
            Standard Support
          </th>
          <th style="padding: 10px; border: 1px solid #818cf8; width: 24%; text-align: center;">
            Professional
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; color: #555;">Monitoring & Uptime</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center;">✓</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center;">✓</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center;">✓</td>
        </tr>
        <tr style="background-color: #f7fafc;">
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; color: #555;">Tiket Tier 1</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center;">3 tiket</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center;">5 tiket</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-weight: bold;">Unlimited</td>
        </tr>
        <tr>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; color: #555;">Tiket Tier 2</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center;">1 tiket</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center;">2 tiket</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-weight: bold;">Unlimited</td>
        </tr>
        <tr style="background-color: #f7fafc;">
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; color: #555;">Tiket Tier 3</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; color: #94a3b8;">—</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center;">1 tiket</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-weight: bold;">Unlimited</td>
        </tr>
        <tr>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; color: #555;">Tier 4 (Critical)</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt; color: #c53030;">Tagih terpisah</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt; color: #c53030;">Tagih terpisah</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt; color: #c53030;">Diskon 15%</td>
        </tr>
        <tr style="background-color: #f7fafc;">
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; color: #555;">Response Time</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt;">2–3 hari kerja</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt;">1–2 hari kerja</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt; font-weight: bold;">&lt; 24 jam</td>
        </tr>
        <tr>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; color: #555;">Rollover Tiket</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt;">Max 1 bulan</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt;">Max 1 bulan</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt;">—</td>
        </tr>
        <tr>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; color: #555;">Konsultasi Fitur</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; color: #94a3b8;">—</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; color: #94a3b8;">—</td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center;">✓</td>
        </tr>

        <!-- BARIS NILAI ASLI -->
        <tr style="background-color: #fef9c3;">
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; font-weight: bold; font-size: 9.5pt;">
            Nilai Asli (jika beli satuan)
          </td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-weight: bold; font-size: 9.5pt; color: #92400e;">
            {{ fmt(paket.basic.nilaiAsli) }}
          </td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-weight: bold; font-size: 9.5pt; color: #92400e;">
            {{ fmt(paket.standard.nilaiAsli) }}
          </td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-weight: bold; font-size: 9.5pt; color: #92400e;">
            {{ fmt(paket.professional.nilaiAsli) }}+
          </td>
        </tr>

        <!-- BARIS HARGA PAKET -->
        <tr style="background-color: #4338ca; color: #fff;">
          <td style="padding: 11px 10px; border: 1px solid #4338ca; font-weight: bold;">
            Harga Paket / bulan
          </td>
          <td style="padding: 11px 10px; border: 1px solid #818cf8; text-align: center; font-weight: bold; font-size: 11pt;">
            {{ fmt(paket.basic.harga) }}
          </td>
          <td style="padding: 11px 10px; border: 1px solid #818cf8; text-align: center; font-weight: bold; font-size: 11pt;">
            {{ fmt(paket.standard.harga) }}
          </td>
          <td style="padding: 11px 10px; border: 1px solid #818cf8; text-align: center; font-weight: bold; font-size: 11pt;">
            {{ fmt(paket.professional.harga) }}
          </td>
        </tr>

        <!-- BARIS HEMAT -->
        <tr style="background-color: #f0fdf4;">
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; color: #166534; font-weight: bold; font-size: 9.5pt;">
            Klien hemat
          </td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; color: #166534; font-weight: bold;">
            {{ fmt(paket.basic.hemat) }} (~{{ paket.basic.diskon }}%)
          </td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; color: #166534; font-weight: bold;">
            {{ fmt(paket.standard.hemat) }} (~{{ paket.standard.diskon }}%)
          </td>
          <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; color: #166534; font-weight: bold;">
            {{ fmt(paket.professional.hemat) }} (~{{ paket.professional.diskon }}%)
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Catatan transparansi -->
    <div style="background: #eff6ff; border-left: 3px solid #3b82f6; padding: 10px 14px; border-radius: 4px; margin-bottom: 16px; font-size: 9.5pt; color: #1e40af;">
      <strong>Catatan transparansi:</strong> Harga paket dihitung dari nilai minimum tiket yang berlaku.
      Jika tier berubah di masa mendatang, harga paket akan disesuaikan dengan pemberitahuan 30 hari sebelumnya.
    </div>

    <!-- 6. ALUR KERJA -->
    <h3 style="color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 20px;">
      6. Alur Kerja Sama
    </h3>
    <ol style="margin-top: 5px; margin-bottom: 10px;">
      <li style="margin-bottom: 6px;"><strong>Laporan Kendala:</strong> Klien mengirimkan detail bug atau isu yang ditemukan.</li>
      <li style="margin-bottom: 6px;"><strong>Analisa &amp; Tiering:</strong> Saya melakukan pengecekan singkat untuk menentukan kategori Tier dan estimasi biaya.</li>
      <li style="margin-bottom: 6px;"><strong>Konfirmasi &amp; Eksekusi:</strong> Pengerjaan dimulai setelah persetujuan (atau menggunakan kuota paket bulanan).</li>
      <li style="margin-bottom: 6px;"><strong>Laporan Selesai:</strong> Penyerahan hasil kerja disertai laporan teknis dan pengetesan.</li>
    </ol>

    <!-- 7. GARANSI -->
    <h3 style="color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 20px;">
      7. Kebijakan Garansi & Rollover
    </h3>
    <p>
      Setiap pekerjaan dilindungi <strong>Masa Garansi 30 Hari</strong> sejak serah terima.
      Kendala pada fitur yang baru diperbaiki ditangani tanpa biaya tambahan.
    </p>
    <p style="margin-top: 8px;">
      <strong>Klausul Rollover Tiket:</strong> Sisa tiket yang tidak terpakai dapat
      diakumulasikan maksimal 1 bulan berikutnya. Tiket tidak digunakan setelah
      2 bulan berturut-turut dianggap hangus dan tidak dapat diuangkan kembali.
    </p>
    <p style="margin-top: 8px;">
      <strong>Klausul Freeze:</strong> Apabila tidak ada permintaan selama 2 bulan
      berturut-turut, PIHAK KEDUA berhak mengajukan evaluasi ulang kontrak atau
      mengalihkan slot prioritas ke klien lain.
    </p>

    <!-- 8. PEMBAYARAN -->
    <h3 style="color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 20px;">
      8. Info Pembayaran
    </h3>
    <table style="width: 60%; border-collapse: collapse; margin-top: 10px; font-size: 10.5pt;">
      <tr style="background-color: #edf2f7;">
        <th style="padding: 8px 12px; border: 1px solid #cbd5e0; text-align: left; width: 35%;">Bank</th>
        <td style="padding: 8px 12px; border: 1px solid #cbd5e0;">{{ c.namaBank }}</td>
      </tr>
      <tr>
        <th style="padding: 8px 12px; border: 1px solid #cbd5e0; text-align: left; background-color: #f7fafc;">No. Rekening</th>
        <td style="padding: 8px 12px; border: 1px solid #cbd5e0;"><strong>{{ c.noRek }}</strong></td>
      </tr>
      <tr style="background-color: #edf2f7;">
        <th style="padding: 8px 12px; border: 1px solid #cbd5e0; text-align: left;">Atas Nama</th>
        <td style="padding: 8px 12px; border: 1px solid #cbd5e0;">{{ c.atasNama }}</td>
      </tr>
    </table>

    <!-- FOOTER -->
    <div style="margin-top: 40px; padding-top: 16px; border-top: 2px solid #e2e8f0;">
      <p style="margin: 0; color: #4a5568; font-weight: bold;">
        Kontak &amp; Informasi Lanjut:
      </p>
      <p style="margin: 4px 0 0; color: #718096; font-size: 10.5pt;">
        {{ c.namaDev }} – Fullstack Developer
      </p>
      <p style="margin: 8px 0 0; color: #a0aec0; font-size: 9.5pt;">
        Ref. Kontrak: {{ c.nomorSurat }} &nbsp;|&nbsp;
        Masa Berlaku: {{ c.jangkaWaktu }} &nbsp;|&nbsp;
        {{ c.lokasi }}, {{ c.tanggal }} {{ c.bulan }} {{ c.tahun }}
      </p>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  c: { type: Object, required: true }
})

// Ambil harga tier dari Firestore (atau fallback default)
const th = computed(() => props.c.tierHarga ?? {
  tier1: 200000, tier2: 400000, tier3: 1000000, tier4: 2500000, monitoring: 400000
})

// Override manual dari owner (jika ada)
const ov = computed(() => props.c.welcomeData?.overridePaket ?? {
  basic: null, standard: null, professional: null
})

// Kalkulasi otomatis tiap paket dari nilai minimum tier
const paket = computed(() => {
  const t = th.value

  // BASIC: monitoring + 3x T1 + 1x T2
  const basicNilai  = t.monitoring + (3 * t.tier1) + (1 * t.tier2)
  const basicHarga  = ov.value.basic ?? bulatkan(basicNilai * 0.80) // diskon 20%
  const basicHemat  = basicNilai - basicHarga
  const basicDiskon = Math.round((basicHemat / basicNilai) * 100)

  // STANDARD: monitoring + 5x T1 + 2x T2 + 1x T3
  const stdNilai  = t.monitoring + (5 * t.tier1) + (2 * t.tier2) + (1 * t.tier3)
  const stdHarga  = ov.value.standard ?? bulatkan(stdNilai * 0.65) // diskon 35%
  const stdHemat  = stdNilai - stdHarga
  const stdDiskon = Math.round((stdHemat / stdNilai) * 100)

  // PROFESSIONAL: monitoring + 8x T1 + 4x T2 + 2x T3 (unlimited dikira kuota besar)
  const proNilai  = t.monitoring + (8 * t.tier1) + (4 * t.tier2) + (2 * t.tier3)
  const proHarga  = ov.value.professional ?? bulatkan(proNilai * 0.60) // diskon 40%
  const proHemat  = proNilai - proHarga
  const proDiskon = Math.round((proHemat / proNilai) * 100)

  return {
    basic:        { nilaiAsli: basicNilai, harga: basicHarga, hemat: basicHemat, diskon: basicDiskon },
    standard:     { nilaiAsli: stdNilai,   harga: stdHarga,   hemat: stdHemat,   diskon: stdDiskon },
    professional: { nilaiAsli: proNilai,   harga: proHarga,   hemat: proHemat,   diskon: proDiskon },
  }
})

// Bulatkan ke kelipatan 50.000 terdekat (lebih rapi untuk harga)
function bulatkan(angka) {
  return Math.ceil(angka / 50000) * 50000
}

// Format Rupiah
function fmt(angka) {
  return 'Rp ' + angka.toLocaleString('id-ID')
}
</script>