<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const types = ['فحص عام', 'تنظيف', 'حشوات', 'تقويم', 'علاج جذور']
const today = new Date().toISOString().split('T')[0]

const form = reactive({ name: '', phone: '', date: '', type: '' })
const errors = reactive<Record<string, string>>({})
const done = ref(false)
const loading = ref(false)

const valid = computed(() => form.name.trim().length >= 3 && /^[0-9+\s]{9,15}$/.test(form.phone) && form.date && form.type)

function validate() {
  errors.name = form.name.trim().length >= 3 ? '' : 'اكتب الاسم (3 أحرف على الأقل)'
  errors.phone = /^[0-9+\s]{9,15}$/.test(form.phone) ? '' : 'رقم هاتف غير صحيح'
  errors.date = form.date ? '' : 'اختر التاريخ'
  errors.type = form.type ? '' : 'اختر نوع الحجز'
  return !Object.values(errors).some(Boolean)
}

function submit() {
  if (!validate()) return
  loading.value = true
  setTimeout(() => {
    loading.value = false
    done.value = true
    console.log('Booking:', { ...form }) // هنا ترسل البيانات للـ API لاحقاً
  }, 900)
}

function reset() {
  Object.assign(form, { name: '', phone: '', date: '', type: '' })
  Object.keys(errors).forEach((k) => (errors[k] = ''))
  done.value = false
}
</script>

<template>
  <div class="mx-auto grid max-w-5xl items-center gap-10 px-6 py-14 md:grid-cols-2">
    <div v-motion-slide-visible-once-right class="text-center md:text-start">
      <div class="mb-4 text-7xl animate-float">📅</div>
      <h1 class="mb-4 text-4xl font-extrabold text-sky-600 md:text-5xl">احجز موعد طفلك</h1>
      <p class="mb-6 text-xl leading-9">املأ البيانات وسنتواصل معك لتأكيد الموعد. زيارة ممتعة وبدون خوف! 🌈</p>
      <ul class="space-y-3 text-lg">
        <li><i class="fa-solid fa-circle-check ms-2 text-green-500"></i>تأكيد سريع عبر الهاتف</li>
        <li><i class="fa-solid fa-circle-check ms-2 text-green-500"></i>جولة تعريفية ممتعة للطفل</li>
        <li><i class="fa-solid fa-circle-check ms-2 text-green-500"></i>هدية صغيرة بعد كل زيارة 🎁</li>
      </ul>
    </div>

    <div v-motion-pop class="card !p-8">
      <div v-if="done" class="py-8 text-center">
        <div class="mb-3 text-7xl animate-wiggle">🎉</div>
        <h2 class="mb-2 text-3xl font-extrabold text-green-500">تم استلام طلبك!</h2>
        <p class="mb-6 leading-8">شكراً {{ form.name }}، سنتصل بك قريباً لتأكيد موعد <b>{{ form.type }}</b> بتاريخ <b>{{ form.date }}</b>.</p>
        <button class="btn bg-sky-400 text-white hover:bg-sky-500" @click="reset">حجز جديد</button>
      </div>

      <form v-else class="space-y-5" novalidate @submit.prevent="submit">
        <div>
          <label class="mb-1 block font-bold">اسم الطفل / ولي الأمر</label>
          <input v-model="form.name" class="input" placeholder="مثال: محمد أحمد" />
          <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
        </div>
        <div>
          <label class="mb-1 block font-bold">رقم الهاتف</label>
          <input v-model="form.phone" dir="ltr" inputmode="tel" class="input text-right" placeholder="07xx xxx xxxx" />
          <p v-if="errors.phone" class="mt-1 text-sm text-red-500">{{ errors.phone }}</p>
        </div>
        <div>
          <label class="mb-1 block font-bold">التاريخ</label>
          <input v-model="form.date" type="date" :min="today" class="input" />
          <p v-if="errors.date" class="mt-1 text-sm text-red-500">{{ errors.date }}</p>
        </div>
        <div>
          <label class="mb-1 block font-bold">نوع الحجز</label>
          <select v-model="form.type" class="input">
            <option value="" disabled>اختر الخدمة...</option>
            <option v-for="t in types" :key="t" :value="t">{{ t }}</option>
          </select>
          <p v-if="errors.type" class="mt-1 text-sm text-red-500">{{ errors.type }}</p>
        </div>
        <button type="submit" :disabled="loading" class="btn w-full bg-orange-400 text-white hover:bg-orange-500 disabled:opacity-60" :class="{ 'opacity-90': !valid }">
          <i class="fa-solid" :class="loading ? 'fa-spinner fa-spin' : 'fa-calendar-check'"></i>
          {{ loading ? 'جارٍ الإرسال...' : 'تأكيد الحجز' }}
        </button>
      </form>
    </div>
  </div>
</template>