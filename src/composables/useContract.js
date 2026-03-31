// src/composables/useContract.js
import { ref, onUnmounted } from 'vue'
import { currentUser } from '@/composables/useAuth'
import {
  createContract,
  updateContract,
  fetchByWelcomeToken,
  listenContract,
  listenMyContracts,
  fetchByToken
} from '@/services/contractService'


// ── Untuk owner: edit welcome packet ──
export function useWelcomeEditor(contractId) {
  const contract = ref(null)
  const loading  = ref(true)
  const saving   = ref(false)

  const unsub = listenContract(contractId, (data) => {
    contract.value = data
    loading.value  = false
  })

  onUnmounted(unsub)

  async function saveWelcome(welcomeData) {
    saving.value = true
    await updateContract(contractId, { welcomeData })
    saving.value = false
  }

  return { contract, loading, saving, saveWelcome }
}

// ── Untuk klien: baca welcome via welcomeToken ──
export function useWelcomeView(token) {
  const contract = ref(null)
  const loading  = ref(true)
  const error    = ref(null)
  let   unsub    = () => {}

  fetchByWelcomeToken(token)
    .then((data) => {
      contract.value = data
      loading.value  = false
      unsub = listenContract(data.id, (updated) => {
        contract.value = updated
      })
    })
    .catch((e) => {
      error.value   = e.message
      loading.value = false
    })

  onUnmounted(() => unsub())

  return { contract, loading, error }
}

// ── Untuk owner: satu kontrak yang sedang dibuka ──
export function useContractEditor(contractId) {
  const contract   = ref(null)
  const loading    = ref(true)
  const error      = ref(null)

  // onSnapshot: setiap ada perubahan di Firestore → contract.value update otomatis
  const unsub = listenContract(contractId, (data) => {
    contract.value = data
    loading.value  = false
  })

  // Bersihkan listener saat komponen di-unmount
  onUnmounted(unsub)

  async function save(fields) {
    await updateContract(contractId, fields)
  }

  async function saveDevSignature(base64) {
    const fields = { signature_dev: base64 }
    if (contract.value?.signature_klien) {
      fields.status = 'completed'
    } else {
      fields.status = 'waiting_sign'
    }
    await updateContract(contractId, fields)
  }

  return { contract, loading, error, save, saveDevSignature }
}

// ── Untuk owner: daftar semua kontrak di dashboard ──
export function useMyContracts() {
  const contracts = ref([])
  const loading   = ref(true)

  const unsub = listenMyContracts(currentUser.value?.uid, (data) => {
    contracts.value = data
    loading.value   = false
  })

  onUnmounted(unsub)

  async function create(formData) {
    return await createContract(formData, currentUser.value.uid)
  }

  return { contracts, loading, create }
}

// ── Untuk klien: buka via shareToken ──
export function useClientContract(token) {
  const contract = ref(null)
  const loading  = ref(true)
  const error    = ref(null)
  let   unsub    = () => {}

  fetchByToken(token)
    .then((data) => {
      contract.value = data
      loading.value  = false
      // Setelah dapat ID-nya, pasang realtime listener
      unsub = listenContract(data.id, (updated) => {
        contract.value = updated
      })
    })
    .catch((e) => {
      error.value   = e.message
      loading.value = false
    })

  onUnmounted(() => unsub())

  async function saveClientSignature(base64) {
    const fields = { signature_klien: base64 }
    if (contract.value?.signature_dev) {
      fields.status = 'completed'
    } else {
      fields.status = 'waiting_sign'
    }
    await updateContract(contract.value.id, fields)
  }

  return { contract, loading, error, saveClientSignature }
}