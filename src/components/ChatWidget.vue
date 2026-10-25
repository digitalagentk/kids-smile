<script setup lang="ts">
import { nextTick, ref } from 'vue'

interface Msg { from: 'bot' | 'me'; text: string }

const open = ref(false)
const input = ref('')
const typing = ref(false)
const box = ref<HTMLElement | null>(null)
const messages = ref<Msg[]>([{ from: 'bot', text: 'أهلاً بك! أنا "سنّونة" 🦷 مساعدك الذكي. كيف أقدر أساعدك اليوم؟' }])
const quick = ['كيف أحجز موعد؟', 'ما ساعات الدوام؟', 'طفلي يخاف من الطبيب', 'الأسعار']

function reply(q: string): string {
  if (/حجز|موعد/.test(q)) return 'تقدر تحجز من صفحة "احجز الآن" 📅 فقط اكتب الاسم والهاتف واختر التاريخ ونوع الخدمة.'
  if (/دوام|ساعات|وقت|مفتوح/.test(q)) return 'نستقبلكم من السبت إلى الخميس، من 9 صباحاً حتى 8 مساءً ⏰'
  if (/خوف|يخاف|خايف|قلق/.test(q)) return 'لا تقلق! 🌈 أطباؤنا مدربون على التعامل بلطف مع الصغار، ونبدأ بجولة تعريفية ولعب قبل أي فحص.'
  if (/سعر|أسعار|تكلفة|كم/.test(q)) return 'تختلف الأسعار حسب الخدمة 💰 احجز فحصاً عاماً وسيشرح الطبيب الخطة والتكلفة بوضوح.'
  if (/عنوان|موقع|وين|فين/.test(q)) return 'نحن في النجف 📍 ستجد التفاصيل في أسفل الصفحة.'
  if (/مرحبا|هلا|السلام|اهلا|أهلا/.test(q)) return 'أهلاً وسهلاً! 😄 اسألني عن الحجز أو الدوام أو الخدمات.'
  return 'سؤال جميل! 🌟 للتفاصيل تواصل معنا على الهاتف الموجود في أسفل الصفحة، أو اسألني عن الحجز والدوام والأسعار.'
}

async function scroll() {
  await nextTick()
  box.value?.scrollTo({ top: box.value.scrollHeight, behavior: 'smooth' })
}

async function send(text = input.value) {
  const t = text.trim()
  if (!t) return
  messages.value.push({ from: 'me', text: t })
  input.value = ''
  typing.value = true
  scroll()
  setTimeout(() => {
    typing.value = false
    messages.value.push({ from: 'bot', text: reply(t) })
    scroll()
  }, 900)
}
</script>

<template>
  <div class="fixed bottom-5 right-5 z-50" dir="rtl">
    <transition name="page">
      <section v-if="open" class="absolute bottom-20 right-0 flex h-[28rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-2xl shadow-sky-200">
        <header class="flex items-center gap-3 bg-sky-400 px-5 py-4 text-white">
          <span class="grid h-11 w-11 place-items-center rounded-full bg-yellow-300 text-2xl">🦷</span>
          <div class="flex-1"><p class="font-extrabold leading-tight">سنّونة</p><p class="text-xs text-sky-50">مساعدك الذكي • متصل الآن</p></div>
          <button @click="open = false" aria-label="إغلاق"><i class="fa-solid fa-xmark text-xl"></i></button>
        </header>

        <div ref="box" class="flex-1 space-y-3 overflow-y-auto bg-sky-50 p-4">
          <div v-for="(m, i) in messages" :key="i" class="flex" :class="m.from === 'me' ? 'justify-start' : 'justify-end'">
            <p class="max-w-[80%] rounded-3xl px-4 py-2 leading-7" :class="m.from === 'me' ? 'rounded-ss-md bg-orange-400 text-white' : 'rounded-se-md bg-white shadow'">{{ m.text }}</p>
          </div>
          <p v-if="typing" class="text-sm text-sky-500">سنّونة تكتب<span class="animate-pulse">...</span></p>
          <div class="flex flex-wrap gap-2 pt-1">
            <button v-for="q in quick" :key="q" @click="send(q)" class="rounded-full border-2 border-sky-200 bg-white px-3 py-1 text-sm font-bold text-sky-600 hover:bg-yellow-100">{{ q }}</button>
          </div>
        </div>

        <div class="flex gap-2 border-t border-sky-100 bg-white p-3">
          <input v-model="input" @keyup.enter="send()" placeholder="اكتب رسالتك..." class="input !py-2" />
          <button @click="send()" class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-orange-400 text-white hover:bg-orange-500" aria-label="إرسال">
            <i class="fa-solid fa-paper-plane -scale-x-100"></i>
          </button>
        </div>
      </section>
    </transition>

    <button @click="open = !open" class="grid h-16 w-16 place-items-center rounded-full bg-orange-400 text-3xl shadow-xl shadow-orange-200 transition hover:scale-110 animate-float" aria-label="الدردشة">
      <span v-if="!open">💬</span><i v-else class="fa-solid fa-xmark text-white"></i>
    </button>
  </div>
</template>