<!-- src/components/ContractTemplate.vue -->
<template>
  <div id="documentArea" style="font-family: Arial, sans-serif; color: #000; line-height: 1.6; font-size: 11pt;">

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
    <p>(1) PIHAK KEDUA sepakat untuk melaksanakan pekerjaan sesuai dengan kategori tingkat kesulitan berikut:</p>
    <ul style="margin-top: 5px; margin-bottom: 10px;">
      <li>
        <strong>Tier 1 (Trivial):</strong> Perubahan UI, teks, aset statis, CSS ringan,
        dan typo pada pesan/label yang tidak mempengaruhi logika sistem.
        ({{ c.tier1 }} / tiket)
      </li>
      <li>
        <strong>Tier 2 (Minor):</strong> Perbaikan logika sederhana, validasi input,
        konfigurasi integrasi API pihak ketiga, perbaikan urutan eksekusi fungsi,
        perbaikan HTTP status code atau struktur response yang menyebabkan perilaku
        tidak sesuai ekspektasi, serta perbaikan bug yang terisolasi pada satu modul.
        ({{ c.tier2 }} / tiket)
      </li>
      <li>
        <strong>Tier 3 (Major):</strong> Perbaikan alur bisnis lintas modul, optimasi
        query database, redesign arsitektur integrasi API, penanganan race condition,
        serta perbaikan yang berdampak pada integritas data secara luas.
        ({{ c.tier3 }} / tiket)
      </li>
      <li>
        <strong>Tier 4 (Critical):</strong> Sistem tidak dapat digunakan (<em>down</em>),
        kebocoran atau kerusakan data, celah keamanan aktif yang sedang dieksploitasi.
        ({{ c.tier4 }})
      </li>
      <li>
        <strong>Diagnostic Fee (Investigasi Tanpa Perbaikan):</strong> Apabila setelah
        investigasi ditemukan bahwa permasalahan bukan berasal dari sistem yang dikerjakan
        — misalnya gangguan pihak ketiga, kesalahan end-user, atau perilaku yang memang
        by design — dikenakan biaya investigasi setara <strong>Tier 1</strong> untuk
        waktu yang telah digunakan.
      </li>
      <li><strong>Paket Retainer Bulanan:</strong> {{ c.paket }}</li>
    </ul>
    <p>(2) <strong>Penentuan Nominal Biaya:</strong> Mengingat biaya di atas bersifat rentang, nominal pasti dalam rentang tersebut akan disepakati secara tertulis oleh kedua belah pihak <strong>sebelum pengerjaan dimulai</strong>. Pengerjaan tidak akan dimulai tanpa adanya konfirmasi persetujuan biaya dari PIHAK PERTAMA.</p>
    <p>(3) <strong>Definisi 1 Tiket:</strong> Satu tiket didefinisikan sebagai satu permasalahan dengan satu akar penyebab (<em>root cause</em>). Permasalahan yang berbeda — meskipun dilaporkan dalam satu pesan — dihitung sebagai tiket terpisah. Sebaliknya, PIHAK KEDUA tidak diperkenankan memecah satu masalah yang saling terkait menjadi tiket-tiket terpisah.</p>
    <p>(4) Pekerjaan di luar ruang lingkup yang disepakati (penambahan fitur baru/<em>enhancement</em>) akan dituangkan dalam <em>Addendum</em> (Perjanjian Tambahan) dan dikenakan biaya terpisah.</p>

    <!-- PASAL 2 -->
    <h4 style="font-size: 11pt; font-weight: bold; text-align: center; margin-top: 25px;">
      Pasal 2<br>HAK DAN KEWAJIBAN
    </h4>
    <p>(1) <strong>Kewajiban PIHAK KEDUA:</strong></p>
    <ul style="margin-top: 5px; margin-bottom: 10px;">
      <li>Menyelesaikan pekerjaan tepat waktu sesuai estimasi yang disepakati, dihitung sejak seluruh akses data/server diterima secara lengkap.</li>
      <li>Memberikan laporan progres pekerjaan secara berkala.</li>
      <li>Menjamin kualitas kode dan performa sistem yang dikerjakan.</li>
    </ul>
    <p>(2) <strong>Kewajiban PIHAK PERTAMA:</strong></p>
    <ul style="margin-top: 5px; margin-bottom: 10px;">
      <li>Menyediakan data, akses server, dan informasi yang dibutuhkan PIHAK KEDUA secara lengkap dan tepat waktu. <strong>Keterlambatan pemberian akses oleh PIHAK PERTAMA akan menghentikan hitungan estimasi waktu pengerjaan</strong> hingga akses tersedia.</li>
      <li>Melakukan pembayaran sesuai dengan nominal dan jadwal yang disepakati.</li>
      <li>Memberikan konfirmasi persetujuan biaya secara tertulis sebelum pengerjaan tiap tiket dimulai.</li>
    </ul>
    <p>(3) <strong>Temuan Kerentanan Keamanan:</strong> Apabila dalam proses pengerjaan
    PIHAK KEDUA menemukan kerentanan keamanan di luar scope tiket yang berpotensi
    merugikan PIHAK PERTAMA, PIHAK KEDUA wajib melaporkannya secara tertulis kepada
    PIHAK PERTAMA. Penanganan kerentanan tersebut akan dituangkan dalam tiket baru
    sesuai kategori tier yang berlaku dan dikenakan biaya terpisah.
    <strong>PIHAK KEDUA tidak bertanggung jawab atas kerentanan yang telah dilaporkan
    secara tertulis namun tidak ditindaklanjuti oleh PIHAK PERTAMA.</strong></p>

    <!-- PASAL 3 -->
    <h4 style="font-size: 11pt; font-weight: bold; text-align: center; margin-top: 25px;">
      Pasal 3<br>KERAHASIAAN INFORMASI (NON-DISCLOSURE AGREEMENT)
    </h4>
    <p>
      (1) PIHAK KEDUA menjamin kerahasiaan seluruh data perusahaan, <em>source code</em> spesifik sistem, basis data (database), dan strategi bisnis milik PIHAK PERTAMA.<br>
      (2) PIHAK KEDUA dilarang keras menyebarluaskan, memperjualbelikan, atau menggunakan data milik PIHAK PERTAMA untuk kepentingan pribadi maupun pihak ketiga tanpa izin tertulis.<br>
      (3) Kewajiban kerahasiaan ini tetap berlaku selama <strong>2 (dua) tahun</strong> setelah perjanjian ini berakhir.
    </p>

    <!-- PASAL 4 -->
    <h4 style="font-size: 11pt; font-weight: bold; text-align: center; margin-top: 25px;">
      Pasal 4<br>HAK KEKAYAAN INTELEKTUAL
    </h4>
    <p>
      (1) Seluruh hasil pekerjaan yang bersifat spesifik terhadap sistem PIHAK PERTAMA dan telah dibayar lunas, menjadi Hak Milik Eksklusif PIHAK PERTAMA.<br>
      (2) <em>Base code</em>, <em>library</em>, fungsi utilitas umum, dan komponen generik yang dikembangkan PIHAK KEDUA secara independen sebelum atau selama perjanjian ini — yang tidak bersifat eksklusif terhadap sistem PIHAK PERTAMA — tetap menjadi hak milik PIHAK KEDUA dan dapat digunakan kembali pada proyek lain.<br>
      (3) Selama pembayaran belum lunas, PIHAK KEDUA berhak menahan penyerahan <em>source code</em> final kepada PIHAK PERTAMA.
      (4) <strong>Batasan Tanggung Jawab Sistem Warisan (<em>Legacy System</em>):</strong>
      PIHAK KEDUA tidak bertanggung jawab atas kerentanan keamanan, kebocoran data,
      atau kegagalan sistem yang berasal dari kode, konfigurasi, atau infrastruktur
      yang dikembangkan sebelum tanggal penandatanganan perjanjian ini. Tanggung jawab
      PIHAK KEDUA hanya mencakup kode dan perubahan yang secara eksplisit dikerjakan
      berdasarkan tiket yang disepakati dalam perjanjian ini.
    </p>

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
    <p>(2) <strong>Jadwal Pembayaran:</strong> Pembayaran wajib dilunasi maksimal <strong>3 (tiga) hari kerja</strong> setelah pekerjaan dinyatakan selesai atau invoice diterima oleh PIHAK PERTAMA, mana yang lebih dahulu terjadi.</p>
    <!-- GANTI JADI INI -->
