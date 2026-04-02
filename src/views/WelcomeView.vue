<!-- src/views/WelcomeView.vue -->
<template>
  <div class="min-h-screen bg-gray-50 p-4">
    <div v-if="loading" class="text-center py-20 text-gray-400">Memuat dokumen...</div>
    <div v-else-if="error" class="text-center py-20 text-red-400">{{ error }}</div>

    <div v-else class="max-w-4xl mx-auto space-y-4">

      <!-- TOOLBAR -->
      <div class="bg-gray-800 rounded-2xl p-3 flex items-center justify-between flex-wrap gap-2">
        <div class="flex items-center gap-3">
          <span class="text-white font-mono text-sm">Welcome Packet</span>
          <span class="text-xs text-indigo-300 border border-indigo-400 px-2 py-0.5 rounded">
            {{ contract.namaKlien }}
          </span>
        </div>
        <div class="flex gap-2">
          <button
            @click="copyText"
            class="text-xs bg-gray-600 hover:bg-gray-700 text-white px-3 py-1.5 rounded-lg transition flex items-center gap-1">
            {{ copied ? '✓ Tersalin' : '⎘ Copy Teks' }}
          </button>
          <button
            @click="printDoc"
            class="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg transition flex items-center gap-1">
            ⎙ Print / PDF
          </button>
          <!-- <button
            @click="exportCSV"
            class="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg transition flex items-center gap-1">
            ↓ Export CSV
          </button> -->
        </div>
      </div>

      <!-- DOKUMEN A4 -->
      <!-- GANTI -->
      <div class="bg-gray-200 p-2 sm:p-4 rounded-2xl">
        <div
          id="welcomeToPrint"
          class="bg-white shadow-sm mx-auto"
          style="width: 100%; max-width: 210mm; min-height: 297mm; padding: clamp(12px, 4vw, 20mm);">
          <WelcomeTemplate :c="contract" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import WelcomeTemplate from '@/components/WelcomeTemplate.vue'
import { useWelcomeView } from '@/composables/useContract'

const route = useRoute()
const { contract, loading, error } = useWelcomeView(route.params.token)

const copied = ref(false)

