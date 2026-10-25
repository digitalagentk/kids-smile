<script setup lang="ts">
const px = (id: number, w = 800) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

// استبدل الإيموجي بصور الأطباء الحقيقية لاحقاً: أضف img: '/doctors/name.jpg'
const doctors = [
  { name: 'د. سارة العلي', role: 'استشارية طب أسنان الأطفال', exp: '12 سنة خبرة', emoji: '👩‍⚕️', bg: 'bg-sky-200' },
  { name: 'د. أحمد الحسيني', role: 'أخصائي تقويم الأسنان', exp: '9 سنوات خبرة', emoji: '👨‍⚕️', bg: 'bg-yellow-200' },
  { name: 'د. نور الزهراء', role: 'أخصائية علاج الجذور واللثة', exp: '8 سنوات خبرة', emoji: '👩‍⚕️', bg: 'bg-orange-200' },
]

const cases = [
  { title: 'يوم الفحص الأول', before: px(6502546), after: px(8260438), note: 'بعد جلسة لطيفة وخطة علاجية ممتعة، خرج بطل صغير بابتسامة واثقة 😄' },
  { title: 'جلسة العناية بالأسنان', before: px(6502553), after: px(6501925), note: 'أسنان نظيفة وصحية وطفلة تضحك من القلب 🌟' },
]
</script>

<template>
  <div class="mx-auto max-w-6xl px-6 py-14">
    <header class="mb-14 text-center">
      <h1 v-motion-pop class="mb-4 text-4xl font-extrabold text-sky-600 md:text-5xl">من نحن 💙</h1>
      <p v-motion-fade :delay="200" class="mx-auto max-w-2xl text-xl leading-9">نؤمن أن زيارة الطبيب يجب أن تكون تجربة سعيدة. فريقنا يجمع الخبرة الطبية مع حب الأطفال لنصنع ذكريات جميلة وابتسامات صحية.</p>
    </header>

    <h2 class="mb-8 text-center text-3xl font-extrabold text-orange-500">أطباؤنا الأبطال 🦸</h2>
    <div class="mb-20 grid gap-6 md:grid-cols-3">
      <div v-for="(d, i) in doctors" :key="d.name" v-motion-slide-visible-once-bottom :delay="i * 120" class="card text-center transition hover:-translate-y-2">
        <div class="mx-auto mb-4 grid h-32 w-32 place-items-center rounded-full border-8 border-white text-6xl shadow-lg" :class="d.bg">{{ d.emoji }}</div>
        <h3 class="text-2xl font-extrabold">{{ d.name }}</h3>
        <p class="mb-3 text-sky-600">{{ d.role }}</p>
        <span class="inline-block rounded-full bg-yellow-100 px-4 py-1 font-bold text-yellow-700"><i class="fa-solid fa-award ms-1"></i>{{ d.exp }}</span>
      </div>
    </div>

    <h2 class="mb-2 text-center text-3xl font-extrabold text-orange-500">قبل وبعد ✨</h2>
    <p class="mb-8 text-center">رحلات ابتسامة حقيقية بعد زيارة العيادة</p>
    <div class="space-y-8">
      <div v-for="(c, i) in cases" :key="c.title" v-motion-slide-visible-once-bottom :delay="i * 100" class="card">
        <h3 class="mb-4 text-center text-2xl font-extrabold text-sky-600">{{ c.title }}</h3>
        <div class="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <figure class="relative overflow-hidden rounded-3xl">
            <img :src="c.before" alt="قبل" loading="lazy" class="aspect-[4/3] w-full object-cover" />
            <figcaption class="absolute right-3 top-3 rounded-full bg-sky-500 px-4 py-1 font-bold text-white">قبل</figcaption>
          </figure>
          <i class="fa-solid fa-arrow-left mx-auto hidden text-3xl text-orange-400 md:block"></i>
          <i class="fa-solid fa-arrow-down mx-auto text-3xl text-orange-400 md:hidden"></i>
          <figure class="relative overflow-hidden rounded-3xl">
            <img :src="c.after" alt="بعد" loading="lazy" class="aspect-[4/3] w-full object-cover" />
            <figcaption class="absolute right-3 top-3 rounded-full bg-green-500 px-4 py-1 font-bold text-white">بعد 😁</figcaption>
          </figure>
        </div>
        <p class="mt-4 text-center leading-8">{{ c.note }}</p>
      </div>
    </div>
  </div>
</template>