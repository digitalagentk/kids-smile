<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const links = [
  { to: '/', label: 'الرئيسية', icon: 'fa-house' },
  { to: '/about', label: 'من نحن', icon: 'fa-users' },
  { to: '/booking', label: 'احجز الآن', icon: 'fa-calendar-check' },
  { to: '/auth', label: 'تسجيل الدخول', icon: 'fa-right-to-bracket' },
]
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-40 bg-white/90 backdrop-blur shadow-md shadow-sky-100">
    <nav class="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
      <router-link to="/" class="flex items-center gap-2 text-2xl font-extrabold text-sky-500">
        <span class="grid h-12 w-12 place-items-center rounded-full bg-yellow-300 text-2xl animate-wiggle">🦷</span>
        ابتسامة الأطفال
      </router-link>

      <ul class="hidden items-center gap-2 md:flex">
        <li v-for="l in links" :key="l.to">
          <router-link
            :to="l.to"
            class="flex items-center gap-2 rounded-full px-5 py-2 font-bold transition hover:bg-yellow-100"
            active-class="!bg-sky-400 !text-white"
            exact-active-class="!bg-sky-400 !text-white"
          >
            <i class="fa-solid" :class="l.icon"></i>{{ l.label }}
          </router-link>
        </li>
      </ul>

      <button class="grid h-11 w-11 place-items-center rounded-full bg-orange-100 text-orange-500 md:hidden" @click="open = !open" aria-label="القائمة">
        <i class="fa-solid" :class="open ? 'fa-xmark' : 'fa-bars'"></i>
      </button>
    </nav>

    <transition name="page">
      <ul v-if="open" class="space-y-1 bg-white px-4 pb-4 md:hidden">
        <li v-for="l in links" :key="l.to">
          <router-link :to="l.to" @click="open = false" class="flex items-center gap-3 rounded-2xl px-4 py-3 font-bold hover:bg-yellow-100" exact-active-class="!bg-sky-400 !text-white">
            <i class="fa-solid w-5 text-center" :class="l.icon"></i>{{ l.label }}
          </router-link>
        </li>
      </ul>
    </transition>
  </header>
</template>