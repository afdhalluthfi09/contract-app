<template>
  <div class="min-h-screen bg-gray-50 p-4">
    <div v-if="loading" class="text-center py-20 text-gray-400">Memuat kontrak...</div>

    <div v-else class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

      <!-- KOLOM KIRI: FORM -->
      <div class="bg-white rounded-2xl shadow p-6 space-y-4 h-fit sticky top-4">

        <div class="flex items-center justify-between mb-2">
          <h2 class="font-bold text-gray-800">Edit Kontrak</h2>
          <button @click="router.back()" class="text-sm text-gray-400 hover:text-gray-600">← Kembali</button>
        </div>

        <!-- SECTION 1: FIELD TEKS -->
        <div v-for="field in fields" :key="field.key">
          <label class="block text-xs text-gray-500 mb-1">{{ field.label }}</label>
          <input v-model="form[field.key]" @change="save(field.key)"
            class="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        <!-- SECTION 2: HARGA TIER (untuk kalkulasi paket otomatis) -->
        <div class="border border-blue-200 rounded-xl p-4 bg-blue-50 space-y-3">
          <p class="text-xs font-semibold text-blue-700">
            Harga Minimum Tier (kalkulasi paket otomatis)
          </p>
          <p class="text-xs text-blue-400">
            Angka ini dipakai menghitung nilai paket monthly di Welcome Packet.
            Berbeda dari teks display di atas.
          </p>
          <div v-for="th in tierHargaFields" :key="th.key" class="flex items-center gap-2">
            <label class="text-xs text-gray-500 w-32 shrink-0">{{ th.label }}</label>
            <div class="relative flex-1">
              <span class="absolute left-2 top-2 text-xs text-gray-400">Rp</span>
              <input
                type="number"
                :value="tierHargaForm[th.key]"
                @change="saveTierHarga(th.key, $event.target.value)"
                class="w-full border rounded-lg pl-8 pr-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>

        <!-- SECTION 3: LINK SHARE -->
        <!-- Link TTD Kontrak -->
        <div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p class="text-xs text-blue-700 font-medium mb-2">
            🔏 Link TTD Kontrak untuk klien:
          </p>
          <div class="flex gap-2">
            <input :value="shareUrl" readonly
              class="flex-1 text-xs border rounded p-2 bg-white text-gray-600" />
            <button @click="copyLink"
              class="text-xs bg-blue-600 text-white px-3 rounded-lg hover:bg-blue-700 transition">
              {{ copied ? '✓' : 'Copy' }}
            </button>
          </div>
        </div>

        <!-- Link Welcome Packet -->
        <div class="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
          <p class="text-xs text-indigo-700 font-medium mb-2">
            📄 Link Welcome Packet untuk klien:
          </p>
          <div class="flex gap-2">
            <input :value="welcomeUrl" readonly
              class="flex-1 text-xs border rounded p-2 bg-white text-gray-600" />
            <button @click="copyWelcomeLink"
              class="text-xs bg-indigo-600 text-white px-3 rounded-lg hover:bg-indigo-700 transition">
              {{ copiedWelcome ? '✓' : 'Copy' }}
            </button>
          </div>
        </div>

        <!-- SECTION 4: STATUS -->
        <div class="flex items-center justify-between pt-2 border-t">
          <span class="text-xs text-gray-500">Status kontrak</span>
          <span :class="statusClass" class="text-xs font-medium px-3 py-1 rounded-full">
            {{ statusLabel }}
          </span>
        </div>

        <!-- SECTION 5: TTD DEVELOPER -->
        <div class="pt-2 border-t">
          <h3 class="text-sm font-semibold text-gray-700 mb-3">Tanda Tangan Developer (Kamu)</h3>
          <SignatureCanvas
            :existing-signature="contract?.signature_dev"
            :signer-name="contract?.namaDev || 'Developer'"
            :locked="!!contract?.signature_dev"
            @save="handleSaveDevSignature"
          />
        </div>

        <!-- SECTION 6: TTD KLIEN (read-only) -->
        <div class="pt-2 border-t">
          <h3 class="text-sm font-semibold text-gray-700 mb-3">Tanda Tangan Klien</h3>
          <div v-if="contract?.signature_klien" class="text-center">
            <img :src="contract.signature_klien" class="max-h-20 mx-auto" />
            <p class="text-xs text-green-600 mt-2">✓ Klien sudah menandatangani</p>
          </div>
          <div v-else
            class="h-20 border-2 border-dashed rounded-xl flex items-center justify-center text-gray-400 text-sm">
            Menunggu TTD klien...
          </div>
        </div>

        <!-- SECTION 7: DOWNLOAD (hanya jika completed) -->
        <button
          v-if="contract?.status === 'completed'"
          @click="downloadPDF"
          class="w-full bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition">
          ↓ Download PDF Kontrak
        </button>

      </div>

      <!-- KOLOM KANAN: PREVIEW DOKUMEN -->
      <div class="bg-white rounded-2xl shadow overflow-hidden">
        <div class="bg-gray-800 px-4 py-2 flex items-center justify-between sticky top-0 z-10">
          <span class="text-white text-sm font-mono">Preview Kontrak</span>
          <span :class="statusClass" class="text-xs font-bold px-2 py-0.5 rounded">
            {{ statusLabel }}
          </span>
        </div>
        <div class="bg-gray-200 p-3 overflow-x-auto">
          <div
            id="documentToPrint"
            class="bg-white shadow-sm mx-auto"
            style="width: 100%; max-width: 210mm; min-height: 297mm; padding: 15mm;">
            <ContractTemplate v-if="contract" :c="contract" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ContractTemplate from '@/components/ContractTemplate.vue'
import SignatureCanvas from '@/components/SignatureCanvas.vue'
import { useContractEditor } from '@/composables/useContract'

