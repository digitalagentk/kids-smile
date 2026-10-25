<script setup lang="ts">
const px = (id: number, w = 900) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

const services = [
  { icon: 'fa-magnifying-glass', title: 'فحص عام', text: 'جولة ممتعة نطمئن فيها على أسنان طفلك.', color: 'bg-sky-100 text-sky-500' },
  { icon: 'fa-wand-magic-sparkles', title: 'تنظيف وتلميع', text: 'أسنان لامعة كالنجوم بدون أي ألم.', color: 'bg-yellow-100 text-yellow-500' },
  { icon: 'fa-fill-drip', title: 'حشوات ملونة', text: 'حشوات آمنة وبألوان يحبها الأطفال.', color: 'bg-orange-100 text-orange-500' },
  { icon: 'fa-face-smile', title: 'تقويم الأسنان', text: 'ابتسامة منتظمة بخطة مريحة ولطيفة.', color: 'bg-green-100 text-green-500' },
  { icon: 'fa-heart-pulse', title: 'علاج الجذور', text: 'علاج دقيق بتخدير لطيف وبأحدث الأجهزة.', color: 'bg-pink-100 text-pink-500' },
  { icon: 'fa-shield-heart', title: 'الوقاية والفلورايد', text: 'نحمي الأسنان من التسوس مبكراً.', color: 'bg-purple-100 text-purple-500' },
]

const stats = [
  { n: '+5000', label: 'طفل سعيد', icon: 'fa-child-reaching' },
  { n: '+12', label: 'سنة خبرة', icon: 'fa-award' },
  { n: '+8', label: 'أطباء متخصصون', icon: 'fa-user-doctor' },
  { n: '99%', label: 'رضا الأهالي', icon: 'fa-heart' },
]

const reasons = [
  { icon: '🎈', title: 'بيئة مرحة', text: 'غرف ملونة وألعاب ورسوم تشعر طفلك بالأمان.' },
  { icon: '🧸', title: 'تعامل لطيف', text: 'نشرح كل خطوة بأسلوب قصصي بسيط.' },
  { icon: '🧼', title: 'تعقيم كامل', text: 'معايير نظافة وتعقيم عالية لكل جلسة.' },
]

const testimonials = [
  { name: 'أم محمد', text: 'ابني كان يخاف من الأطباء، والآن يطلب الذهاب للعيادة بنفسه! شكراً لكل الفريق.', stars: 5 },
  { name: 'أبو زينب', text: 'تعامل راقٍ وبيئة جميلة جداً. ابنتي خرجت سعيدة ومعها هدية.', stars: 5 },
  { name: 'أم يوسف', text: 'الدكتورة صبورة جداً وشرحت لنا طريقة تنظيف الأسنان بشكل ممتع.', stars: 5 },
]

