<template>
  <footer class="mt-20 rounded-t-[3rem] bg-sky-500 text-white">
    <div class="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
      <div class="md:col-span-2">
        <h3 class="mb-3 flex items-center gap-2 text-2xl font-extrabold"><span>🦷</span> عيادة ابتسامة الأطفال</h3>
        <p class="max-w-md leading-8 text-sky-50">نرعى ابتسامة طفلك بحب وأمان ومرح. فريق متخصص في طب أسنان الأطفال وبيئة مليئة بالألعاب والألوان.</p>
        <div class="mt-5 flex gap-3">
          <a v-for="s in ['facebook-f', 'instagram', 'whatsapp', 'youtube']" :key="s" href="#" class="grid h-11 w-11 place-items-center rounded-full bg-white/20 transition hover:-translate-y-1 hover:bg-yellow-300 hover:text-sky-700">
            <i :class="`fa-brands fa-${s}`"></i>
          </a>
        </div>
      </div>
      <div>
        <h4 class="mb-3 text-xl font-bold">روابط سريعة</h4>
        <ul class="space-y-2 text-sky-50">
          <li><router-link to="/" class="hover:text-yellow-200">الرئيسية</router-link></li>
          <li><router-link to="/about" class="hover:text-yellow-200">من نحن</router-link></li>
          <li><router-link to="/booking" class="hover:text-yellow-200">احجز الآن</router-link></li>
          <li><router-link to="/auth" class="hover:text-yellow-200">تسجيل الدخول</router-link></li>
        </ul>
      </div>
      <div>
        <h4 class="mb-3 text-xl font-bold">تواصل معنا</h4>
        <ul class="space-y-2 text-sky-50">
          <li><i class="fa-solid fa-location-dot ms-1"></i> النجف، العراق</li>
          <li><i class="fa-solid fa-phone ms-1"></i> <span dir="ltr">0770 000 0000</span></li>
          <li><i class="fa-solid fa-envelope ms-1"></i> info@smile-kids.example</li>
          <li><i class="fa-solid fa-clock ms-1"></i> السبت - الخميس: 9ص - 8م</li>
        </ul>
      </div>
    </div>
    <p class="border-t border-white/20 py-4 text-center text-sm text-sky-50">© 2026 عيادة ابتسامة الأطفال. جميع الحقوق محفوظة 💙</p>
  </footer>
</template>