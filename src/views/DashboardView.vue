<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-2xl font-bold text-gray-800">Dashboard Kontrak</h1>
        <div class="flex gap-3">
          <button @click="handleCreate"
            class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
            + Kontrak Baru
          </button>
          <button @click="logout"
            class="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition">
            Logout
          </button>
        </div>
      </div>

      <div v-if="loading" class="text-center text-gray-400 py-20">Memuat...</div>

      <div v-else class="grid gap-4">
        <div v-for="c in contracts" :key="c.id"
          class="bg-white rounded-xl border p-5 flex justify-between items-center hover:shadow-sm transition cursor-pointer"
          @click="router.push(`/dashboard/contract/${c.id}`)">
          <div>
            <p class="font-semibold text-gray-800">{{ c.namaKlien || 'Klien belum diisi' }}</p>
            <p class="text-sm text-gray-400">{{ c.nomorSurat }}</p>
          </div>
          <span :class="statusClass(c.status)" class="text-xs px-3 py-1 rounded-full font-medium">
            {{ statusLabel(c.status) }}
          </span>
        </div>

        <div v-if="contracts.length === 0"
          class="text-center text-gray-400 py-20 bg-white rounded-xl border">
          Belum ada kontrak. Buat yang pertama!
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMyContracts } from '@/composables/useContract'
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { contracts, loading, create } = useMyContracts()
const { logout } = useAuth()

async function handleCreate() {
  const ref = await create({
    nomorSurat: '001/DEV/' + new Date().getFullYear(),
    namaKlien: '', namaDev: '', jabatanKlien: '', alamatKlien: '', alamatDev: '',
    hari: '', tanggal: '', bulan: '', tahun: '', lokasi: '',
    jangkaWaktu: '6 Bulan',
    tier1: 'Rp 200.000 - Rp 350.000', tier2: 'Rp 400.000 - Rp 750.000',
    tier3: 'Rp 1.000.000 - Rp 2.000.000', tier4: 'Mulai Rp 2.500.000++',
    paket: 'Basic Standby (Rp 1.500.000 / bln)',
    namaBank: '', noRek: '', atasNama: '', pengadilan: '',
  })
  router.push(`/dashboard/contract/${ref.id}`)
}

const statusLabel = (s) => ({ draft: 'Draft', waiting_sign: 'Menunggu TTD', completed: 'Selesai' }[s] || s)
const statusClass = (s) => ({
  draft:        'bg-gray-100 text-gray-600',
  waiting_sign: 'bg-yellow-100 text-yellow-700',
  completed:    'bg-green-100 text-green-700',
}[s] || 'bg-gray-100 text-gray-500')
</script>