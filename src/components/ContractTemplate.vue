<!-- src/components/ContractTemplate.vue -->
<template>
  <div style="font-family: Arial, sans-serif; color: #000; line-height: 1.6; font-size: 11pt;">
    
    <h2 style="text-align: center; font-size: 14pt; font-weight: bold; margin-bottom: 5px;">
      PROPOSAL & PERJANJIAN KERJASAMA PENGEMBANGAN SISTEM
    </h2>
    <p style="text-align: center; margin-top: 0; margin-bottom: 20px;">
      <strong>Nomor:</strong> {{ c.nomorSurat }}<br>
      <strong>Perihal: Penawaran Layanan & Kontrak Kerja Web Development</strong>
    </p>

    <hr style="border: 0; border-top: 1px solid #000; margin: 20px 0;">

    <h3 style="font-size: 12pt; font-weight: bold;">BAGIAN I: PENDAHULUAN & PENAWARAN EKSKLUSIF</h3>
    <p>Terima kasih telah mempertimbangkan saya sebagai partner teknologi Anda. Dokumen ini terdiri dari dua bagian: <strong>Profil Layanan</strong> dan <strong>Perjanjian Kerjasama Legal</strong>.</p>

    <p>
      <strong>Filosofi Kerja: "Stability First"</strong><br>
      Bagi saya, sistem yang baik bukan sekadar bisa berjalan, tetapi harus stabil, aman, dan mudah dikembangkan di masa depan. Sebagai kandidat partner Anda, saya menawarkan:
    </p>

    <ol style="margin-top: 5px; margin-bottom: 15px;">
      <li><strong>Enterprise-Grade Security:</strong> Menerapkan validasi ketat, enkripsi <em>Hashing</em>, dan perlindungan kerentanan sistem.</li>
      <li><strong>Transparansi Teknis:</strong> Pengerjaan selalu disertai <em>log</em> laporan dan dokumentasi (Manual Book) yang jelas.</li>
      <li><strong>Fullstack Proficiency:</strong> Penanganan komprehensif dari UI/UX (Frontend), Logika Server (Backend), hingga Arsitektur Database.</li>
    </ol>

    <p>Apabila Klien menyetujui penawaran dan skema dalam dokumen ini, maka Bagian II di bawah ini akan otomatis berlaku sebagai Perjanjian Kerjasama yang sah dan mengikat secara hukum.</p>

    <hr style="border: 0; border-top: 1px solid #000; margin: 20px 0;">

    <h3 style="font-size: 12pt; font-weight: bold;">BAGIAN II: PERJANJIAN KERJASAMA (KONTRAK KERJA)</h3>
    <p>
      Pada hari ini, <strong>{{ c.hari }}</strong> tanggal <strong>{{ c.tanggal }}</strong>
      bulan <strong>{{ c.bulan }}</strong> tahun <strong>{{ c.tahun }}</strong>,
      bertempat di <strong>{{ c.lokasi }}</strong>, yang bertanda tangan di bawah ini:
    </p>

    <p style="margin-top: 15px; margin-bottom: 5px;"><strong>1. {{ c.namaKlien }}</strong></p>
    <p style="margin-top: 0; margin-bottom: 15px;">
      Alamat: {{ c.alamatKlien }}<br>
      Jabatan: {{ c.jabatanKlien }}
    </p>
    <p>Dalam hal ini bertindak untuk dan atas nama diri sendiri/perusahaan, yang selanjutnya disebut sebagai <strong>PIHAK PERTAMA (KLIEN)</strong>.</p>

    <p style="margin-top: 15px; margin-bottom: 5px;"><strong>2. {{ c.namaDev }}</strong></p>
    <p style="margin-top: 0; margin-bottom: 15px;">
      Alamat: {{ c.alamatDev }}<br>
      Profesi: Fullstack Web Developer
    </p>
    <p>Dalam hal ini bertindak untuk dan atas nama diri sendiri sebagai profesional <em>freelance</em>, yang selanjutnya disebut sebagai <strong>PIHAK KEDUA (DEVELOPER)</strong>.</p>

    <p>Kedua belah pihak terlebih dahulu menerangkan bahwa PIHAK PERTAMA membutuhkan jasa PIHAK KEDUA untuk pengembangan/pemeliharaan sistem. Oleh karena itu, kedua belah pihak sepakat untuk mengikatkan diri dalam Perjanjian Kerjasama dengan ketentuan dan syarat-syarat yang diatur dalam pasal-pasal berikut:</p>

    <!-- PASAL 1 -->
    <h4 style="font-size: 11pt; font-weight: bold; text-align: center; margin-top: 25px;">
      Pasal 1<br>RUANG LINGKUP PEKERJAAN & BIAYA (RATE CARD)
    </h4>
    <p>(1) PIHAK KEDUA sepakat untuk melaksanakan pekerjaan sesuai dengan paket/tier yang dipilih oleh PIHAK PERTAMA sebagai berikut:</p>
    <ul style="margin-top: 5px; margin-bottom: 10px;">
      <li><strong>Tier 1 (Trivial):</strong> Perbaikan UI/teks/CSS ringan ({{ c.tier1 }} / tiket)</li>
      <li><strong>Tier 2 (Minor):</strong> Perbaikan logika sederhana, validasi ({{ c.tier2 }} / tiket)</li>
      <li><strong>Tier 3 (Major):</strong> Perbaikan alur bisnis, optimasi database ({{ c.tier3 }} / tiket)</li>
      <li><strong>Tier 4 (Critical):</strong> Sistem <em>down</em>, kebocoran data ({{ c.tier4 }})</li>
      <li><strong>Paket Retainer Bulanan:</strong> {{ c.paket }}</li>
    </ul>
    <p>(2) Pekerjaan di luar ruang lingkup yang disepakati (penambahan fitur baru/<em>enhancement</em>) akan dituangkan dalam <em>Addendum</em> (Perjanjian Tambahan) dan dikenakan biaya terpisah.</p>

    <!-- PASAL 2 -->
    <h4 style="font-size: 11pt; font-weight: bold; text-align: center; margin-top: 25px;">
      Pasal 2<br>HAK DAN KEWAJIBAN
    </h4>
    <p>(1) <strong>Kewajiban PIHAK KEDUA:</strong></p>
    <ul style="margin-top: 5px; margin-bottom: 10px;">
      <li>Menyelesaikan pekerjaan tepat waktu sesuai estimasi yang disepakati.</li>
      <li>Memberikan laporan progres pekerjaan secara berkala.</li>
      <li>Menjamin kualitas kode dan performa sistem yang dikerjakan.</li>
    </ul>
    <p>(2) <strong>Kewajiban PIHAK PERTAMA:</strong></p>
    <ul style="margin-top: 5px; margin-bottom: 10px;">
      <li>Menyediakan data, akses server, dan informasi yang dibutuhkan PIHAK KEDUA.</li>
      <li>Melakukan pembayaran sesuai dengan nominal dan jadwal yang disepakati.</li>
    </ul>

    <!-- PASAL 3 -->
    <h4 style="font-size: 11pt; font-weight: bold; text-align: center; margin-top: 25px;">
      Pasal 3<br>KERAHASIAAN INFORMASI (NON-DISCLOSURE AGREEMENT)
    </h4>
    <p>
      (1) PIHAK KEDUA menjamin kerahasiaan seluruh data perusahaan, <em>source code</em>, basis data (database), dan strategi bisnis milik PIHAK PERTAMA.<br>
      (2) PIHAK KEDUA dilarang keras menyebarluaskan, memperjualbelikan, atau menggunakan data milik PIHAK PERTAMA untuk kepentingan pribadi maupun pihak ketiga tanpa izin tertulis.
    </p>

    <!-- PASAL 4 -->
    <h4 style="font-size: 11pt; font-weight: bold; text-align: center; margin-top: 25px;">
      Pasal 4<br>HAK KEKAYAAN INTELEKTUAL
    </h4>
    <p>Seluruh hasil pekerjaan yang telah dibayar lunas sepenuhnya oleh PIHAK PERTAMA, menjadi Hak Milik Eksklusif PIHAK PERTAMA.</p>

    <!-- PASAL 5 -->
    <h4 style="font-size: 11pt; font-weight: bold; text-align: center; margin-top: 25px;">
      Pasal 5<br>SISTEM PEMBAYARAN
    </h4>
    <p>(1) Pembayaran ditransfer ke rekening PIHAK KEDUA:</p>
    <ul style="margin-top: 5px; margin-bottom: 10px;">
      <li>Bank: {{ c.namaBank }}</li>
      <li>No. Rekening: {{ c.noRek }}</li>
      <li>Atas Nama: {{ c.atasNama }}</li>
    </ul>

    <!-- PASAL 6 -->
    <h4 style="font-size: 11pt; font-weight: bold; text-align: center; margin-top: 25px;">
      Pasal 6<br>GARANSI & JANGKA WAKTU
    </h4>
    <p>
      (1) PIHAK KEDUA memberikan masa garansi atas pekerjaan selama <strong>30 Hari Kalender</strong> sejak tanggal serah terima.<br>
      (2) Perjanjian ini berlaku selama <strong>{{ c.jangkaWaktu }}</strong> terhitung sejak tanggal ditandatanganinya Surat Perjanjian ini.<br>
      (3) Apabila salah satu pihak ingin mengakhiri kerjasama sebelum masa berlaku habis, pihak tersebut wajib memberikan pemberitahuan tertulis minimal 14 hari sebelumnya.
    </p>

    <!-- PASAL 7 -->
    <h4 style="font-size: 11pt; font-weight: bold; text-align: center; margin-top: 25px;">
      Pasal 7<br>PENYELESAIAN PERSELISIHAN
    </h4>
    <p>
      (1) Perselisihan diselesaikan secara musyawarah untuk mufakat.<br>
      (2) Apabila tidak mencapai mufakat, diselesaikan secara hukum di Pengadilan Negeri {{ c.pengadilan }}.
    </p>

    <!-- ═══════════════════════════════════════════════════
         EXECUTION PAGE — selalu mulai halaman baru
         Tidak bisa terpotong dalam kondisi apapun
    ════════════════════════════════════════════════════ -->
    <div style="
      page-break-before: always;
      break-before: page;
      page-break-inside: avoid;
      break-inside: avoid;
      border: 1.5px solid #000;
      border-radius: 4px;
      padding: 24px;
      margin-top: 0;
    ">

      <!-- Judul execution page -->
      <h3 style="text-align: center; font-size: 12pt; font-weight: bold; margin: 0 0 4px;">
        HALAMAN PENANDATANGANAN
      </h3>
      <p style="text-align: center; font-size: 9.5pt; color: #555; margin: 0 0 16px;">
        Halaman ini merupakan bagian tidak terpisahkan dari Perjanjian Kerjasama<br>
        Nomor: <strong>{{ c.nomorSurat }}</strong>
      </p>

      <hr style="border: 0; border-top: 1px solid #000; margin: 0 0 14px;">

      <!-- Pernyataan persetujuan -->
      <p style="font-size: 10pt; margin: 0 0 8px;">
        Dengan menandatangani dokumen ini, kedua belah pihak menyatakan telah
        <strong>membaca, memahami, dan menyetujui</strong> seluruh isi Perjanjian
        Kerjasama ini secara sadar dan tanpa paksaan dari pihak manapun.
      </p>

      <!-- Ringkasan pasal -->
      <ul style="font-size: 9.5pt; color: #333; margin: 8px 0 14px; padding-left: 18px; line-height: 1.8;">
        <li>Ruang lingkup pekerjaan dan biaya sesuai Rate Card yang tercantum pada <strong>Pasal 1</strong>.</li>
        <li>Kewajiban masing-masing pihak sesuai <strong>Pasal 2</strong>.</li>
        <li>Kerahasiaan informasi sesuai <strong>Pasal 3</strong> (NDA).</li>
        <li>Hak kekayaan intelektual sesuai <strong>Pasal 4</strong>.</li>
        <li>Sistem pembayaran sesuai <strong>Pasal 5</strong>.</li>
        <li>Masa berlaku <strong>{{ c.jangkaWaktu }}</strong> dengan garansi 30 hari sesuai <strong>Pasal 6</strong>.</li>
        <li>Penyelesaian perselisihan di Pengadilan Negeri <strong>{{ c.pengadilan }}</strong> sesuai <strong>Pasal 7</strong>.</li>
      </ul>

      <hr style="border: 0; border-top: 1px solid #000; margin: 0 0 14px;">

      <!-- Lokasi dan tanggal -->
      <p style="font-size: 10pt; margin: 0 0 18px;">
        Ditandatangani di: <strong>{{ c.lokasi }}</strong> &nbsp;|&nbsp;
        Tanggal: <strong>{{ c.tanggal }} {{ c.bulan }} {{ c.tahun }}</strong>
      </p>

      <!-- Area TTD -->
      <table style="width: 100%; text-align: center; border-collapse: collapse;">
        <tr>
          <td style="width: 50%; padding: 6px 16px;">
            <p style="font-size: 10pt; font-weight: bold; margin: 0 0 2px;">PIHAK PERTAMA (KLIEN)</p>
            <p style="font-size: 9.5pt; color: #555; margin: 0 0 8px;">Pemberi Kerja</p>
            <div style="
              height: 110px;
              border: 1.5px solid #94a3b8;
              border-radius: 6px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #f8fafc;
              margin-bottom: 10px;
            ">
              <img v-if="c.signature_klien" :src="c.signature_klien"
                style="max-height: 90px; max-width: 90%; object-fit: contain;" />
              <span v-else style="color: #94a3b8; font-size: 9pt; font-style: italic;">
                Tanda Tangan
              </span>
            </div>
            <div style="border-top: 1px solid #000; padding-top: 6px;">
              <p style="font-weight: bold; font-size: 10.5pt; margin: 0;">{{ c.namaKlien }}</p>
              <p style="font-size: 9.5pt; color: #444; margin: 2px 0 0;">{{ c.jabatanKlien }}</p>
            </div>
          </td>

          <td style="width: 50%; padding: 6px 16px;">
            <p style="font-size: 10pt; font-weight: bold; margin: 0 0 2px;">PIHAK KEDUA (DEVELOPER)</p>
            <p style="font-size: 9.5pt; color: #555; margin: 0 0 8px;">Penyedia Jasa</p>
            <div style="
              height: 110px;
              border: 1.5px solid #94a3b8;
              border-radius: 6px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #f8fafc;
              margin-bottom: 10px;
            ">
              <img v-if="c.signature_dev" :src="c.signature_dev"
                style="max-height: 90px; max-width: 90%; object-fit: contain;" />
              <span v-else style="color: #94a3b8; font-size: 9pt; font-style: italic;">
                Tanda Tangan
              </span>
            </div>
            <div style="border-top: 1px solid #000; padding-top: 6px;">
              <p style="font-weight: bold; font-size: 10.5pt; margin: 0;">{{ c.namaDev }}</p>
              <p style="font-size: 9.5pt; color: #444; margin: 2px 0 0;">Fullstack Web Developer</p>
            </div>
          </td>
        </tr>
      </table>

      <!-- Footer legal -->
      <div style="
        margin-top: 20px;
        padding-top: 10px;
        border-top: 1px dashed #cbd5e0;
        text-align: center;
      ">
        <p style="font-size: 8.5pt; color: #94a3b8; margin: 0;">
          Dokumen ini sah secara hukum apabila ditandatangani oleh kedua belah pihak.
          Dibuat dalam 1 (satu) rangkap digital yang memiliki kekuatan hukum yang sama.
        </p>
      </div>

    </div>
    <!-- END EXECUTION PAGE -->

  </div>
</template>

<script setup>
defineProps({
  c: {
    type: Object,
    required: true
  }
})
</script>