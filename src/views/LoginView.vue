<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
      <h1 class="text-2xl font-bold mb-6 text-gray-800">Login Owner</h1>
      <div class="space-y-4">
        <input v-model="email" type="email" placeholder="Email"
          class="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input v-model="password" type="password" placeholder="Password"
          class="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
        <button @click="handleLogin" :disabled="loading"
          class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition font-medium">
          {{ loading ? 'Masuk...' : 'Masuk' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const { loginOwner, error } = useAuth()
const router  = useRouter()
const email    = ref('')
const password = ref('')
const loading  = ref(false)

async function handleLogin() {
  loading.value = true
  await loginOwner(email.value, password.value)
  if (!error.value) router.push('/dashboard')
  loading.value = false
}
</script>