const gallery = [
  { src: px(7800558), alt: 'طفلة مبتسمة على كرسي الأسنان الأزرق' },
  { src: px(12917374), alt: 'طبيبة وطفل يرفعان إبهامهما' },
  { src: px(7800560), alt: 'طبيب وطفل مبتسم أثناء الفحص' },
  { src: px(8260438), alt: 'طفلة مرحة تغمز على كرسي الأسنان' },
  { src: px(7800577), alt: 'طبيبة تفحص أسنان طفلة بلطف' },
  { src: px(7800561), alt: 'طفلة سعيدة تنتظر الفحص' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-b from-sky-200 via-sky-100 to-sky-50">
      <span class="absolute right-10 top-10 text-5xl animate-float">⭐</span>
      <span class="absolute left-12 top-24 text-6xl animate-float [animation-delay:1s]">🎈</span>
      <span class="absolute bottom-10 left-1/3 text-5xl animate-float [animation-delay:2s]">🦷</span>
      <div class="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div v-motion-slide-visible-once-right>
          <span class="mb-4 inline-block rounded-full bg-yellow-300 px-5 py-1 font-bold text-yellow-900">🌈 عيادة أسنان مخصصة للأطفال</span>
          <h1 class="mb-5 text-4xl font-extrabold leading-tight text-sky-600 md:text-6xl">ابتسامة طفلك <span class="text-orange-500">تبدأ هنا!</span></h1>
          <p class="mb-8 max-w-lg text-xl leading-9">نحوّل زيارة الطبيب إلى مغامرة ممتعة. رعاية أسنان آمنة ولطيفة بأيدي أطباء يحبون الأطفال.</p>
          <div class="flex flex-wrap gap-4">
            <router-link to="/booking" class="btn bg-orange-400 text-white shadow-orange-200 hover:bg-orange-500"><i class="fa-solid fa-calendar-check"></i> احجز الآن</router-link>
            <router-link :to="{ path: '/auth', query: { mode: 'register' } }" class="btn bg-white text-sky-600 shadow-sky-200 hover:bg-yellow-100"><i class="fa-solid fa-user-plus"></i> سجل الآن</router-link>
          </div>
        </div>
        <div v-motion-pop-visible-once class="relative">
          <img :src="px(12917374, 1000)" alt="طبيبة وطفلة مبتسمة في العيادة" class="aspect-[4/3] w-full rounded-[3rem] border-8 border-white object-cover shadow-2xl shadow-sky-300" />
          <div class="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-full bg-yellow-300 px-5 py-3 font-extrabold text-yellow-900 shadow-lg animate-wiggle">😁 بدون خوف!</div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="mx-auto max-w-6xl px-6 py-16">
      <h2 v-motion-fade-visible-once class="mb-2 text-center text-4xl font-extrabold text-sky-600">خدماتنا الممتعة 🎠</h2>
      <p class="mb-10 text-center text-lg">كل ما يحتاجه طفلك لأسنان صحية</p>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(s, i) in services" :key="s.title" v-motion-slide-visible-once-bottom :delay="i * 80" class="card text-center transition hover:-translate-y-2 hover:rotate-1">
          <span class="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full text-3xl" :class="s.color"><i class="fa-solid" :class="s.icon"></i></span>
          <h3 class="mb-2 text-2xl font-extrabold">{{ s.title }}</h3>
          <p class="leading-8">{{ s.text }}</p>
        </div>
      </div>
    </section>

    <!-- Why us + stats -->
    <section class="bg-yellow-100 py-16">
      <div class="mx-auto max-w-6xl px-6">
        <h2 v-motion-fade-visible-once class="mb-10 text-center text-4xl font-extrabold text-orange-500">لماذا تختارنا؟ 🌟</h2>
        <div class="mb-12 grid gap-6 md:grid-cols-3">
          <div v-for="(r, i) in reasons" :key="r.title" v-motion-pop-visible-once :delay="i * 120" class="card text-center">
            <div class="mb-3 text-5xl">{{ r.icon }}</div>
            <h3 class="mb-2 text-2xl font-extrabold text-sky-600">{{ r.title }}</h3>
            <p class="leading-8">{{ r.text }}</p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div v-for="(s, i) in stats" :key="s.label" v-motion-slide-visible-once-bottom :delay="i * 100" class="rounded-[2rem] bg-sky-400 p-6 text-center text-white shadow-lg">
            <i class="fa-solid mb-2 text-3xl text-yellow-200" :class="s.icon"></i>
            <p class="text-4xl font-extrabold">{{ s.n }}</p>
            <p class="font-bold">{{ s.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="mx-auto max-w-6xl px-6 py-16">
      <h2 v-motion-fade-visible-once class="mb-10 text-center text-4xl font-extrabold text-sky-600">آراء الأهالي 💬</h2>
      <div class="grid gap-6 md:grid-cols-3">
        <div v-for="(t, i) in testimonials" :key="t.name" v-motion-slide-visible-once-bottom :delay="i * 120" class="card relative">
          <i class="fa-solid fa-quote-right absolute left-5 top-5 text-3xl text-sky-100"></i>
          <div class="mb-3 text-yellow-400"><i v-for="n in t.stars" :key="n" class="fa-solid fa-star"></i></div>
          <p class="mb-4 leading-8">{{ t.text }}</p>
          <p class="font-extrabold text-orange-500">— {{ t.name }}</p>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="mx-auto max-w-6xl px-6 pb-8">
      <h2 v-motion-fade-visible-once class="mb-10 text-center text-4xl font-extrabold text-sky-600">معرض العيادة 📸</h2>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
        <figure v-for="(g, i) in gallery" :key="g.src" v-motion-pop-visible-once :delay="i * 80" class="group overflow-hidden rounded-[2rem] border-4 border-white shadow-lg">
          <img :src="g.src" :alt="g.alt" loading="lazy" class="aspect-square w-full object-cover transition duration-500 group-hover:scale-110 group-hover:rotate-1" />
        </figure>
      </div>
    </section>
  </div>
</template>