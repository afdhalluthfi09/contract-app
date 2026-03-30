<template>
  <div class="min-h-screen bg-gray-50 p-4">
    <div v-if="loading" class="text-center py-20 text-gray-400">Memuat kontrak...</div>

    <div v-else class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

      <!-- FORM KIRI -->
      <div class="bg-white rounded-2xl shadow p-6 space-y-4 h-fit">
        <div class="flex items-center justify-between mb-2">
          <h2 class="font-bold text-gray-800">Edit Kontrak</h2>
          <button @click="router.back()" class="text-sm text-gray-400 hover:text-gray-600">← Kembali</button>
        </div>

        <div v-for="field in fields" :key="field.key">
          <label class="block text-xs text-gray-500 mb-1">{{ field.label }}</label>
          <input v-model="form[field.key]" @change="save(field.key)"
            class="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        <!-- Share link -->
        <div class="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p class="text-xs text-blue-700 font-medium mb-2">Link untuk klien:</p>
          <div class="flex gap-2">
            <input :value="shareUrl" readonly
              class="flex-1 text-xs border rounded p-2 bg-white text-gray-600" />
            <button @click="copyLink"
              class="text-xs bg-blue-600 text-white px-3 rounded-lg hover:bg-blue-700 transition">
              {{ copied ? '✓' : 'Copy' }}
            </button>
          </div>
        </div>
      </div>

      <!-- PREVIEW + TTD KANAN -->
      
        <div class="bg-white rounded-2xl shadow overflow-hidden">
        <div class="bg-gray-800 px-4 py-2 flex items-center justify-between">
            <span class="text-white text-sm font-mono">Preview Kontrak</span>
            <span
            :class="statusClass"
            class="text-xs font-bold px-2 py-0.5 rounded"
            >
            {{ statusLabel }}
            </span>
        </div>
        <div class="bg-gray-200 p-3 overflow-x-auto">
            <div id="documentToPrint"
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
import ContractTemplate from '@/components/ContractTemplate.vue'
import { useRoute, useRouter } from 'vue-router'
import { useContractEditor } from '@/composables/useContract'
import SignatureCanvas from '@/components/SignatureCanvas.vue'

const route  = useRoute()
const router = useRouter()
const { contract, loading, save: saveField, saveDevSignature } = useContractEditor(route.params.id)

const copied = ref(false)
const form   = computed(() => contract.value || {})

const shareUrl = computed(() =>
  contract.value ? `${window.location.origin}/sign/${contract.value.shareToken}` : ''
)

const fields = [
  { key: 'nomorSurat',   label: 'Nomor Surat' },
  { key: 'namaKlien',    label: 'Nama Klien' },
  { key: 'jabatanKlien', label: 'Jabatan Klien' },
  { key: 'namaKlien',    label: 'Nama Klien' },
  { key: 'namaDev',      label: 'Nama Developer' },
  { key: 'tier1',        label: 'Biaya Tier 1' },
  { key: 'tier2',        label: 'Biaya Tier 2' },
  { key: 'tier3',        label: 'Biaya Tier 3' },
  { key: 'tier4',        label: 'Biaya Tier 4' },
  { key: 'jangkaWaktu',  label: 'Masa Berlaku' },
]

async function save(key) {
  await saveField({ [key]: form.value[key] })
}

async function copyLink() {
  await navigator.clipboard.writeText(shareUrl.value)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}

const statusLabel = computed(() => ({
  draft: 'Draft', waiting_sign: 'Menunggu TTD', completed: 'Selesai ✓'
}[contract.value?.status] || '-'))

const statusClass = computed(() => ({
  draft:        'bg-gray-100 text-gray-600',
  waiting_sign: 'bg-yellow-100 text-yellow-700',
  completed:    'bg-green-100 text-green-700',
}[contract.value?.status]))

// SESUDAH
async function downloadPDF() {
  window.print()
}
</script>