<p>(3) <strong>Kriteria Pekerjaan Selesai (<em>Acceptance Criteria</em>):</strong>
Pekerjaan dinyatakan selesai apabila fungsi telah berjalan sesuai deskripsi laporan
awal yang disepakati <strong>dan sudah dapat diuji coba oleh PIHAK PERTAMA di
lingkungan <em>staging</em> atau <em>production</em></strong>. PIHAK KEDUA wajib
memberikan notifikasi tertulis beserta bukti (screenshot/link) bahwa hasil pekerjaan
sudah tersedia untuk diuji. Apabila PIHAK PERTAMA tidak memberikan respons atau
komplain dalam <strong>3 (tiga) hari kerja</strong> setelah notifikasi tersebut
dikirimkan, maka pekerjaan dianggap telah diterima dan disetujui secara otomatis
(<em>Deemed Acceptance</em>) dan invoice jatuh tempo berlaku.</p>
    <p>(4) <strong>Revisi di Luar Scope:</strong> Permintaan perubahan yang melebihi deskripsi laporan awal yang telah disepakati dihitung sebagai tiket baru dan dikenakan biaya terpisah, bukan bagian dari revisi pekerjaan yang bersangkutan.</p>
    <p>(5) <strong>Keterlambatan Pembayaran:</strong> Apabila PIHAK PERTAMA tidak melakukan pembayaran dalam batas waktu yang ditentukan tanpa pemberitahuan tertulis, PIHAK KEDUA berhak:</p>
    <ul style="margin-top: 5px; margin-bottom: 10px;">
      <li>Menghentikan sementara seluruh layanan dan pengerjaan tiket yang sedang berjalan.</li>
      <li>Menahan penyerahan <em>source code</em> atau hasil pekerjaan terbaru hingga pembayaran dilunasi.</li>
    </ul>
    <p>(6) Penghentian layanan akibat keterlambatan pembayaran tidak dianggap sebagai pelanggaran kontrak oleh PIHAK KEDUA.</p>

    <!-- PASAL 6 -->
    <h4 style="font-size: 11pt; font-weight: bold; text-align: center; margin-top: 25px;">
      Pasal 6<br>GARANSI, JANGKA WAKTU & PERPANJANGAN
    </h4>
    <p>
      (1) PIHAK KEDUA memberikan masa garansi atas pekerjaan selama <strong>30 Hari Kalender</strong> sejak tanggal serah terima. <strong>Masa garansi tetap berlaku penuh meskipun jangka waktu perjanjian pokok telah berakhir.</strong><br>
      (2) Perbaikan dalam masa garansi tidak dikenakan biaya tambahan dan tidak memotong kuota tiket bulanan.<br>
      (3) Perjanjian ini berlaku selama <strong>{{ c.jangkaWaktu }}</strong> terhitung sejak tanggal ditandatanganinya Surat Perjanjian ini.<br>
      (4) <strong>Perpanjangan Otomatis (<em>Auto-Renewal</em>):</strong> Setelah masa berlaku awal habis, perjanjian ini akan diperpanjang secara otomatis setiap bulan dengan ketentuan yang sama, kecuali salah satu pihak menyatakan penghentian secara tertulis minimal <strong>7 (tujuh) hari kalender</strong> sebelum tanggal jatuh tempo perpanjangan. PIHAK KEDUA akan mengirimkan notifikasi pengingat perpanjangan kepada PIHAK PERTAMA pada H-7 sebelum tanggal tersebut.<br>
      (5) Apabila salah satu pihak ingin mengakhiri kerjasama di luar siklus perpanjangan, pihak tersebut wajib memberikan pemberitahuan tertulis minimal <strong>14 hari</strong> sebelumnya.<br>
      (6) <strong>Estimasi waktu pengerjaan</strong> dihitung sejak akses data, server, dan seluruh informasi yang diperlukan diterima secara lengkap oleh PIHAK KEDUA.
    </p>

    <!-- PASAL 7 -->
    <h4 style="font-size: 11pt; font-weight: bold; text-align: center; margin-top: 25px;">
      Pasal 7<br>BIAYA DAN TANGGUNG JAWAB PIHAK KETIGA
    </h4>
    <p>
      (1) Biaya infrastruktur dan layanan pihak ketiga yang digunakan dalam sistem PIHAK PERTAMA — termasuk namun tidak terbatas pada sewa server (VPS), domain, SSL, dan layanan API berbayar (seperti <em>payment gateway</em>, SMS/<em>WhatsApp gateway</em>, Maps API) — sepenuhnya menjadi tanggung jawab PIHAK PERTAMA.<br>
      (2) Biaya-biaya tersebut di luar biaya jasa PIHAK KEDUA dan tidak termasuk dalam paket retainer manapun yang disepakati.<br>
      (3) Keterlambatan pembayaran layanan pihak ketiga oleh PIHAK PERTAMA yang menyebabkan gangguan sistem tidak dihitung sebagai kelalaian PIHAK KEDUA.
    </p>

    <!-- PASAL 8 -->
    <h4 style="font-size: 11pt; font-weight: bold; text-align: center; margin-top: 25px;">
      Pasal 8<br>KEADAAN MEMAKSA (FORCE MAJEURE)
    </h4>
    <p>
      (1) Kedua belah pihak dibebaskan dari tuntutan atas keterlambatan atau kegagalan memenuhi kewajiban apabila hal tersebut disebabkan oleh keadaan di luar kendali yang wajar (<em>force majeure</em>), termasuk namun tidak terbatas pada: bencana alam, kerusuhan, pemadaman listrik massal, gangguan infrastruktur internet nasional, atau kondisi kesehatan darurat yang dapat dibuktikan.<br>
      (2) Pihak yang mengalami <em>force majeure</em> wajib memberitahukan pihak lain secara tertulis dalam <strong>2 (dua) hari kerja</strong> sejak kejadian tersebut terjadi.<br>
      (3) Kewajiban yang tertunda akibat <em>force majeure</em> akan dilanjutkan kembali dalam waktu yang disepakati bersama setelah kondisi kembali normal, tanpa dianggap sebagai pelanggaran kontrak oleh pihak manapun.
    </p>

    <!-- PASAL 9 -->
    <h4 style="font-size: 11pt; font-weight: bold; text-align: center; margin-top: 25px;">
      Pasal 9<br>PENYELESAIAN PERSELISIHAN
    </h4>
    <p>
      (1) Setiap perselisihan diutamakan diselesaikan secara musyawarah untuk mufakat dalam semangat kekeluargaan dalam waktu <strong>14 hari kalender</strong> sejak perselisihan pertama kali dikomunikasikan secara tertulis.<br>
      (2) Apabila musyawarah tidak mencapai mufakat, kedua belah pihak sepakat untuk menempuh jalur <strong>mediasi</strong> terlebih dahulu sebelum membawa perkara ke jalur hukum formal.<br>
      (3) Apabila mediasi pun tidak berhasil, perselisihan diselesaikan secara hukum di Pengadilan Negeri {{ c.pengadilan }}.
    </p>

    <!-- ═══════════════════════════════════════════
         EXECUTION PAGE
    ════════════════════════════════════════════ -->
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
      <h3 style="text-align: center; font-size: 12pt; font-weight: bold; margin: 0 0 4px;">
        HALAMAN PENANDATANGANAN
      </h3>
      <p style="text-align: center; font-size: 9.5pt; color: #555; margin: 0 0 16px;">
        Halaman ini merupakan bagian tidak terpisahkan dari Perjanjian Kerjasama<br>
        Nomor: <strong>{{ c.nomorSurat }}</strong>
      </p>

      <hr style="border: 0; border-top: 1px solid #000; margin: 0 0 14px;">

      <p style="font-size: 10pt; margin: 0 0 8px;">
        Dengan menandatangani dokumen ini, kedua belah pihak menyatakan telah
        <strong>membaca, memahami, dan menyetujui</strong> seluruh isi Perjanjian
        Kerjasama ini secara sadar dan tanpa paksaan dari pihak manapun.
      </p>

      <ul style="font-size: 9.5pt; color: #333; margin: 8px 0 14px; padding-left: 18px; line-height: 1.8;">
        <li>Ruang lingkup, biaya, definisi tiket, dan konfirmasi sebelum pengerjaan sesuai <strong>Pasal 1</strong>.</li>
        <li>Kewajiban, klausul akses sistem, penghentian hitungan waktu, dan pelaporan kerentanan keamanan sesuai <strong>Pasal 2</strong>.</li>
        <li>Kerahasiaan informasi berlaku 2 tahun pasca-kontrak sesuai <strong>Pasal 3</strong>.</li>
        <li>Hak kekayaan intelektual, perlindungan <em>base code</em>, dan batasan tanggung jawab sistem warisan (<em>legacy</em>) sesuai <strong>Pasal 4</strong>.</li>
        <li>Jadwal pembayaran 3 hari kerja, definisi selesai = dapat diuji di <em>production</em>, <em>deemed acceptance</em>, dan hak penghentian layanan sesuai <strong>Pasal 5</strong>.</li>
        <li>Masa berlaku <strong>{{ c.jangkaWaktu }}</strong>, <em>auto-renewal</em> H-7, garansi 30 hari tetap berlaku pasca-kontrak sesuai <strong>Pasal 6</strong>.</li>
        <li>Biaya pihak ketiga (server, domain, API) di luar biaya jasa sesuai <strong>Pasal 7</strong>.</li>
        <li>Perlindungan <em>force majeure</em> untuk kedua pihak sesuai <strong>Pasal 8</strong>.</li>
        <li>Mekanisme musyawarah → mediasi → PN {{ c.pengadilan }} sesuai <strong>Pasal 9</strong>.</li>
      </ul>

      <hr style="border: 0; border-top: 1px solid #000; margin: 0 0 14px;">

      <p style="font-size: 10pt; margin: 0 0 18px;">
        Ditandatangani di: <strong>{{ c.lokasi }}</strong> &nbsp;|&nbsp;
        Tanggal: <strong>{{ c.tanggal }} {{ c.bulan }} {{ c.tahun }}</strong>
      </p>

      <!-- GANTI -->
      <div style="display: flex; gap: 12px; margin-top: 4px;">

        <!-- PIHAK PERTAMA -->
        <div style="flex: 1; text-align: center; padding: 6px 8px;">
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
        </div>

        <!-- PIHAK KEDUA -->
        <div style="flex: 1; text-align: center; padding: 6px 8px;">
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
        </div>

      </div>

      <div style="margin-top: 20px; padding-top: 10px; border-top: 1px dashed #cbd5e0; text-align: center;">
        <p style="font-size: 8.5pt; color: #94a3b8; margin: 0;">
          Dokumen ini sah secara hukum apabila ditandatangani oleh kedua belah pihak.
          Dibuat dalam 1 (satu) rangkap digital yang memiliki kekuatan hukum yang sama.
        </p>
      </div>
    </div>

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