<template>
  <div>
    <!-- Cursor glow effect -->
    <div
      class="cursor-glow hidden md:block"
      :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
    />
    <TheNavbar />
    <main>
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
const cursorX = ref(0)
const cursorY = ref(0)

onMounted(() => {
  window.addEventListener('mousemove', (e) => {
    cursorX.value = e.clientX
    cursorY.value = e.clientY
  })
})
</script>
