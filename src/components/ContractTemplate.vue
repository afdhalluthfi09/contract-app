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

    <!-- TANDA TANGAN -->
    <div style="margin-top: 40px; margin-bottom: 20px;">
      <p>
        <strong>Ditandatangani di: {{ c.lokasi }}</strong><br>
        <strong>Tanggal: {{ c.tanggal }} {{ c.bulan }} {{ c.tahun }}</strong>
      </p>
    </div>

    <table style="width: 100%; text-align: center; border-collapse: collapse; margin-top: 10px;">
      <tr>
        <td style="width: 50%; padding: 10px;"><strong>PIHAK PERTAMA (KLIEN)</strong></td>
        <td style="width: 50%; padding: 10px;"><strong>PIHAK KEDUA (DEVELOPER)</strong></td>
      </tr>
      <tr>
        <!-- TTD KLIEN -->
        <td style="height: 140px; vertical-align: bottom; padding: 10px;">
          <div style="height: 100px; border: 2px dashed #cbd5e0; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 10px; background-color: #f8fafc;">
            <img v-if="c.signature_klien" :src="c.signature_klien"
              style="max-height: 80px; margin: 0 auto; display: block;" />
            <span v-else style="color: #718096; font-size: 0.875rem; font-style: italic;">
              Belum ditandatangani
            </span>
          </div>
          <strong>{{ c.namaKlien }}</strong><br>
          {{ c.jabatanKlien }}
        </td>
        <!-- TTD DEVELOPER -->
        <td style="height: 140px; vertical-align: bottom; padding: 10px;">
          <div style="height: 100px; border: 2px dashed #cbd5e0; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 10px; background-color: #f8fafc;">
            <img v-if="c.signature_dev" :src="c.signature_dev"
              style="max-height: 80px; margin: 0 auto; display: block;" />
            <span v-else style="color: #718096; font-size: 0.875rem; font-style: italic;">
              Belum ditandatangani
            </span>
          </div>
          <strong>{{ c.namaDev }}</strong><br>
          Fullstack Developer
        </td>
      </tr>
    </table>

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