// src/services/contractService.js
import {
  collection, doc,
  addDoc, updateDoc, getDoc,
  onSnapshot, serverTimestamp, query, where, orderBy
} from 'firebase/firestore'
import { db } from '@/firebase'

// ── Skema satu dokumen kontrak ──────────────────────────────
//
// /contracts/{contractId}
// {
//   nomorSurat      : string
//   hari, tanggal, bulan, tahun, lokasi : string
//   jangkaWaktu     : string
//
//   namaKlien       : string
//   jabatanKlien    : string
//   alamatKlien     : string
//
//   namaDev         : string
//   alamatDev       : string
//
//   tier1, tier2, tier3, tier4, paket : string
//
//   namaBank        : string
//   noRek           : string
//   atasNama        : string
//   pengadilan      : string
//
//   signature_klien : string  (base64 PNG, default: '')
//   signature_dev   : string  (base64 PNG, default: '')
//
//   status          : 'draft' | 'waiting_sign' | 'completed'
//   createdBy       : string  (uid owner)
//   shareToken      : string  (random token untuk link klien)
//   createdAt       : Timestamp
// }

const COL = 'contracts'

// Buat kontrak baru (hanya owner)
// export async function createContract(data, ownerUid) {
//   const shareToken = crypto.randomUUID()
//   return await addDoc(collection(db, COL), {
//     ...data,
//     signature_klien: '',
//     signature_dev:   '',
//     status:          'draft',
//     createdBy:       ownerUid,
//     shareToken,
//     createdAt:       serverTimestamp(),
//   })
// }
export async function createContract(data, ownerUid) {
  const shareToken   = crypto.randomUUID()
  const welcomeToken = crypto.randomUUID() // token terpisah untuk welcome packet
  return await addDoc(collection(db, COL), {
    ...data,
    signature_klien: '',
    signature_dev:   '',
    status:          'draft',
    createdBy:       ownerUid,
    shareToken,
    welcomeToken,
    // Welcome Packet data (bisa diedit per kontrak)
    welcomeData: {
      pendahuluan: 'Terima kasih telah mempercayakan pengelolaan sistem Anda kepada saya. Dokumen ini disusun untuk memastikan kerja sama kita berjalan transparan, efisien, dan profesional.',
      slaResponse: {
        tier1: '1–2 Hari Kerja',
        tier2: '2–3 Hari Kerja',
        tier3: '3–5 Hari Kerja',
        tier4: '< 24 Jam (Prioritas Darurat)',
      },
      caraSubmit: 'Kirimkan laporan bug/permintaan melalui WhatsApp atau email resmi dengan menyertakan: (1) Screenshot/video error, (2) Langkah reproduksi, (3) Dampak ke operasional bisnis.',
      metodePembayaran: 'Pembayaran dilakukan maksimal 3 hari kerja setelah invoice dikirimkan. Keterlambatan pembayaran lebih dari 7 hari kerja dapat menyebabkan penundaan pengerjaan.',
      catatan: 'Perjanjian ini bersifat profesional dan saling mengikat. Setiap perubahan scope pekerjaan wajib dikomunikasikan dan disetujui secara tertulis sebelum dikerjakan.',
    },
    createdAt: serverTimestamp(),
  })
}

// Update field tertentu saja
export async function updateContract(contractId, fields) {
  const ref = doc(db, COL, contractId)
  await updateDoc(ref, fields)
}

// Ambil kontrak sekali (tidak realtime)
export async function fetchContract(contractId) {
  const snap = await getDoc(doc(db, COL, contractId))
  if (!snap.exists()) throw new Error('Kontrak tidak ditemukan')
  return { id: snap.id, ...snap.data() }
}

// Cari kontrak by shareToken (untuk link klien)
export async function fetchByToken(token) {
  const { getDocs } = await import('firebase/firestore')
  const q = query(
    collection(db, COL),
    where('shareToken', '==', token)
  )
  const snap = await getDocs(q)
  if (snap.empty) throw new Error('Link tidak valid')
  const d = snap.docs[0]
  return { id: d.id, ...d.data() }
}

export async function fetchByWelcomeToken(token) {
  const { getDocs } = await import('firebase/firestore')
  const q = query(
    collection(db, COL),
    where('welcomeToken', '==', token)
  )
  const snap = await getDocs(q)
  if (snap.empty) throw new Error('Link tidak valid')
  const d = snap.docs[0]
  return { id: d.id, ...d.data() }
}



// Listener realtime (onSnapshot) — return unsubscribe function
export function listenContract(contractId, callback) {
  return onSnapshot(doc(db, COL, contractId), (snap) => {
    if (snap.exists()) callback({ id: snap.id, ...snap.data() })
  })
}

// Semua kontrak milik owner (untuk dashboard)
export function listenMyContracts(ownerUid, callback) {
  const q = query(
    collection(db, COL),
    where('createdBy', '==', ownerUid),
    orderBy('createdAt', 'desc')
  )
  return onSnapshot(q, (snap) => {
    callback(snap.docs.map(d => ({ id: d.id, ...d.data() })))
  })
}