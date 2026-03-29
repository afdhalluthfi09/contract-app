<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold">Ruang Kontrak Klien: {{ documentId }}</h1>
    
    <div class="mt-4 p-4 border rounded">
      <h3>Status Tanda Tangan:</h3>
      <p>Klien: {{ isClientSigned ? '✅ Selesai' : '⏳ Menunggu' }}</p>
      <p>Developer: {{ isDevSigned ? '✅ Selesai' : '⏳ Menunggu' }}</p>
    </div>

    <!-- Tampilkan tombol Download HANYA jika keduanya sudah TTD -->
    <button v-if="isClientSigned && isDevSigned" @click="downloadPdf" class="mt-4 bg-green-600 text-white px-4 py-2 rounded">
      Download PDF Resmi
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

// Anggap ini adalah URL unik per klien: [domain.com/sign/KONTRAK_001](https://domain.com/sign/KONTRAK_001)
const documentId = 'KONTRAK_001'; 
const isClientSigned = ref(false);
const isDevSigned = ref(false);

let unsubscribe = null;

onMounted(() => {
  const contractRef = doc(db, 'contracts', documentId);

  // INILAH MAGIC-NYA: Listener Real-Time
  // Setiap ada perubahan data di Firebase (Klien simpan TTD), fungsi ini langsung terpanggil!
  unsubscribe = onSnapshot(contractRef, (docSnap) => {
    if (docSnap.exists()) {
      const data = docSnap.data();
      // Update UI seketika
      isClientSigned.value = data.signatureClient !== '';
      isDevSigned.value = data.signatureDev !== '';
    }
  });
});

// Jangan lupa bersihkan memory jika klien tutup tab
onUnmounted(() => {
  if (unsubscribe) unsubscribe();
});

// Fungsi ketika klien save TTD di canvas
const saveSignatureToDB = async (base64Image) => {
  const contractRef = doc(db, 'contracts', documentId);
  // Mengirim data TTD ke Firebase, yang akan memicu onSnapshot di layar Developer
  await updateDoc(contractRef, {
    signatureClient: base64Image
  });
};
</script>