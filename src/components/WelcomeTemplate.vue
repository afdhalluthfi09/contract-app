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
        <strong>Perbaikan dalam masa garansi tidak memotong kuota tiket bulanan.</strong>
      </li>
    </ul>

    <!-- RULE OF THUMB: BUG VS ENHANCEMENT -->
    <div style="background: #f0fdf4; border-left: 3px solid #16a34a; padding: 10px 14px; border-radius: 4px; margin: 12px 0; font-size: 9.5pt; color: #166534;">
      <strong>Rule of Thumb — Bug vs Enhancement:</strong><br>
      Jika fitur <strong>berhenti berfungsi seperti seharusnya</strong> = Bug (masuk scope perbaikan).<br>
      Jika <strong>mengubah atau menambah cara kerja</strong> fitur yang sudah ada = Enhancement (dihitung tiket/addendum baru).<br>
      Jika ragu, sampaikan deskripsi masalahnya dan saya akan bantu kategorikan sebelum ada biaya apapun yang berjalan.
    </div>

    <!-- DEFINISI 1 TIKET -->
    <div style="background: #eff6ff; border-left: 3px solid #3b82f6; padding: 10px 14px; border-radius: 4px; margin: 12px 0; font-size: 9.5pt; color: #1e40af;">
      <strong>Definisi "1 Tiket":</strong> Satu tiket = satu permasalahan dengan satu akar penyebab
      (<em>root cause</em>). Permasalahan berbeda yang dikirim dalam satu pesan tetap dihitung
      sebagai tiket terpisah. Sebaliknya, developer tidak akan memecah satu masalah yang saling
      terkait menjadi tiket-tiket terpisah.
    </div>

    <!-- 4. RATE CARD -->
    <h3 style="color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 20px;">
      4. Skema Fee & Tingkat Kesulitan (Rate Card)
    </h3>
    <p>
      Biaya perbaikan ditentukan berdasarkan kompleksitas investigasi dan dampak
      perbaikan pada sistem.
    </p>
    <div style="overflow-x: auto; -webkit-overflow-scrolling: touch;">
      <table style="width: 100%; border-collapse: collapse; margin-top: 12px; margin-bottom: 8px; font-size: 10.5pt;">
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
            <td style="padding: 10px; border: 1px solid #cbd5e0;">
              Perubahan UI, teks, aset statis, CSS ringan, dan typo pada pesan/label
              yang tidak mempengaruhi logika sistem.
            </td>
            <td style="padding: 10px; border: 1px solid #cbd5e0;">{{ c.tier1 }}</td>
          </tr>
          <tr style="background-color: #f7fafc;">
            <td style="padding: 10px; border: 1px solid #cbd5e0;"><strong>Tier 2: Minor</strong></td>
            <td style="padding: 10px; border: 1px solid #cbd5e0;">
              Perbaikan logika sederhana, validasi input, konfigurasi API pihak ketiga,
              perbaikan urutan eksekusi fungsi, dan perbaikan response/status code
              yang menyebabkan perilaku tidak sesuai ekspektasi.
            </td>
            <td style="padding: 10px; border: 1px solid #cbd5e0;">{{ c.tier2 }}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #cbd5e0;"><strong>Tier 3: Major</strong></td>
            <td style="padding: 10px; border: 1px solid #cbd5e0;">
              Perbaikan alur bisnis lintas modul, optimasi database, redesign arsitektur
              integrasi API, penanganan race condition, dan perbaikan yang berdampak
              pada integritas data secara luas.
            </td>
            <td style="padding: 10px; border: 1px solid #cbd5e0;">{{ c.tier3 }}</td>
          </tr>
          <tr style="background-color: #f7fafc;">
            <td style="padding: 10px; border: 1px solid #cbd5e0;"><strong>Tier 4: Critical</strong></td>
            <td style="padding: 10px; border: 1px solid #cbd5e0;">
              Sistem tidak dapat digunakan (down), kebocoran atau kerusakan data,
              celah keamanan aktif yang sedang dieksploitasi.
            </td>
            <td style="padding: 10px; border: 1px solid #cbd5e0; color: #c53030;"><strong>{{ c.tier4 }}</strong></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #cbd5e0;"><strong>Diagnostic Fee</strong></td>
            <td style="padding: 10px; border: 1px solid #cbd5e0;">
              Investigasi yang hasilnya bukan dari sistem yang dikerjakan (gangguan
              pihak ketiga, kesalahan end-user, atau by design). Dikenakan biaya
              investigasi setara Tier 1.
            </td>
            <td style="padding: 10px; border: 1px solid #cbd5e0; color: #718096;">
              Setara Tier 1
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- JAM OPERASIONAL & RESPONSE TIME -->
    <div style="background: #fffbeb; border-left: 3px solid #d97706; padding: 10px 14px; border-radius: 4px; margin: 0 0 16px; font-size: 9.5pt; color: #92400e;">
      <strong>Jam Operasional & Response Time:</strong><br>
      Hari kerja: <strong>Senin – Jumat, 09:00 – 17:00 WIB</strong>.<br>
      Response Time dihitung dalam hari kerja — bukan waktu perbaikan selesai, melainkan
      waktu saya mengakui laporan dan mulai menganalisa.<br>
      <strong>Khusus Tier 4 (Critical)</strong> di luar hari kerja (termasuk Sabtu/Minggu):
      saya akan tetap mengusahakan respons darurat secepat mungkin karena saya memahami
      bahwa sistem bisnis tidak mengenal hari libur.
    </div>

    <!-- 5. PAKET RETAINER -->
    <h3 style="color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 20px;">
      5. Paket Pemeliharaan Rutin (Monthly Retainer)
    </h3>
    <p>
      Harga paket dihitung secara transparan berdasarkan nilai tiket yang berlaku —
      Anda bisa memverifikasi sendiri asal-usul setiap angka dari Rate Card di atas.
    </p>
    <div style="overflow-x: auto; -webkit-overflow-scrolling: touch;">
      <table style="width: 100%; border-collapse: collapse; margin-top: 12px; margin-bottom: 8px; font-size: 10pt;">
        <thead>
          <tr style="background-color: #4338ca; color: #fff; text-align: left;">
            <th style="padding: 10px; border: 1px solid #4338ca; width: 28%;">Komponen</th>
            <th style="padding: 10px; border: 1px solid #818cf8; width: 24%; text-align: center;">Basic Standby</th>
            <th style="padding: 10px; border: 1px solid #818cf8; width: 24%; text-align: center;">Standard Support</th>
            <th style="padding: 10px; border: 1px solid #818cf8; width: 24%; text-align: center;">Professional</th>
          </tr>
        </thead>
        <tbody>

          <!-- MONITORING -->
          <tr>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; color: #555;">
              Monitoring &amp; Uptime
              <div style="font-size: 8.5pt; color: #94a3b8; margin-top: 2px;">Server uptime, error log, backup cek rutin</div>
            </td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9.5pt;">
              ✓ <span style="color: #64748b;">({{ fmt(th.monitoring) }})</span>
            </td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9.5pt;">
              ✓ <span style="color: #64748b;">({{ fmt(th.monitoring) }})</span>
            </td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9.5pt;">
              ✓ <span style="color: #64748b;">({{ fmt(th.monitoring) }})</span>
            </td>
          </tr>

          <!-- TIER 1 -->
          <tr style="background-color: #f7fafc;">
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; color: #555;">
              Tiket Tier 1
              <div style="font-size: 8.5pt; color: #94a3b8; margin-top: 2px;">@ min. {{ fmt(th.tier1) }} / tiket</div>
            </td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center;">
              3 tiket
              <div style="font-size: 8.5pt; color: #94a3b8;">= {{ fmt(3 * th.tier1) }}</div>
            </td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center;">
              5 tiket
              <div style="font-size: 8.5pt; color: #94a3b8;">= {{ fmt(5 * th.tier1) }}</div>
            </td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-weight: bold;">
              Priority Unlimited
              <div style="font-size: 8.5pt; color: #94a3b8; font-weight: normal;">dalam slot prioritas</div>
            </td>
          </tr>

          <!-- TIER 2 -->
          <tr>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; color: #555;">
              Tiket Tier 2
              <div style="font-size: 8.5pt; color: #94a3b8; margin-top: 2px;">@ min. {{ fmt(th.tier2) }} / tiket</div>
            </td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center;">
              1 tiket
              <div style="font-size: 8.5pt; color: #94a3b8;">= {{ fmt(1 * th.tier2) }}</div>
            </td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center;">
              2 tiket
              <div style="font-size: 8.5pt; color: #94a3b8;">= {{ fmt(2 * th.tier2) }}</div>
            </td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-weight: bold;">
              Priority Unlimited
              <div style="font-size: 8.5pt; color: #94a3b8; font-weight: normal;">dalam slot prioritas</div>
            </td>
          </tr>

          <!-- TIER 3 -->
          <tr style="background-color: #f7fafc;">
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; color: #555;">
              Tiket Tier 3
              <div style="font-size: 8.5pt; color: #94a3b8; margin-top: 2px;">@ min. {{ fmt(th.tier3) }} / tiket</div>
            </td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; color: #94a3b8;">—</td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center;">
              1 tiket
              <div style="font-size: 8.5pt; color: #94a3b8;">= {{ fmt(1 * th.tier3) }}</div>
            </td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-weight: bold;">
              Maks. 3 tiket
              <div style="font-size: 8.5pt; color: #94a3b8; font-weight: normal;">= {{ fmt(3 * th.tier3) }}</div>
            </td>
          </tr>

          <!-- TIER 4 -->
          <tr>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; color: #555;">Tier 4 (Critical)</td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt; color: #c53030;">Tagih terpisah</td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt; color: #c53030;">Tagih terpisah</td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt; color: #c53030;">Diskon 15%</td>
          </tr>

          <!-- RESPONSE TIME -->
          <tr style="background-color: #f7fafc;">
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; color: #555;">
              Response Time
              <div style="font-size: 8.5pt; color: #94a3b8; margin-top: 2px;">Senin–Jumat, 09:00–17:00</div>
            </td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt;">2–3 hari kerja</td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt;">1–2 hari kerja</td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt; font-weight: bold;">
              &lt; 24 jam
              <div style="font-size: 8pt; color: #c4b5fd; font-weight: normal;">termasuk darurat weekend</div>
            </td>
          </tr>

          <!-- ROLLOVER -->
          <tr>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; color: #555;">Rollover Tiket</td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt;">Max 1 bulan</td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt;">Max 1 bulan</td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; font-size: 9pt; color: #94a3b8;">—</td>
          </tr>

          <!-- KONSULTASI -->
          <tr style="background-color: #f7fafc;">
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; color: #555;">Konsultasi Fitur</td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; color: #94a3b8;">—</td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center; color: #94a3b8;">—</td>
            <td style="padding: 9px 10px; border: 1px solid #cbd5e0; text-align: center;">✓</td>
          </tr>

          <!-- NILAI ASLI -->
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

          <!-- HARGA PAKET -->
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

          <!-- HEMAT -->
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
    </div>
    <div style="background: #fff7ed; border-left: 3px solid #f97316; padding: 10px 14px; border-radius: 4px; margin-bottom: 10px; font-size: 9.5pt; color: #7c2d12;">
      <strong>Catatan Backup &amp; Infrastruktur:</strong>
      Layanan monitoring mencakup <em>pemantauan</em> keberhasilan sistem backup otomatis
      yang berjalan di server Anda — bukan pengelolaan atau penyediaan infrastruktur
      penyimpanan backup itu sendiri. Penyediaan media penyimpanan backup (storage),
      pemilihan penyedia server, dan tanggung jawab atas integritas data secara penuh
      tetap menjadi tanggung jawab PIHAK PERTAMA sebagai pemilik infrastruktur.
      Jika sistem backup di sisi server gagal karena masalah provider, hal tersebut
      di luar kendali dan tanggung jawab PIHAK KEDUA.
    </div>
    <!-- Catatan transparansi -->
    <div style="background: #eff6ff; border-left: 3px solid #3b82f6; padding: 10px 14px; border-radius: 4px; margin-bottom: 16px; font-size: 9.5pt; color: #1e40af;">
      <strong>Catatan transparansi:</strong> Harga paket dihitung dari nilai minimum tiket
      yang berlaku — Anda bisa memverifikasi setiap angka dari Rate Card di atas.
      Jika tier berubah di masa mendatang, harga paket akan disesuaikan dengan
      pemberitahuan tertulis 30 hari sebelumnya.
    </div>

    <!-- KOMITMEN WAKTU PROFESSIONAL -->
    <div style="background: #faf5ff; border: 1px solid #d8b4fe; border-radius: 8px; padding: 14px 16px; margin-bottom: 16px;">
      <p style="font-weight: bold; color: #6d28d9; margin: 0 0 8px; font-size: 10.5pt;">
        🛡️ Komitmen Waktu — Paket Professional
      </p>
      <p style="margin: 0 0 10px; font-size: 10pt; color: #4c1d95;">
        Sebagai mitra teknologi eksklusif Anda, saya mengalokasikan
        <strong>slot waktu prioritas</strong> khusus untuk sistem Anda setiap bulannya.
        "Priority Unlimited Access" berarti: jika dalam sebulan ada 30 tiket Tier 1,
        saya akan kerjakan semuanya tanpa biaya tambahan selama masih dalam slot
        waktu prioritas yang dialokasikan.
      </p>
      <div style="overflow-x: auto; -webkit-overflow-scrolling: touch;">
        <table style="width: 100%; border-collapse: collapse; font-size: 9.5pt; margin-bottom: 10px;">
          <thead>
            <tr style="background-color: #ede9fe;">
              <th style="padding: 8px 10px; border: 1px solid #c4b5fd; text-align: left; color: #4c1d95;">Komponen</th>
              <th style="padding: 8px 10px; border: 1px solid #c4b5fd; text-align: center; color: #4c1d95;">Estimasi Waktu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 7px 10px; border: 1px solid #c4b5fd; color: #5b21b6;">Monitoring &amp; pengecekan rutin</td>
              <td style="padding: 7px 10px; border: 1px solid #c4b5fd; text-align: center; color: #5b21b6;">~4 jam/bulan</td>
            </tr>
            <tr style="background-color: #f5f3ff;">
              <td style="padding: 7px 10px; border: 1px solid #c4b5fd; color: #5b21b6;">Penanganan Tier 1–2 (priority unlimited)</td>
              <td style="padding: 7px 10px; border: 1px solid #c4b5fd; text-align: center; color: #5b21b6;">~8 jam/bulan</td>
            </tr>
            <tr>
              <td style="padding: 7px 10px; border: 1px solid #c4b5fd; color: #5b21b6;">Penanganan Tier 3 (maks. 3 tiket)</td>
              <td style="padding: 7px 10px; border: 1px solid #c4b5fd; text-align: center; color: #5b21b6;">~6 jam/bulan</td>
            </tr>
            <tr style="background-color: #f5f3ff;">
              <td style="padding: 7px 10px; border: 1px solid #c4b5fd; color: #5b21b6;">Konsultasi &amp; buffer darurat</td>
              <td style="padding: 7px 10px; border: 1px solid #c4b5fd; text-align: center; color: #5b21b6;">~2 jam/bulan</td>
            </tr>
            <tr style="background-color: #ede9fe;">
              <td style="padding: 7px 10px; border: 1px solid #c4b5fd; font-weight: bold; color: #4c1d95;"><strong>Total slot prioritas</strong></td>
              <td style="padding: 7px 10px; border: 1px solid #c4b5fd; text-align: center; font-weight: bold; color: #4c1d95;"><strong>~20 jam/bulan</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="margin: 0; font-size: 9.5pt; color: #5b21b6;">
        Jika kebutuhan Anda melebihi slot tersebut dalam suatu bulan, saya akan segera
        mengkomunikasikannya dan kita cari solusi terbaik bersama.
        <strong>Kelebihan jam tidak akan dikerjakan secara diam-diam</strong> — selalu ada
        konfirmasi tertulis sebelum jam tambahan berjalan.
      </p>
    </div>

    <!-- 6. ALUR KERJA -->
    <h3 style="color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 20px;">
      6. Alur Kerja Sama
    </h3>
    <ol style="margin-top: 5px; margin-bottom: 10px;">
      <!-- GANTI JADI INI -->
      <li style="margin-bottom: 6px;">
        <strong>Laporan Kendala:</strong> Kirimkan detail masalah melalui
        <strong>Grup WhatsApp resmi proyek</strong> atau <strong>Email</strong> agar
        histori komunikasi mudah dilacak. Sertakan screenshot/video error, langkah
        reproduksi, dan dampak ke operasional. Laporan yang masuk melalui saluran
        di luar yang disepakati (DM personal, Instagram, dll) tidak terhitung dalam
        hitungan Response Time hingga dilaporkan ulang ke saluran resmi.
      </li>
      <li style="margin-bottom: 6px;">
        <strong>Analisa &amp; Tiering:</strong> Saya melakukan pengecekan singkat untuk
        menentukan kategori Tier dan estimasi biaya — tanpa biaya analisa.
        Hitungan Response Time berjalan sejak laporan diterima dan akses sistem tersedia.
      </li>
      <li style="margin-bottom: 6px;">
        <strong>Konfirmasi &amp; Eksekusi:</strong> Pengerjaan dimulai setelah persetujuan
        biaya tertulis dari Anda (atau menggunakan kuota paket bulanan).
      </li>
      <li style="margin-bottom: 6px;">
        <strong>Laporan Selesai:</strong> Penyerahan hasil kerja disertai laporan teknis
        singkat. Jika tidak ada komplain dalam 3 hari kerja, pekerjaan dianggap selesai
        dan diterima (<em>Deemed Acceptance</em>).
      </li>
    </ol>

    <!-- 7. KETENTUAN TAMBAHAN -->
    <h3 style="color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 20px;">
      7. Ketentuan Tambahan
    </h3>
    <ul style="margin-top: 5px; margin-bottom: 10px;">
      <li style="margin-bottom: 8px;">
        <strong>Prioritas Kerja:</strong> Pengerjaan dilakukan berdasarkan antrean tiket,
        kecuali Tier 4 (Critical) yang langsung mendapat jalur prioritas di atas semua
        antrean yang sedang berjalan.
      </li>
      <li style="margin-bottom: 8px;">
        <strong>Akses Sistem:</strong> Klien wajib menyediakan akses penuh (server/source code)
        yang diperlukan. Keterlambatan pemberian akses menghentikan hitungan Response Time
        hingga akses tersedia.
      </li>
      <li style="margin-bottom: 8px;">
        <strong>Biaya Pihak Ketiga:</strong> Biaya sewa server, domain, SSL, dan layanan API
        berbayar sepenuhnya menjadi tanggung jawab klien dan di luar biaya jasa saya.
      </li>
      <li style="margin-bottom: 8px;">
        <strong>Pembatalan Langganan:</strong> Kedua belah pihak dapat menghentikan kerjasama
        bulanan dengan pemberitahuan tertulis minimal <strong>7 hari</strong> sebelum masa
        langganan bulan berikutnya dimulai.
      </li>
      <li style="margin-bottom: 8px;">
        <strong>Notifikasi Freeze:</strong> Apabila tidak ada permintaan selama 2 bulan
        berturut-turut, saya akan memberikan notifikasi tertulis <strong>7 hari sebelumnya</strong>
        sebelum memberlakukan evaluasi ulang kontrak atau pengalihan slot prioritas.
      </li>
    </ul>

    <!-- 8. GARANSI & ROLLOVER -->
    <h3 style="color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 20px;">
      8. Kebijakan Garansi &amp; Rollover
    </h3>
    <p>
      Setiap pekerjaan dilindungi <strong>Masa Garansi 30 Hari</strong> sejak serah terima —
      tetap berlaku meskipun kontrak sudah berakhir. Kendala pada fitur yang baru diperbaiki
      ditangani tanpa biaya tambahan dan tidak memotong kuota tiket bulanan.
    </p>
    <p style="margin-top: 8px;">
      <strong>Klausul Rollover Tiket:</strong> Sisa tiket yang tidak terpakai dapat
      diakumulasikan maksimal 1 bulan berikutnya. Tiket yang tidak digunakan setelah
      2 bulan berturut-turut dianggap hangus dan tidak dapat diuangkan kembali.
    </p>

    <!-- 9. PEMBAYARAN -->
     <div style="page-break-inside: avoid; break-inside: avoid;">
      <h3 style="color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 20px;">
        9. Info Pembayaran
      </h3>
      <div style="overflow-x: auto; -webkit-overflow-scrolling: touch;">
        <table style="width: 60%; border-collapse: collapse; margin-top: 10px; font-size: 10.5pt;">
          <tbody>
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
          </tbody>
        </table>
      </div>
      <p style="font-size: 9.5pt; color: #718096; margin-top: 8px;">
        Pembayaran wajib dilunasi maksimal <strong>3 hari kerja</strong> setelah invoice diterima
        atau pekerjaan dinyatakan selesai, mana yang lebih dahulu terjadi.
      </p>

      <!-- FOOTER -->
      <div style="margin-top: 40px; padding-top: 16px; border-top: 2px solid #e2e8f0;
        page-break-inside: avoid; break-inside: avoid;">
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

  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  c: { type: Object, required: true }
})

