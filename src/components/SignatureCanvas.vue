<!-- src/components/SignatureCanvas.vue -->
<template>
  <div class="flex flex-col gap-3">
    <div
      class="relative border-2 border-dashed rounded-xl overflow-hidden bg-gray-50"
      :class="locked ? 'border-green-400 bg-green-50' : 'border-gray-300'"
    >
      <!-- Jika sudah ada TTD, tampilkan gambarnya -->
      <img
        v-if="existingSignature"
        :src="existingSignature"
        class="w-full h-40 object-contain p-2"
      />

      <!-- Canvas menggambar TTD baru -->
      <canvas
        v-else
        ref="canvasRef"
        class="w-full h-40 cursor-crosshair touch-none"
        @mousedown="startDraw"
        @mousemove="draw"
        @mouseup="stopDraw"
        @mouseleave="stopDraw"
        @touchstart.prevent="startDraw"
        @touchmove.prevent="draw"
        @touchend="stopDraw"
      />

      <!-- Badge status locked -->
      <span
        v-if="locked"
        class="absolute top-2 right-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full"
      >
        ✓ Ditandatangani
      </span>
    </div>

    <div class="flex gap-2">
      <button
        v-if="!existingSignature"
        @click="clear"
        class="flex-1 py-2 text-sm border rounded-lg hover:bg-gray-50 transition"
      >
        Hapus
      </button>
      <button
        v-if="!existingSignature"
        @click="save"
        :disabled="saving"
        class="flex-1 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
      >
        {{ saving ? 'Menyimpan...' : 'Simpan TTD' }}
      </button>
    </div>

    <p class="text-xs text-gray-400 text-center">
      {{ existingSignature ? labelSigned : labelEmpty }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  existingSignature: { type: String, default: '' },
  signerName:        { type: String, required: true },
  locked:            { type: Boolean, default: false },
})

const emit = defineEmits(['save'])

const canvasRef = ref(null)
const saving    = ref(false)
let   ctx       = null
let   drawing   = false

const labelEmpty  = computed(() => `Area TTD — ${props.signerName}`)
const labelSigned = computed(() => `Ditandatangani oleh ${props.signerName}`)

onMounted(() => {
  if (canvasRef.value) initCanvas()
})

function initCanvas() {
  const canvas = canvasRef.value
  const scale  = window.devicePixelRatio || 1
  const rect   = canvas.getBoundingClientRect()

  canvas.width  = rect.width  * scale
  canvas.height = rect.height * scale

  ctx = canvas.getContext('2d')
  ctx.scale(scale, scale)
  ctx.strokeStyle = '#1a202c'
  ctx.lineWidth   = 2.5
  ctx.lineCap     = 'round'
  ctx.lineJoin    = 'round'
}

function getPos(e) {
  const rect = canvasRef.value.getBoundingClientRect()
  const src  = e.touches ? e.touches[0] : e
  return {
    x: src.clientX - rect.left,
    y: src.clientY - rect.top,
  }
}

function startDraw(e) {
  drawing = true
  const { x, y } = getPos(e)
  ctx.beginPath()
  ctx.moveTo(x, y)
}

function draw(e) {
  if (!drawing) return
  const { x, y } = getPos(e)
  ctx.lineTo(x, y)
  ctx.stroke()
}

function stopDraw() { drawing = false }

function clear() {
  const canvas = canvasRef.value
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

async function save() {
  saving.value = true
  const dataURL = canvasRef.value.toDataURL('image/png')
  emit('save', dataURL)
  saving.value = false
}
</script>