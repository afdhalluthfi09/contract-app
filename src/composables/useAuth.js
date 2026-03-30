// src/composables/useAuth.js
import { ref } from 'vue'
import {
  getAuth,
  signInWithEmailAndPassword,
  signInAnonymously,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '@/firebase'

export const currentUser = ref(null)
export const authReady    = ref(false)

// Pantau perubahan status login secara global
onAuthStateChanged(auth, (user) => {
  currentUser.value = user
  authReady.value   = true
})

export function useAuth() {
  const error = ref(null)

  // Owner login dengan email + password
  async function loginOwner(email, password) {
    error.value = null
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
      error.value = 'Email atau password salah.'
    }
  }

  // Klien login anonymous (dipanggil dari router)
  async function loginAnonymous() {
    if (!currentUser.value) {
      await signInAnonymously(auth)
    }
  }

  async function logout() {
    await signOut(auth)
  }

  return { loginOwner, loginAnonymous, logout, error }
}