const th = computed(() => props.c.tierHarga ?? {
  tier1: 200000, tier2: 400000, tier3: 1000000, tier4: 2500000, monitoring: 400000
})

const ov = computed(() => props.c.welcomeData?.overridePaket ?? {
  basic: null, standard: null, professional: null
})

const paket = computed(() => {
  const t = th.value

  // BASIC: monitoring + 3x T1 + 1x T2
  const basicNilai  = t.monitoring + (3 * t.tier1) + (1 * t.tier2)
  const basicHarga  = ov.value.basic ?? bulatkan(basicNilai * 0.80)
  const basicHemat  = basicNilai - basicHarga
  const basicDiskon = Math.round((basicHemat / basicNilai) * 100)

  // STANDARD: monitoring + 5x T1 + 2x T2 + 1x T3
  const stdNilai  = t.monitoring + (5 * t.tier1) + (2 * t.tier2) + (1 * t.tier3)
  const stdHarga  = ov.value.standard ?? bulatkan(stdNilai * 0.65)
  const stdHemat  = stdNilai - stdHarga
  const stdDiskon = Math.round((stdHemat / stdNilai) * 100)

  // PROFESSIONAL: monitoring + 8x T1 + 4x T2 + 3x T3 (maks 3 tiket Tier 3)
  const proNilai  = t.monitoring + (8 * t.tier1) + (4 * t.tier2) + (3 * t.tier3)
  const proHarga  = ov.value.professional ?? bulatkan(proNilai * 0.60)
  const proHemat  = proNilai - proHarga
  const proDiskon = Math.round((proHemat / proNilai) * 100)

  return {
    basic:        { nilaiAsli: basicNilai, harga: basicHarga, hemat: basicHemat, diskon: basicDiskon },
    standard:     { nilaiAsli: stdNilai,   harga: stdHarga,   hemat: stdHemat,   diskon: stdDiskon },
    professional: { nilaiAsli: proNilai,   harga: proHarga,   hemat: proHemat,   diskon: proDiskon },
  }
})

function bulatkan(angka) {
  return Math.ceil(angka / 50000) * 50000
}

function fmt(angka) {
  return 'Rp ' + angka.toLocaleString('id-ID')
}
</script>

<style>
/* Tabel scroll horizontal di mobile */
table {
  display: block;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  width: 100% !important;
}

/* Kembalikan display normal untuk print */
@media print {
  table {
    display: table;
    overflow-x: visible;
  }
}

/* Font lebih kecil di mobile agar tidak terlalu sempit */
@media (max-width: 640px) {
  div[style*="font-size: 11pt"] {
    font-size: 10pt !important;
  }

  /* Tabel paket 4 kolom — min width agar bisa scroll */
  table[style*="font-size: 10pt"] {
    min-width: 600px;
  }

  /* Tabel rate card 3 kolom */
  table[style*="font-size: 10.5pt"] {
    min-width: 480px;
  }
}
</style>