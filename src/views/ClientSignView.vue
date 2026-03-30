<template>
  <div class="min-h-screen bg-gray-50 p-4">
    <div v-if="loading" class="text-center py-20 text-gray-400">Memuat kontrak...</div>
    <div v-else-if="error" class="text-center py-20 text-red-400">{{ error }}</div>

    <div v-else class="max-w-2xl mx-auto space-y-6">
      <div class="bg-white rounded-2xl shadow p-6">
        <h1 class="text-xl font-bold text-gray-800 mb-1">Dokumen Kontrak</h1>
        <p class="text-sm text-gray-400">{{ contract.nomorSurat }}</p>
      </div>

      <!-- Preview kontrak sederhana -->
        <div class="bg-white rounded-2xl shadow overflow-hidden">
        <div class="bg-gray-800 px-4 py-3 flex items-center justify-between">
            <span class="text-white text-sm font-mono">Dokumen Kontrak</span>
            <span
            :class="contract.status === 'completed'
                ? 'text-green-400 border-green-400'
                : 'text-yellow-400 border-yellow-400'"
            class="text-xs font-bold border px-2 py-0.5 rounded bg-gray-900"
            >
            {{ contract.status === 'completed' ? '✓ Selesai' : '⏳ Menunggu TTD' }}
            </span>
        </div>
        <!-- Preview A4 -->
        <div class="bg-gray-200 p-4 overflow-x-auto">
            <div class="bg-white shadow-sm mx-auto"
            style="width: 100%; max-width: 210mm; min-height: 297mm; padding: 15mm;">
            <ContractTemplate :c="contract" />
            </div>
        </div>
        </div>

      <!-- Status TTD dev -->
      <div class="bg-white rounded-2xl shadow p-6">
        <h3 class="font-semibold text-gray-700 mb-3">Tanda Tangan Developer</h3>
        <div v-if="contract.signature_dev" class="text-center">
          <img :src="contract.signature_dev" class="max-h-24 mx-auto" />
          <p class="text-xs text-green-600 mt-2">✓ Developer sudah menandatangani</p>
        </div>
        <div v-else class="h-20 border-2 border-dashed rounded-xl flex items-center justify-center text-gray-400 text-sm">
          Developer belum menandatangani
        </div>
      </div>

      <!-- TTD Klien -->
      <div class="bg-white rounded-2xl shadow p-6">
        <h3 class="font-semibold text-gray-700 mb-3">Tanda Tangan Anda</h3>

        <div v-if="contract.status === 'completed'" class="text-center py-4">
          <p class="text-green-600 font-medium">✓ Kontrak telah ditandatangani kedua pihak</p>
          <img :src="contract.signature_klien" class="max-h-24 mx-auto mt-3" />
        </div>

        <SignatureCanvas
          v-else
          :existing-signature="contract.signature_klien"
          :signer-name="contract.namaKlien || 'Klien'"
          :locked="!!contract.signature_klien"
          @save="saveClientSignature"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import ContractTemplate from '@/components/ContractTemplate.vue'
import { useClientContract } from '@/composables/useContract'
import SignatureCanvas from '@/components/SignatureCanvas.vue'

const route = useRoute()
const { contract, loading, error, saveClientSignature } = useClientContract(route.params.token)
</script>