const route  = useRoute()
const router = useRouter()
const { contract, loading, save: saveField, saveDevSignature } = useContractEditor(route.params.id)

const copied        = ref(false)
const copiedWelcome = ref(false)
const form          = computed(() => contract.value || {})

// ── URLs ──────────────────────────────────────────────────
// GANTI — pakai window.location.pathname untuk detect base otomatis
const getBase = () => {
  const base = import.meta.env.BASE_URL
  return base.endsWith('/') ? base : base + '/'
}

const shareUrl = computed(() =>
  contract.value
    ? `${window.location.origin}${getBase()}sign/${contract.value.shareToken}`
    : ''
)
const welcomeUrl = computed(() =>
  contract.value
    ? `${window.location.origin}${getBase()}welcome/${contract.value.welcomeToken}`
    : ''
)

// ── Field definisi ────────────────────────────────────────
const fields = [
  { key: 'nomorSurat',   label: 'Nomor Surat' },
  { key: 'namaKlien',    label: 'Nama Klien' },
  { key: 'jabatanKlien', label: 'Jabatan Klien' },
  { key: 'namaDev',      label: 'Nama Developer' },
  { key: 'alamatDev',    label: 'Alamat Developer' },
  { key: 'alamatKlien',  label: 'Alamat Klien' },
  { key: 'hari',         label: 'Hari' },
  { key: 'tanggal',      label: 'Tanggal' },
  { key: 'bulan',        label: 'Bulan' },
  { key: 'tahun',        label: 'Tahun' },
  { key: 'lokasi',       label: 'Lokasi / Kota' },
  { key: 'jangkaWaktu',  label: 'Masa Berlaku' },
  { key: 'tier1',        label: 'Tier 1 — Teks Display (contoh: Rp 200.000 - Rp 350.000)' },
  { key: 'tier2',        label: 'Tier 2 — Teks Display' },
  { key: 'tier3',        label: 'Tier 3 — Teks Display' },
  { key: 'tier4',        label: 'Tier 4 — Teks Display' },
  { key: 'paket',        label: 'Paket Retainer — Teks Display' },
  { key: 'namaBank',     label: 'Nama Bank' },
  { key: 'noRek',        label: 'No. Rekening' },
  { key: 'atasNama',     label: 'Atas Nama' },
  { key: 'pengadilan',   label: 'Pengadilan Negeri' },
]

const tierHargaFields = [
  { key: 'tier1',      label: 'Tier 1 (Trivial)' },
  { key: 'tier2',      label: 'Tier 2 (Minor)' },
  { key: 'tier3',      label: 'Tier 3 (Major)' },
  { key: 'tier4',      label: 'Tier 4 (Critical)' },
  { key: 'monitoring', label: 'Biaya Monitoring' },
]

const tierHargaForm = computed(() => contract.value?.tierHarga ?? {
  tier1: 200000, tier2: 400000, tier3: 1000000, tier4: 2500000, monitoring: 400000
})

// ── Actions ───────────────────────────────────────────────
async function save(key) {
  await saveField({ [key]: form.value[key] })
}

async function saveTierHarga(key, value) {
  await saveField({ [`tierHarga.${key}`]: Number(value) })
}

async function copyLink() {
  await navigator.clipboard.writeText(shareUrl.value)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}

async function copyWelcomeLink() {
  await navigator.clipboard.writeText(welcomeUrl.value)
  copiedWelcome.value = true
  setTimeout(() => copiedWelcome.value = false, 2000)
}

async function handleSaveDevSignature(base64) {
  await saveDevSignature(base64)
}

// ── Status ────────────────────────────────────────────────
const statusLabel = computed(() => ({
  draft:        'Draft',
  waiting_sign: 'Menunggu TTD',
  completed:    'Selesai ✓',
}[contract.value?.status] || '-'))

const statusClass = computed(() => ({
  draft:        'bg-gray-100 text-gray-600',
  waiting_sign: 'bg-yellow-100 text-yellow-700',
  completed:    'bg-green-100 text-green-700',
}[contract.value?.status]))

// ── Download PDF ──────────────────────────────────────────
async function downloadPDF() {
  const content    = document.getElementById('documentToPrint').innerHTML
  const namaKlien  = contract.value?.namaKlien ?? 'Klien'
  const nomorSurat = contract.value?.nomorSurat ?? ''

  const printWindow = window.open('', '_blank')
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Kontrak - ${namaKlien}</title>
        <style>
          @page {
            margin: 20mm;
            size: A4;
          }
          body {
            font-family: Arial, sans-serif;
            color: #000;
            line-height: 1.6;
            font-size: 11pt;
            margin: 0;
          }
          h2, h3, h4 { font-weight: bold; }
          h2 { font-size: 14pt; text-align: center; }
          h3 { font-size: 12pt; }
          h4 { font-size: 11pt; text-align: center; margin-top: 25px; }
          p  { margin: 6px 0; }
          table { border-collapse: collapse; width: 100%; }
          td, th { padding: 10px; }
          ul, ol { margin-top: 5px; margin-bottom: 10px; padding-left: 20px; }
          li { margin-bottom: 4px; }
          hr { border: 0; border-top: 1px solid #000; margin: 20px 0; }
          img { max-height: 90px; max-width: 90%; object-fit: contain; display: block; margin: 0 auto; }

          /* Execution page tidak terpotong */
          [style*="page-break-before"] {
            page-break-before: always !important;
            break-before: page !important;
          }
          [style*="page-break-inside"] {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        </style>
      </head>
      <body>${content}</body>
    </html>
  `)
  printWindow.document.close()

  printWindow.onload = () => {
    printWindow.focus()
    printWindow.print()
    printWindow.close()
  }
}
</script>