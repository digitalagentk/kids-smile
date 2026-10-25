<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ChatWidget from './components/ChatWidget.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden">
    <Navbar />
    <main class="flex-1 pt-20">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
    <ChatWidget />
  </div>
</template>

<style>
.page-enter-active, .page-leave-active { transition: all 0.35s ease; }
.page-enter-from { opacity: 0; transform: translateY(24px) scale(0.98); }
.page-leave-to { opacity: 0; transform: translateY(-16px); }
</style>