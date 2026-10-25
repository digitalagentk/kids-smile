<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isLogin = ref(route.query.mode !== 'register')
const showPass = ref(false)
const msg = ref('')

watch(() => route.query.mode, (m) => { isLogin.value = m !== 'register'; msg.value = '' })

const form = reactive({ name: '', email: '', password: '', confirm: '' })

function submit() {
  if (!form.email.includes('@') || form.password.length < 6) return (msg.value = '⚠️ تحقق من البريد وكلمة المرور (6 أحرف على الأقل)')
  if (!isLogin.value) {
    if (form.name.trim().length < 3) return (msg.value = '⚠️ اكتب اسمك')
    if (form.password !== form.confirm) return (msg.value = '⚠️ كلمتا المرور غير متطابقتين')
  }
  msg.value = isLogin.value ? '✅ تم تسجيل الدخول (واجهة تجريبية)' : '🎉 تم إنشاء الحساب (واجهة تجريبية)'
  // هنا اربط الـ API لاحقاً
}
</script>

<template>
  <div class="mx-auto flex max-w-md flex-col items-center px-6 py-14">
    <div class="mb-4 text-7xl animate-float">{{ isLogin ? '🔑' : '🎈' }}</div>
    <div v-motion-pop class="card w-full !p-8">
      <h1 class="mb-1 text-center text-3xl font-extrabold text-sky-600">{{ isLogin ? 'أهلاً بعودتك!' : 'انضم لعائلتنا!' }}</h1>
      <p class="mb-6 text-center">{{ isLogin ? 'سجّل دخولك لإدارة حجوزاتك' : 'أنشئ حساباً جديداً في ثوانٍ' }}</p>

      <form class="space-y-4" novalidate @submit.prevent="submit">
        <input v-if="!isLogin" v-model="form.name" class="input" placeholder="الاسم الكامل" />
        <input v-model="form.email" type="email" dir="ltr" class="input text-right" placeholder="البريد الإلكتروني" />
        <div class="relative">
          <input v-model="form.password" :type="showPass ? 'text' : 'password'" dir="ltr" class="input text-right" placeholder="كلمة المرور" />
          <button type="button" class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" @click="showPass = !showPass" aria-label="إظهار">
            <i class="fa-solid" :class="showPass ? 'fa-eye-slash' : 'fa-eye'"></i>
          </button>
        </div>
        <input v-if="!isLogin" v-model="form.confirm" :type="showPass ? 'text' : 'password'" dir="ltr" class="input text-right" placeholder="تأكيد كلمة المرور" />
        <p v-if="msg" class="rounded-2xl bg-yellow-100 px-4 py-2 text-center font-bold">{{ msg }}</p>
        <button type="submit" class="btn w-full bg-sky-400 text-white hover:bg-sky-500">
          <i class="fa-solid" :class="isLogin ? 'fa-right-to-bracket' : 'fa-user-plus'"></i>{{ isLogin ? 'تسجيل الدخول' : 'إنشاء حساب' }}
        </button>
      </form>

      <p class="mt-6 text-center">
        {{ isLogin ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟' }}
        <button class="font-extrabold text-orange-500 hover:underline" @click="isLogin = !isLogin; msg = ''">
          {{ isLogin ? 'إنشاء حساب' : 'تسجيل الدخول' }}
        </button>
      </p>
    </div>
  </div>
</template>