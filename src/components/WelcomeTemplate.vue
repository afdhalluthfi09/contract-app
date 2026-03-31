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
          <th style="padding: 10px; border: 1px solid #cbd5e0; width: 18%;">Kategori Bug</th>
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
          <td style="padding: 10px; border: 1px solid #cbd5e0;">Perbaikan logika sederhana, pencegahan error null, validasi input, perbaikan notifikasi (WA/Email).</td>
          <td style="padding: 10px; border: 1px solid #cbd5e0;">{{ c.tier2 }}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #cbd5e0;"><strong>Tier 3: Major</strong></td>
          <td style="padding: 10px; border: 1px solid #cbd5e0;">Perbaikan alur bisnis (flow), optimasi query database, integrasi API pihak ketiga (Wablas, dll).</td>
          <td style="padding: 10px; border: 1px solid #cbd5e0;">{{ c.tier3 }}</td>
        </tr>
        <tr style="background-color: #f7fafc;">
          <td style="padding: 10px; border: 1px solid #cbd5e0;"><strong>Tier 4: Critical</strong></td>
          <td style="padding: 10px; border: 1px solid #cbd5e0;">Sistem mati (down), kebocoran data, atau fitur utama tidak dapat digunakan.</td>
          <td style="padding: 10px; border: 1px solid #cbd5e0; color: #c53030;"><strong>{{ c.tier4 }}</strong></td>
        </tr>
      </tbody>
    </table>

    <!-- 5. PAKET RETAINER -->
    <h3 style="color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 20px;">
      5. Paket Pemeliharaan Rutin (Monthly Retainer)
    </h3>
    <p>Cocok untuk sistem yang membutuhkan pemantauan proaktif secara berkala.</p>
    <ul style="margin-top: 5px; margin-bottom: 10px;">
      <li style="margin-bottom: 8px;">
        <strong>Paket Basic Standby (Rp 1.500.000 / bln):</strong>
        Monitoring Server &amp; Error Log. Pengecekan Uptime rutin.
        Gratis 2 Tiket Perbaikan Tier 1.
      </li>
      <li style="margin-bottom: 8px;">
        <strong>Paket Standard Support (Rp 3.000.000 / bln):</strong>
        Monitoring Proaktif &amp; Optimasi Database.
        Gratis 3 Tiket Tier 1 &amp; 1 Tiket Tier 2.
      </li>
      <li style="margin-bottom: 8px;">
        <strong>Paket Professional (Custom):</strong>
        Prioritas pengerjaan &lt; 24 jam.
        Penanganan Critical Bug &amp; Konsultasi Pengembangan Fitur.
      </li>
    </ul>

    <!-- 6. ALUR KERJA SAMA -->
    <h3 style="color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 20px;">
      6. Alur Kerja Sama
    </h3>
    <ol style="margin-top: 5px; margin-bottom: 10px;">
      <li style="margin-bottom: 6px;">
        <strong>Laporan Kendala:</strong> Klien mengirimkan detail bug atau isu yang ditemukan.
      </li>
      <li style="margin-bottom: 6px;">
        <strong>Analisa &amp; Tiering:</strong> Saya melakukan pengecekan singkat untuk
        menentukan kategori Tier dan estimasi biaya.
      </li>
      <li style="margin-bottom: 6px;">
        <strong>Konfirmasi &amp; Eksekusi:</strong> Pengerjaan dimulai setelah persetujuan
        (atau menggunakan kuota paket bulanan).
      </li>
      <li style="margin-bottom: 6px;">
        <strong>Laporan Selesai:</strong> Penyerahan hasil kerja disertai laporan teknis
        dan pengetesan.
      </li>
    </ol>

    <!-- 7. GARANSI -->
    <h3 style="color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 20px;">
      7. Kebijakan Garansi 30 Hari
    </h3>
    <p>
      Setiap pekerjaan yang saya selesaikan dilindungi oleh <strong>Masa Garansi &amp;
      Standby selama 30 Hari</strong>. Jika dalam kurun waktu tersebut ditemukan kendala
      pada fitur yang baru saja diperbaiki, saya akan melakukan penanganan kembali tanpa
      biaya tambahan.
    </p>

    <!-- INFO PEMBAYARAN -->
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
defineProps({
  c: { type: Object, required: true }
})
</script>