// Print / Save as PDF — pakai browser print dialog
// Di print dialog, pilih "Save as PDF" untuk dapat file PDF
function printDoc() {
  const content   = document.getElementById('welcomeToPrint').innerHTML
  const namaKlien = contract.value?.namaKlien ?? 'Klien'
  const namaDev   = contract.value?.namaDev ?? 'Developer'
  const nomorSurat = contract.value?.nomorSurat ?? ''

  // Nama file formal: "Service Proposal - NamaKlien"
  const judulDokumen = `Service Proposal & Collaboration Guide — ${namaKlien}`

  const printWindow = window.open('', '_blank')
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>${judulDokumen}</title>
        <style>
          @page {
            margin: 20mm 20mm 25mm 20mm;
            size: A4;

            /* Header: nama dokumen di kiri, nama dev di kanan */
            @top-left {
              content: "Service Proposal — ${namaKlien}";
              font-family: Arial, sans-serif;
              font-size: 8pt;
              color: #94a3b8;
            }
            @top-right {
              content: "${namaDev} | Fullstack Developer";
              font-family: Arial, sans-serif;
              font-size: 8pt;
              color: #94a3b8;
            }
            @top-center {
              content: "";
              border-bottom: 0.5pt solid #e2e8f0;
              width: 100%;
            }

            /* Footer: ref nomor surat di kiri, nomor halaman di kanan */
            @bottom-left {
              content: "Ref: ${nomorSurat}";
              font-family: Arial, sans-serif;
              font-size: 8pt;
              color: #94a3b8;
            }
            @bottom-center {
              content: "";
            }
            @bottom-right {
              content: "Halaman " counter(page) " dari " counter(pages);
              font-family: Arial, sans-serif;
              font-size: 8pt;
              color: #94a3b8;
            }
          }

          body {
            font-family: Arial, sans-serif;
            color: #2d3748;
            line-height: 1.6;
            font-size: 11pt;
            margin: 0;
          }
          h2 { color: #4338ca; font-size: 18pt; font-weight: bold; }
          h3 { color: #2b6cb0; font-size: 13pt; font-weight: bold; margin-top: 20px; }
          table { border-collapse: collapse; width: 100%; margin: 12px 0; }
          th { background-color: #edf2f7; text-align: left; }
          th, td { border: 1px solid #cbd5e0; padding: 10px; font-size: 10.5pt; }
          tr:nth-child(even) td { background-color: #f7fafc; }
          ul, ol { margin-top: 5px; margin-bottom: 10px; padding-left: 20px; }
          li { margin-bottom: 6px; }
          hr { border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0; }
          strong { font-weight: bold; }

          /* Tiap section tidak terpotong */
          h3 { page-break-after: avoid; break-after: avoid; }
          table { page-break-inside: avoid; break-inside: avoid; }
          ul, ol { page-break-inside: avoid; break-inside: avoid; }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `)
  printWindow.document.close()

  printWindow.onload = () => {
    printWindow.focus()
    printWindow.print()
    printWindow.close()
  }
}

// Copy plain text dari elemen dokumen
function copyText() {
  const el = document.getElementById('welcomeToPrint')
  const text = el?.innerText || ''
  navigator.clipboard.writeText(text).then(() => {
    copied.value = true
    setTimeout(() => copied.value = false, 2000)
  })
}

// Export CSV rate card
function exportCSV() {
  if (!contract.value) return

  const c = contract.value
  const w = c.welcomeData ?? {}
  const sla = w.slaResponse ?? {}

  const rows = [
    ['Kategori Bug', 'Deskripsi & Kriteria', 'Estimasi Biaya (Per Tiket)', 'SLA Response'],
    ['Tier 1: Trivial', 'Perbaikan teks, logo, konten statis, CSS ringan.', c.tier1, sla.tier1 ?? '-'],
    ['Tier 2: Minor',   'Perbaikan logika sederhana, error null, validasi input.', c.tier2, sla.tier2 ?? '-'],
    ['Tier 3: Major',   'Perbaikan alur bisnis, optimasi database, integrasi API.', c.tier3, sla.tier3 ?? '-'],
    ['Tier 4: Critical','Sistem mati (down), kebocoran data, fitur utama tidak berfungsi.', c.tier4, sla.tier4 ?? '-'],
    [],
    ['Paket', 'Keterangan', 'Biaya Bulanan', ''],
    ['Paket Retainer', 'Prioritas penanganan, tidak perlu negosiasi per tiket.', c.paket, ''],
    [],
    ['Info Pembayaran', '', '', ''],
    ['Bank', c.namaBank, '', ''],
    ['No. Rekening', c.noRek, '', ''],
    ['Atas Nama', c.atasNama, '', ''],
  ]

  const csvContent = rows
    .map(row => row.map(cell => `"${(cell ?? '').replace(/"/g, '""')}"`).join(','))
    .join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url  = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href     = url
  link.download = `RateCard_${(c.namaKlien ?? 'Klien').replace(/\s+/g, '_')}.csv`
  link.click()
  URL.revokeObjectURL(url)
}
</script>

<!-- Style khusus untuk print -->
<style>
/* 1. Menghilangkan Header & Footer bawaan browser (Tanggal, URL, Page) */
@page {
  margin: 0; 
}

@media print {
  /* 2. Beri jarak aman agar teks tidak terpotong di ujung fisik kertas */
  body {
    margin: 1.5cm; 
  }

  /* Sembunyikan semua UI kecuali dokumen */
  .min-h-screen > .max-w-4xl > *:not(.bg-gray-200) {
    display: none !important;
  }

  /* Hapus background gray wrapper */
  .bg-gray-200 {
    background: white !important;
    padding: 0 !important;
    border-radius: 0 !important;
  }

  /* Reset container dokumen */
  #welcomeToPrint {
    width: 100% !important;
    max-width: 100% !important;
    min-height: unset !important;
    padding: 0 !important; /* Padding sudah diwakilkan oleh margin body di atas */
    box-shadow: none !important;
    margin: 0 !important;
  }

  /* Sembunyikan toolbar */
  .bg-gray-800 {
    display: none !important;
  }
}
</style>