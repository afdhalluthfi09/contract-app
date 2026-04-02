// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { authReady, currentUser } from '@/composables/useAuth'
import { useAuth } from '@/composables/useAuth'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    component: () => import('@/views/LoginView.vue'),
    meta: { guestOnly: true }
  },
  {
    path: '/dashboard',
    component: () => import('@/views/DashboardView.vue'),
    meta: { requiresOwner: true }
  },
  {
    path: '/dashboard/contract/:id',
    component: () => import('@/views/ContractEditorView.vue'),
    meta: { requiresOwner: true }
  },
  {
    path: '/sign/:token',
    component: () => import('@/views/ClientSignView.vue'),
  },
  {
    path: '/welcome/:token',
    component: () => import('@/views/WelcomeView.vue'),
  },
  // ⚠️ catch-all WAJIB paling bawah
  {
    path: '/:pathMatch(.*)*',
    redirect: '/dashboard'
  },
]

const router = createRouter({
  history: createWebHistory('/contract-app/'),
  routes
})

// Navigation guard
router.beforeEach(async (to) => {
  // Tunggu Firebase auth selesai cek status login
  if (!authReady.value) {
    await new Promise(resolve => {
      const stop = setInterval(() => {
        if (authReady.value) { clearInterval(stop); resolve() }
      }, 50)
    })
  }

  const user = currentUser.value
  const isAnon = user?.isAnonymous

  // Halaman owner: wajib login email (bukan anonymous)
  if (to.meta.requiresOwner) {
    if (!user || isAnon) return { path: '/login' }
  }

  // Halaman login: jika sudah login sebagai owner, redirect ke dashboard
  if (to.meta.guestOnly) {
    if (user && !isAnon) return { path: '/dashboard' }
  }

  // Halaman /sign: auto login anonymous kalau belum login
  if (to.path.startsWith('/sign/')) {
    if (!user) {
      const { loginAnonymous } = useAuth()
      await loginAnonymous()
    }
  }
})

export default router