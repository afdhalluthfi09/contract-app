<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>
```

---

## Checklist Final Sebelum `docker-compose up`
```
✓ .env sudah diisi dengan firebaseConfig asli
✓ .env ada di .gitignore
✓ Firebase Console: Authentication → Anonymous diaktifkan
✓ Firebase Console: Authentication → Email/Password diaktifkan
✓ Firebase Console: buat akun owner manual di Authentication → Users → Add User
✓ Firestore Security Rules sudah di-paste dan di-publish
✓ src/main.js sudah pakai router + pinia
✓ vite.config.js: tambahkan resolve alias @ → src